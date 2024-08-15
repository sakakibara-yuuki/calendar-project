/*
 * dangerfile.js
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
// dangerfile.js

const { danger, warn } = require("danger");

const prLineThreshold = 200;

if (danger.github.pr.additions + danger.github.pr.deletions > prLineThreshold) {
  warn(`Pull request is too large:
        It has ${danger.github.pr.additions + danger.github.pr.deletions} changes.`);
}

const modifiedFilesThreshold = 10;

if (danger.git.modified_files.length > modifiedFilesThreshold) {
  warn(`Too many files changed:
        It has ${danger.git.modified_files.length} files.`);
}
