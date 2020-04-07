module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  devServer: {
    host: 'localhost',
  },
  transpileDependencies: [
    'vuetify',
  ],

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Imf und Firus Admin Panel'
        return args
      })
  }
};

// Imf und Firus Admin Panel
