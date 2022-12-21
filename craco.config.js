const CracoAlias = require('craco-alias');

module.exports = {
  webpack: {
    configure: (config, { env, paths }) => {
      config.module.rules.unshift({
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'url-loader'],
      });
      return config;
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
};
