const path = require('path')
const aliases = {
    '@': 'src',
    '@src': 'src',
    '@fonts': 'src/assets/fonts',
    '@router': 'src/router',
    '@views': 'src/views',
    '@components': 'src/components',
    '@assets': 'src/assets',
    '@services': 'src/services',
    '@state': 'src/state/index',
    '@state_src': 'src/state',
    '@plugins': 'src/assets/plugins',
    '@sass': 'src/assets/sass/main.scss',
 }
module.exports = {
    webpack: {},
    jest: {},
    jsconfig: {},
  }
for (const alias in aliases) {
    const aliasTo = aliases[alias]
    module.exports.webpack[alias] = resolveSrc(aliasTo)
    module.exports.jest['^' + alias + '/(.*)$'] = '<rootDir>/' + aliasTo + '/$1'
    module.exports.jsconfig[alias + '/*'] = [aliasTo + '/*']
    module.exports.jsconfig[alias] = aliasTo.includes('/index.')
      ? [aliasTo]
      : [
          aliasTo + '/index.js',
          aliasTo + '/index.json',
          aliasTo + '/index.vue',
          aliasTo + '/index.scss',
          aliasTo + '/index.css'
        ]
  }


function resolveSrc(_path) {
    return path.resolve(__dirname, _path)
}
