const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");


module.exports = function (eleventyConfig) {
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