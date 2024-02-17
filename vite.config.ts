import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'

const allowJs = {
    name: 'treat-js-files-as-jsx',
    async transform(code: any, id: any) {
        if (!id.match(/src\/.*\.js$/))  return null

        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return transformWithEsbuild(code, id, {
        loader: 'jsx',
        jsx: 'automatic',
        })
    },
}

export default defineConfig({
    // depending on your application, base can also be "/"
    base: '',
    plugins: [allowJs, react(), viteTsconfigPaths()],
    server: {
        // this ensures that the browser opens upon server start
        open: true,
        // this sets a default port to 3000
        port: 3000,
    },
})
