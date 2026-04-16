import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // GitHub Pages のリポジトリ名に合わせてベースパスを設定
  base: '/official-/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        essay01: resolve(__dirname, 'essay-01.html'),
        essay02: resolve(__dirname, 'essay-02.html'),
        essay03: resolve(__dirname, 'essay-03.html')
      }
    }
  },
});
