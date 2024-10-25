const { JSDOM } = require("jsdom");

module.exports = (options = {}) => {
  global.window = new JSDOM(
    options.html || "",
    Object.assign({ url: "http://localhost/" }, options)
  ).window;
  global.document = window.document;
};
