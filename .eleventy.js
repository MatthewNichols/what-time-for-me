module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({"./src/styles/": "styles"});
  eleventyConfig.addPassthroughCopy({"./src/client-side-js/": "script"});

  return {
    dir: {
      input: "src"
    }
  }

};