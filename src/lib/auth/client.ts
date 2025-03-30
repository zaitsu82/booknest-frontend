'use client';

import type { User } from '@/types/user';
import axios from 'axios';

function generateToken(): string {
  const arr = new Uint8Array(12);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, (v) => v.toString(16).padStart(2, '0')).join('');
}

const user = {
  id: 'USR-000',
  avatar: '/assets/avatar.png',
  firstName: 'Sofia',
  lastName: 'Rivers',
  email: 'sofia@devias.io',
} satisfies User;

export interface SignUpParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface SignUpResponse {
  message: string;
  token: string;
}

export interface SignInWithOAuthParams {
  provider: 'google' | 'discord';
}

export interface SignInWithPasswordParams {
  email: string;
  password: string;
}

export interface ResetPasswordParams {
  email: string;
}

class AuthClient {
  async signUp(signUpParams: SignUpParams): Promise<{ error?: string }> {
    // アカウント新規登録API呼び出し
    try {
      const response = await axios.post<SignUpResponse>('http://localhost:8080/auth/register', {
        firstName: signUpParams.firstName,
        lastName: signUpParams.lastName,
        email: signUpParams.email,
        password: signUpParams.password
      });
      //JWTをローカルストレージに保持
      const token = response.data.token;
      if (token) {
        localStorage.setItem('custome-auth-token', token);
      } else {
        return { error: '認証に失敗しました。サポートにお問い合わせください。' };
      }
    } catch (error: any) {
      // エラーメッセージを取り出して返す
      const errorMessage =
        error.response?.data?.message || 'アカウントの登録に失敗しました。';
      return { error: errorMessage };
    }
    // 成功時はエラーなし
    return {};
  }

  async signInWithOAuth(_: SignInWithOAuthParams): Promise<{ error?: string }> {
    return { error: 'Social authentication not implemented' };
  }

  async signInWithPassword(params: SignInWithPasswordParams): Promise<{ error?: string }> {
    const { email, password } = params;

    // Make API request

    // We do not handle the API, so we'll check if the credentials match with the hardcoded ones.
    if (email !== 'sofia@devias.io' || password !== 'Secret1') {
      return { error: 'Invalid credentials' };
    }

    const token = generateToken();
    localStorage.setItem('custom-auth-token', token);

    return {};
  }

  async resetPassword(_: ResetPasswordParams): Promise<{ error?: string }> {
    return { error: 'Password reset not implemented' };
  }

  async updatePassword(_: ResetPasswordParams): Promise<{ error?: string }> {
    return { error: 'Update reset not implemented' };
  }

  async getUser(): Promise<{ data?: User | null; error?: string }> {
    // Make API request

    // We do not handle the API, so just check if we have a token in localStorage.
    const token = localStorage.getItem('custom-auth-token');

    if (!token) {
      return { data: null };
    }

    return { data: user };
  }

  async signOut(): Promise<{ error?: string }> {
    localStorage.removeItem('custom-auth-token');

    return {};
  }
}

export const authClient = new AuthClient();
