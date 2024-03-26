import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    checkoutPage: `checkoutPage@http://localhost:3001/_next/static/${location}/remoteEntry.js`
  };
};

export default {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'www.cicloplast.com', 'static-00.iconduck.com']
  },
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'checkoutPagePreview',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(options.isServer),
        exposes: {
          './store': './src/state/store/store.ts',
          './customizationSlice': './src/state/slices/local/customization.slice.ts',
          './stepperSlice': './src/state/slices/local/stepper.slice.ts',
          './previewSlice': './src/state/slices/local/preview.slice.ts'
        }
      })
    );
    return config;
  }
};
