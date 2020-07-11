const { categories } = require("./category");

/**
 * Get file ext for markdown code block from category name.
 * @param {String} category
 * @returns {String}
 */
function getCodeBlockFileExt(category) {
  return categories.find(({ name }) => name === category).ext;
}

/**
 * Returns a function to print comment strig for each ext.
 * @param {String} ext
 * @returns {(value: string) => string}
 */
function genPrintComment(ext) {
  return function (value) {
    switch (ext) {
      case "js":
      case "ts":
      case "json":
        return `// ${value}`;
      case "md":
      case "html":
      case "mdx":
        return `<!-- ${value} -->`;
      case "sh":
        return `# ${value}`;
      default:
        return "";
    }
  };
}

/**
 * Returns code block content.
 * @param {String} category
 * @returns {String}
 */
function printCodeBlock(category) {
  const ext = getCodeBlockFileExt(category);
  const printComment = genPrintComment(ext);
  return `\`\`\`${ext}
${printComment("Input")}

${printComment("Prettier stable")}

${printComment("Prettier master")}
\`\`\``;
}

module.exports = {
  getCodeBlockFileExt,
  genPrintComment,
  printCodeBlock,
};
