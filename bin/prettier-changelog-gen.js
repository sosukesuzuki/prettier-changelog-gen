#!/usr/bin/env node

"use strict";

const fs = require("fs");
const path = require("path");

const { category, prNumber, username, prettierDir } = require("minimist")(
  process.argv.slice(2)
);

if (category == null) {
  category = "javascript";
}

if (
  ![
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
  ].includes(category)
) {
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

if (prettierDir == null) {
  prettierDir = process.cwd();
}

try {
  fs.statSync(prettierDir);
} catch (error) {
  if (error.code === "ENOENT") {
    console.error(`${prettierDir} does not exist`);
    process.exit(1);
  }
}

const changelogPath = path.resolve(
  prettierDir,
  `./changelog_unreleased/${category}`,
  `./pr-${prNumber}.md`
);

function getFileExt(category) {
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
      return category;
  }
}

const gitHubURL = "https://github.com";
const data = `#### ([#${prNumber}](${gitHubURL}/prettier/prettier/pull/${prNumber}) by [@${username}](${gitHubURL}/${username}))

\`\`\`${getFileExt(category)}
\`\`\`
`;

fs.writeFileSync(changelogPath, data);

console.log("DONE");
