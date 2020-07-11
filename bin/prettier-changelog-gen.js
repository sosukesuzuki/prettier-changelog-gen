#!/usr/bin/env node

"use strict";

const fs = require("fs");
const path = require("path");
const genChangelog = require("../src");

/**
 * Check a file or dir at a path.
 * @param {String} path
 * @returns {Boolean}
 */
function exist(path) {
  try {
    fs.statSync(path);
  } catch (error) {
    if (error.code === "ENOENT") {
      return false;
    }
  }
  return true;
}

const {
  category,
  prNumber,
  username,
  prettierDir = process.cwd(),
} = require("minimist")(process.argv.slice(2));

if (!exist(prettierDir)) {
  console.error(`${prettierDir} does not exist`);
  process.exit(1);
}

try {
  const changelogPath = path.resolve(
    prettierDir,
    `./changelog_unreleased/${category}`,
    `./pr-${prNumber}.md`
  );
  const data = genChangelog(category, username, prNumber);
  fs.writeFileSync(changelogPath, data);
  console.log("DONE");
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
