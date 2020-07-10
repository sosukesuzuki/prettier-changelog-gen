#!/usr/bin/env node

"use strict";

const fs = require("fs");
const path = require("path");
const genChangelog = require("../src");

const { category, prNumber, username, prettierDir } = require("minimist")(
  process.argv.slice(2)
);

if (category == null) {
  category = "javascript";
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

const data = genChangelog(category, username, prNumber);

fs.writeFileSync(changelogPath, data);

console.log("DONE");
