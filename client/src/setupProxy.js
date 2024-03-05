const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/api/auth/signin',
        createProxyMiddleware({
            target: 'https://microservices-admin.onrender.com/',
            changeOrigin: true,
        })
    )

    app.use(
        '/api/auth/signup',
        createProxyMiddleware({
            target: 'https://microservices-admin.onrender.com/',
            changeOrigin: true,
        })
    )
}
