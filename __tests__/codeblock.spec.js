const {
  getCodeBlockFileExt,
  genPrintComment,
  printCodeBlock,
} = require("../src/codeblock");
const { categories } = require("../src/category");

describe("codeblock", () => {
  describe("getCodeBlockFileExt", () => {
    test.each([
      ["prints js for javascript", "javascript", "js"],
      ["prints sh for cli", "cli", "sh"],
      ["prints js for flow", "flow", "js"],
      ["prints gql for graphql", "graphql", "gql"],
      ["prints json for json", "json", "json"],
      ["prints md for markdown", "markdown", "md"],
      ["prints mdx for mdx", "mdx", "mdx"],
    ])("%s", (_, category, ext) => {
      const res = getCodeBlockFileExt(category);
      expect(res).toBe(ext);
    });

    test("prints all categories", () => {
      const res = [];
      for (const category of categories) {
        res.push(getCodeBlockFileExt(category.name));
      }
      for (const ext of res) {
        expect(ext).not.toBeNull();
      }
    });
  });

  describe("genPrintComment", () => {
    const COMMENT_VALUE = "foofoo";
    test.each([
      ["generates print comment fun for js", "js", `// ${COMMENT_VALUE}`],
      [
        "generates print comment fun for html",
        "html",
        `<!-- ${COMMENT_VALUE} -->`,
      ],
      ["generates print comment fun for sh", "sh", `# ${COMMENT_VALUE}`],
    ])("%s", (_, ext, comment) => {
      const printComment = genPrintComment(ext);
      const res = printComment(COMMENT_VALUE);
      expect(res).toBe(comment);
    });
  });

  describe("printCodeBlock", () => {
    test.each([
      [
        "prints code block for js",
        "javascript",
        `\`\`\`js
// Input

// Prettier stable

// Prettier master
\`\`\``,
      ],
      [
        "prints code block for html",
        "html",
        `\`\`\`html
<!-- Input -->

<!-- Prettier stable -->

<!-- Prettier master -->
\`\`\``,
      ],
      [
        "prints code block for sh",
        "cli",
        `\`\`\`sh
# Input

# Prettier stable

# Prettier master
\`\`\``,
      ],
    ])("%s", (_, category, codeblock) => {
      const res = printCodeBlock(category);
      expect(res).toBe(codeblock);
    });
  });
});
