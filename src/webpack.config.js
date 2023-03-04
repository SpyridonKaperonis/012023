module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|ico)$/i,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      ],
    },
  };