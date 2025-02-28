# 1. Node.js の公式イメージをベースにする
FROM node:18-alpine

# 2. 作業ディレクトリを設定
WORKDIR /app

# 3. package.json と package-lock.json をコンテナにコピー
COPY package.json package-lock.json ./

# 4. 依存関係をインストール
RUN npm install

# 5. アプリケーションのソースコードをコピー
COPY . .

# 6. 開発サーバーを起動
CMD ["npm", "run", "dev"]
