// const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-cssnext": {},
    "saladcss-bem": {
      defaultNamespace: "wen", // default namespace to use, none by default
      style: 'suit', // suit or bem, suit by default,
      separators: {
        modifier: "--",
        descendent: "__" // overwrite any default separator for chosen style
      },
      shortcuts: {
        component: "b",
        descendent: "e", // item
        modifier: "m",
        utility: "util" //override at-rule name
      }      
    }
  }
};
