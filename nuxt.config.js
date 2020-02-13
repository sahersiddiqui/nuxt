module.exports = {
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        '@/assets/css/main.css',
        '@fortawesome/fontawesome-svg-core/styles.css'

        // '@/assets/css/variable.scss',
        // '@/assets/css/element-variables.scss',
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/element.js',
        '@/plugins/font-awesome.js',
        '@/plugins/lodash.js',
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // '@nuxt/typescript-build'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth'
    ],
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/api/login', method: 'post', propertyName: 'token' },
                    logout: { url: '/api/auth/logout', method: 'post' },
                    user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
                },
                // tokenRequired: true,
                // tokenType: 'bearer'
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        transpile: [/^element-ui/],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            config.node = {
                fs: 'empty'
            }
        },
        watch: ['api']
    },
    /**
     * router middleware
     */
    router: {
        middleware: 'route'
    },
    server: {
        port: 3001
    },
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3001/api/'
    }
}