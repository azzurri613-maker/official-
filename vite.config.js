import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages のリポジトリ名に合わせてベースパスを設定
  base: '/official-/',
  build: {
    outDir: 'dist',
  },
});
