const babelrc = require('babelrc-rollup').default;
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const rollup = require('rollup').rollup;

const defaultConfig = {
    format: 'umd',
    moduleName: 'SimpleAnimate',
};

const input = entry => ({
    entry,
    plugins: [babel(babelrc()), uglify()],
});

const output = dest => (bundle) => {
    bundle.write(Object.assign({}, defaultConfig, { dest }));
};

rollup(input('./src/animate.js')).then(output('./index.js'));
