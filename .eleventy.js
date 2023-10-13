const pluginImages = require('./.eleventy.config.images.js');

module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: './public/styles/**/*.css',
  });

  // eleventyConfig.addPassthroughCopy("./src/static");
  eleventyConfig.addPassthroughCopy('./src/styles');

  // App plugins
  eleventyConfig.addPlugin(pluginImages);

  // Shortcodes
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  eleventyConfig.setDataDeepMerge(true);

  return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
