var fs = require('fs')
var remark = require('remark')
var lint = require('remark-lint')
var report = require('vfile-reporter')
var noHrAfterHeading = require('.')

var doc = fs.readFileSync('example.md')

remark()
  .use(lint)
  .use(noHrAfterHeading)
  .process(doc, function(err, file) {
    console.error(report(err || file))
  })
