module.exports = {
    pages: {
        index: {
              entry: 'src/main.js',
              template: 'public/index.html',
              filename: 'index.html',
              title: 'MQ',
              chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        subpage: 'src/subpage/main.js'
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/mq/'
    : '/',
    outputDir: 'docs',
    assetsDir: './',
    publicPath: './'
}
  
