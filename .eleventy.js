const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");


module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/styles");

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    eleventyConfig.addPlugin(inclusiveLangPlugin);
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.setDataDeepMerge(true);

    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "public",
        },
    };
};