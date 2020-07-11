const printCodeBlock = require("./codeblock");

/**
 * Returns changelog content string.
 * @param {String} prNumber
 * @param {String} username
 * @param {String} category
 * @returns {String}
 */
function printChangelog(prNumber, username, category) {
  const gitHubURL = "https://github.com";
  const titleSection = `#### ([#${prNumber}](${gitHubURL}/prettier/prettier/pull/${prNumber}) by [@${username}](${gitHubURL}/${username}))`;
  const codeBlockSection = printCodeBlock(category);
  return titleSection + "\n" + codeBlockSection + "\n";
}

module.exports = printChangelog;
