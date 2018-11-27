var webpack = require('webpack');
const appConfig = require('./src/app.config')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const path = require('path')

module.exports = {
    configureWebpack: {
      // We provide the app's title in Webpack's name field, so that
      // it can be accessed in index.html to inject the correct title.
      name: appConfig.title,
      // Set up all the aliases we use in our app.
      resolve: {
        alias: require('./aliases.config').webpack,
      },
      plugins: [
        
        new webpack.IgnorePlugin(/^\.\/locale$/, /Codemirror$/, /lodash$/),
        // This will be enabled whe building
        /*
        new PrerenderSPAPlugin({
                staticDir: path.join(__dirname, 'dist'),
                routes: [ 
                    '/',
                    '/wallet',
                    '/about'
                ]
                
                
        })// End of prerender */
      ]
    },
    css: {
      // Enable CSS source maps.
      sourceMap: false,
    },
  }

      
