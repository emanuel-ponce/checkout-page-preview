import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    checkoutPage: `checkoutPage@${process.env.NEXT_PUBLIC_CHECKOUT_PAGE_URL}/_next/static/${location}/remoteEntry.js`
  };
};

export default {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'www.cicloplast.com', 'static-00.iconduck.com']
  },
  async headers() {
    return [
      {
        source: '*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' }
        ]
      }
    ];
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
          './previewSlice': './src/state/slices/local/preview.slice.ts',
          './devicesOptionsEnum': './src/shared/enums/devicesOptions.enum.ts'
        }
      })
    );
    return config;
  }
};
