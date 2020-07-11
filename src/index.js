const {
  isValidCategory,
  isValidPrNumber,
  isValidUsername,
} = require("./validations");
const printChangelog = require("./changelog");

/**
 * Generate changelog content with validation.
 * @param {String} category
 * @param {String} prNumber
 * @param {String} username
 * @param {String} prettierDir
 * @returns {String}
 */
function genChangelog(category, prNumber, username) {
  if (!isValidCategory(category)) {
    throw new Error(`Invalid category name: ${category}`);
  }
  if (!isValidPrNumber(prNumber)) {
    throw new Error(`Invalid pr number: ${prNumber}`);
  }
  if (!isValidUsername(username)) {
    throw new Error(`Invalid username: ${username}`);
  }
  return printChangelog(prNumber, username, category);
}

module.exports = genChangelog;
