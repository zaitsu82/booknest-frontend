環境構築手順<br>
1.プロジェクトをクローン<br>
2.クローンしたプロジェクト内のdocker-compose.ymlファイルを編集する。<br>
　・4行目の「context:」の左側に自身のローカル環境でのフロントエンドプロジェクトのパスを記載。<br>
  （絶対パスでも相対パスでもよい→相対パスの場合はdocker-compose.ymlから見た相対パスを記載）<br>
  ・9行目も上記と同様に修正（「:/app」の記載はそのまま残す）<br>
  ・19行目「build:」の左側にバックエンドプロジェクトのパスを記載。フロントエンドと同様の修正を行う。<br>
  ・24行目も上記と同様に修正（「:/app」の記載はそのまま残す）<br>
3.docker-compose.ymlがあるディレクトリにて以下のコマンドを実行。<br>
  （ローカル環境にDocker Desktopをインストールしていない場合は、先にインストールを行う）<br>
  docker-compose up --build<br>
4.localhost:3000にて正常にアプリケーションが実行できていることを確認<br>
5.docker終了<br>
 1 「Ctrl+C」をターミナル上で入力するとdockerがstopする<br>
 2 以下コマンドを入力して、dockerコンテナを削除<br>
  

## [Devias Kit - React](https://material-kit-react.devias.io/)

![license](https://img.shields.io/badge/license-MIT-blue.svg)

[![Devias Kit - React](https://github.com/devias-io/material-kit-react/blob/main/public/assets/thumbnail.png)](https://material-kit-react.devias.io/)

> Free React Admin Dashboard made with [MUI's](https://mui.com) components, [React](https://reactjs.org) and of course [Next.js](https://github.com/vercel/next.js) to boost your app development process!

## Pages 

- [Dashboard](https://material-kit-react.devias.io)
- [Customers](https://material-kit-react.devias.io/dashboard/customers)
- [Integrations](https://material-kit-react.devias.io/dashboard/integrations)
- [Settings](https://material-kit-react.devias.io/dashboard/settings)
- [Account](https://material-kit-react.devias.io/dashboard/account)
- [Sign In](https://material-kit-react.devias.io/auth/sign-in)
- [Sign Up](https://material-kit-react.devias.io/auth/sign-up)
- [Reset Password](https://material-kit-react.devias.io/auth/reset-password)

## Free Figma Community File

- [Duplicate File](https://www.figma.com/file/b3L1Np4RYiicZAOMopHNkm/Devias-Dashboard-Design-Library-Kit)

## Upgrade to PRO Version

We also have a pro version of this product which bundles even more pages and components if you want
to save more time and design efforts :)

| Free Version (this one)  | [Devias Kit Pro](https://mui.com/store/items/devias-kit-pro/)                |
| ------------------------ | :--------------------------------------------------------------------------- |
| **8** Pages              | **80+** Pages                                                                |
| ✔ Custom Authentication  | ✔ Authentication with **Amplify**, **Auth0**, **Firebase** and **Supabase**  |
| -                        | ✔ Vite Version                                                               |
| -                        | ✔ Dark Mode Support                                                          |
| -                        | ✔ Complete Users Flows                                                       |
| -                        | ✔ Premium Technical Support                                                  |

## Quick start

- Clone the repo: `git clone https://github.com/devias-io/material-kit-react.git`
- Make sure your Node.js and npm versions are up to date
- Install dependencies: `npm install` or `yarn`
- Start the server: `npm run dev` or `yarn dev`
- Open browser: `http://localhost:3000`

## File Structure

Within the download you'll find the following directories and files:

```
┌── .editorconfig
├── .eslintrc.js
├── .gitignore
├── CHANGELOG.md
├── LICENSE.md
├── next-env.d.ts
├── next.config.js
├── package.json
├── README.md
├── tsconfig.json
├── public
└── src
	├── components
	├── contexts
	├── hooks
	├── lib
	├── styles
	├── types
	└── app
		├── layout.tsx
		├── page.tsx
		├── auth
		└── dashboard
```

## Resources

- More freebies like this one: https://devias.io

## Reporting Issues:

- [Github Issues Page](https://github.com/devias-io/material-kit-react/issues)

## License

- Licensed under [MIT](https://github.com/devias-io/material-kit-react/blob/main/LICENSE.md)

## Contact Us

- Email Us: support@deviasio.zendesk.com
