const path = require('path');
const eleventyImage = require('@11ty/eleventy-img');

module.exports = (eleventyConfig) => {
  function relativeToInputPath(inputPath, relativeFilePath) {
    let baseDir = path.dirname(inputPath);

    // Navigate back to the 'src' directory
    while (!baseDir.endsWith('/src') && !baseDir.endsWith('\\src')) {
      baseDir = path.resolve(baseDir, '..');
    }

    return path.resolve(baseDir, 'static', relativeFilePath);
  }

  // Eleventy Image shortcode
  // https://www.11ty.dev/docs/plugins/image/
  eleventyConfig.addAsyncShortcode(
    'image',
    async function imageShortcode(src, alt, widths, sizes) {
      // Full list of formats here: https://www.11ty.dev/docs/plugins/image/#output-formats
      let formats = ['svg', 'auto'];
      let file = relativeToInputPath(this.page.inputPath, src);
      let metadata = await eleventyImage(file, {
        widths: widths || ['auto'],
        formats,
        outputDir: path.join(eleventyConfig.dir.output, 'img'), // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
      });

      let imageAttributes = {
        alt,
        sizes,
        loading: 'lazy',
        decoding: 'async',
      };

      return eleventyImage.generateHTML(metadata, imageAttributes);
    }
  );
};
