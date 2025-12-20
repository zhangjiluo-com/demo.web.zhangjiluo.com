import { defineConfig } from 'vite'
import minifyHtml from 'rollup-plugin-minify-html-literals-v3'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [minifyHtml(), dts()],
  build: {
    minify: true,
    lib: {
      entry: ['./source/index.ts', './source/vue.ts'],
      formats: ['es', 'cjs'],
    },
    target: 'esnext',
  },
})
