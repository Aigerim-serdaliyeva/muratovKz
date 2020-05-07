import path from 'path';
import { config } from 'dotenv';
import PurgecssPlugin from 'purgecss-webpack-plugin';
import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import tailwindCss from 'tailwindcss';
import autoPrefixer from 'autoprefixer';
// import { getOffset } from './utils';
import doesNothing from './plugins/postcss-does-nothing';
config();

export default {
    generate: {
        routes: [
            '/article/0',
            '/article/1',
            '/article/2',
            '/article/3',
            '/article/4',
            '/article/5',
            '/service/0',
            '/service/1',
            '/service/2',
            '/service/3',
            '/service/4',
            '/service/5'
        ]
    },
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        title: 'Muratov Partners',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Muratov Partners'
            }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/favicon-white.png?v=002' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['~assets/css/tailwind.css', 'animate.css/animate.min.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~plugins/object-fit-images.client.js' },
        { src: '~plugins/vue-notification.client.js' },
        { src: '~plugins/validate.js' },
        { src: '~plugins/wow.client.js' },
        { src: '~plugins/scroll-to.client.js' },
        { src: '~plugins/detect-ie.client.js' }
    ],
    optimization: {
        splitChunks: {
            pages: true,
            commons: true
        }
    },
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    ],
    /*
     ** Nuxt.js modules
     */

    /*
     ** Build configuration
     */
    build: {
        extractCSS: true,
        transpile: ['vee-validate/dist/rules'],
        /*
         ** You can extend webpack config here
         */
        postcss: {
            plugins: [
                postcssImport(),
                postcssPresetEnv({ stage: 1 }),
                tailwindCss(
                    path.resolve(__dirname, './tailwind/tailwind.config.js')
                ),
                process.env.NODE_ENV === 'production'
                    ? autoPrefixer()
                    : doesNothing()
            ]
        }
    },
    env: {
        dev: process.env.NODE_ENV === 'development',
        appVersion: process.env.APP_VERSION,
        fakeProduction: process.env.FAKE_PRODUCTION,
        baseUrl: process.env.BASE_URL
    },
    extend(config, ctx) {
        if (!ctx.isDev) {
            config.plugins.push(
                new PurgecssPlugin({
                    paths: [
                        'components/**/*.vue',
                        'layouts/**/*.vue',
                        'pages/**/*.vue',
                        'plugins/**/*.js'
                    ],
                    styleExtensions: ['.css'],
                    whitelist: ['body', 'html', 'nuxt-progress'],
                    extractors: [
                        {
                            extractor(content) {
                                return content.match(/[\w-.:/]+(?<!:)/g);
                            },
                            extensions: ['html', 'vue', 'js']
                        }
                    ]
                })
            );
        }
    },

    router: {
        scrollBehavior: async (to, from, savedPosition) => {
            if (savedPosition) {
                return savedPosition;
            }

            const findEl = async (hash, x) => {
                return (
                    document.querySelector(hash) ||
                    new Promise((resolve, reject) => {
                        if (x > 50) {
                            return resolve();
                        }
                        setTimeout(() => {
                            resolve(findEl(hash, ++x || 1));
                        }, 100);
                    })
                );
            };

            function getOffset(el) {
                const rect = el.getBoundingClientRect();

                return {
                    top: rect.top + window.scrollY,
                    left: rect.left + window.scrollX
                };
            }

            if (to.hash) {
                const el = await findEl(to.hash);
                if ('scrollBehavior' in document.documentElement.style) {
                    return window.scrollTo({
                        top: getOffset(el).top,
                        behavior: 'smooth'
                    });
                } else {
                    return window.scrollTo(0, el.offsetTop);
                }
            }

            return window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
};
