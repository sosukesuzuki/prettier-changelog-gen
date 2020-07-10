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
 * Returns code block content.
 * @param {String} category
 * @returns {String}
 */
function printCodeBlock(category) {
  return `\`\`\`${getCodeBlockFileExt(category)}
\`\`\``;
}

module.exports = printCodeBlock;
