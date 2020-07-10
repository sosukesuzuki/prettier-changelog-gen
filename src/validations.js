/**
 * Check if a category is valid.
 * @param {String} category
 * @returns {Boolean}
 */
function isValidCategory(category) {
  return [
    "angular",
    "api",
    "cli",
    "css",
    "flow",
    "graphql",
    "handlebars",
    "html",
    "javascript",
    "json",
    "lwc",
    "markdown",
    "mdx",
    "scss",
    "typescript",
    "vue",
    "yaml",
  ].includes(category);
}

/**
 * Check if a pr number string is valid.
 * @param {String} prNumber
 * @returns {Boolean}
 */
function isValidPrNumber(prNumber) {
  return Number.isNaN(parseInt(prNumber, 10));
}

/**
 * Check if a username is valid.
 * @param {String} username
 * @returns {Boolean}
 */
function isValidUsername(username) {
  return username != null;
}

module.exports = {
  isValidCategory,
  isValidPrNumber,
  isValidUsername,
};
