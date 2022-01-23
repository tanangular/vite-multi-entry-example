import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: `${__dirname}/index.html`,
        nested: `${__dirname}/nested/index.html`,
      }
    }
  }
})
