/**
 * Get file ext for markdown code block from category name.
 * @param {String} category
 * @returns {String}
 */
function getCodeBlockFileExt(category) {
  switch (category) {
    case "angular":
    case "handlebars":
    case "lwc":
      return "";
    case "api":
    case "javascript":
      return "js";
    case "cli":
      return "sh";
    case "flow":
      return "js";
    case "graphql":
      return "gql";
    case "json":
      return "json";
    case "markdown":
      return "md";
    case "typescript":
      return "ts";
    default:
      return "";
  }
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

module.exports = printCodeBlock;
