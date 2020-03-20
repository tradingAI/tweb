const { override, fixBabelImports, addLessLoader, addBabelPlugin, removeModuleScopePlugin, addWebpackModuleRule } = require('customize-cra');
const darkThemeVars = require('antd/dist/dark-theme');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),

    // https://ant.design/docs/react/customize-theme#Use-dark-theme
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            'hack': `true;@import "${require.resolve('antd/lib/style/color/colorPalette.less')}";`,
            ...darkThemeVars,
        },
    }),

    addBabelPlugin("@babel/plugin-proposal-optional-chaining"),

    // Enable import files outside `src`, i.e. from `public` like
    //   import scrollSVG from '../../../public/static/image/scroll.svg'
    removeModuleScopePlugin(),

    // Enable import `svg` files into strings
    addWebpackModuleRule({
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    })
);
