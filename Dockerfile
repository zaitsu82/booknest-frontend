# ベースイメージを指定
FROM node:20-alpine

# 必要なツールをインストール
RUN apk add --no-cache curl && npm install -g pnpm

# 作業ディレクトリを設定
WORKDIR /app

# package.json と pnpm-lock.yaml をコピー
COPY package.json pnpm-lock.yaml ./

# 依存関係をインストール
RUN pnpm install

# ソースコードをコピー
COPY . .

# ビルド（必要に応じて）
RUN pnpm build

# アプリケーションを実行
CMD ["pnpm", "dev"]
