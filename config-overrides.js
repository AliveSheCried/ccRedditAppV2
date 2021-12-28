const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@assets": "src/assets",
    "@components": "src/components",
    "@store": "src/store",
    "@utils": "src/utils",
    "@pages": "src/pages",
  })(config);

  return config;
};
