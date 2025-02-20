module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            test: /\.(obj|mtl|fbx)$/,
            use: {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'static/media/',
              },
            },
          },
        ],
      },
    },
  },
};
