import path from 'path';
import { fileURLToPath } from 'url';

/** @type {import('next').NextConfig} */
const config = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.watchOptions = {
                poll: 1000, // 1秒ごとに変更をチェック
                aggregateTimeout: 300, // 変更をまとめて適用
            };
        }
        return config;
    },
};

export default config;
