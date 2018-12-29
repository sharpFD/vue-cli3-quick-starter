const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    baseUrl: process.env.VUE_APP_BASE_URL,
    devServer: {
        proxy: {
            '/api': {
                target: process.env.VUE_APP_PROXY_URL, // http://10.16.181.221:3000
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/mock/103/test/'
                }
            },
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('layout', resolve('src/layout'))
            .set('views', resolve('src/views'))
    }
}