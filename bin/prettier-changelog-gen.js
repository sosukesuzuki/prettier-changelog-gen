#!/usr/bin/env node

"use strict";

const fs = require("fs");
const path = require("path");

const [category, prNumber, username] = process.argv.slice(2);

const categorySet = new Set([
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
]);

if (!categorySet.has(category)) {
  console.error(`Unknown category: ${category}`);
  process.exit(1);
}

if (Number.isNaN(parseInt(prNumber, 10))) {
  console.error(`NaN pull request number: ${prNumber}`);
  process.exit(1);
}

if (username == null) {
  console.error("username id is undefined");
  process.exit(1);
}

const changelogPath = path.resolve(
  process.cwd(),
  `./changelog_unreleased/${category}`,
  `./pr-${prNumber}.md`
);

function getExt(category) {
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
    default:
      return category;
  }
}

const gitHubURL = "https://github.com";
const data = `#### ([#${prNumber}](${gitHubURL}/prettier/prettier/pull/${prNumber}) by [@${username}](${gitHubURL}/${username}))

\`\`\`${getExt(category)}
\`\`\`
`;

fs.writeFileSync(changelogPath, data);

console.log("DONE");
