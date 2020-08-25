/**
 * @author olizilla
 * @copyright 2020 Oli Evans
 * @license MIT
 * @module no-hr-after-heading
 * @fileoverview
 *   Warn when a horizontal rule appears after a heading
 *
 * @example {"name": "ok.md"}
 *
 *   # Foo
 *
 * @example {"name": "not-ok.md"}
 *
 *   # Foo
 *   ---
 *
 * @example {"name": "not-ok.md", "label": "output"}
 *
 *   2:1-2:4  warning  Don’t use a horizontal line after a heading  no-hr-after-heading  remark-lint
 */

'use strict'

var rule = require('unified-lint-rule')
var visit = require('unist-util-visit')

module.exports = rule(
  'remark-lint:no-hr-after-heading',
  noHrAfterHeadings
)

function noHrAfterHeadings(tree, file) {
  visit(tree, 'thematicBreak', visitor)

  function visitor(node, index, parent) {
    if (index === 0) return
    var prev = tree.children[index - 1]
    if (prev.type === 'heading') {
      file.message('Don’t use a horizontal line after a heading', node)
    }
  }
}
