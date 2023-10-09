module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: './public/styles/**/*.css',
  });

  eleventyConfig.addPassthroughCopy('./src/styles');

  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  eleventyConfig.setDataDeepMerge(true);

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
