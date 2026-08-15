import { defineConfig } from "astro/config";
import icon from 'astro-icon';

import tailwind from "@astrojs/tailwind";
import path from "path";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";


export default defineConfig({
  output: 'server', // 或 'hybrid'
  adapter: vercel({
    runtime: 'nodejs20.x', // 显式指定最新的运行环境，避免默认退回 nodejs18
  }),
  integrations: [
    icon(), // 注册集成
  ],
});
