import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'




// https://vite.dev/config/
export default defineConfig({
    base: '/portfolio/',
    //base: './',
    plugins: [react()],
    server: {
        port: 3001
    },
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve('.') },
            { find: '@package', replacement: path.resolve('./package') },
            { find: '@src', replacement: path.resolve('./src') }
        ]
    },
    build: {
        outDir: 'dist', // output directory 맞춰주기
    },
    
})
