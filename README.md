# remark-lint-no-hr-after-heading

Warn when a when an horizontal rule appears after a heading. It's a thematic break, not a heading border.

## Example

##### `ok.md`

###### In

```markdown
# Hello world
```

###### Out

No messages.

##### `not-ok.md`

###### In

```markdown
# Hello world
---
```

###### Out

```text
  2:1-2:4  warning  Don’t use a horizontal line after a heading  no-hr-after-heading  remark-lint
```

## Install

[npm][https://docs.npmjs.com/cli/install]:

```sh
npm install remark-lint-no-heading-indent
```

## Use

You probably want to use it on the CLI through a config file:

```diff
 …
 "remarkConfig": {
   "plugins": [
     …
     "lint",
+    "lint-no-hr-after-indent",
     …
   ]
 }
 …
```

Or use it on the CLI directly

```sh
remark -u lint -u lint-no-hr-after-indent readme.md
```

Or use this on the API:

```diff
 var remark = require('remark')
 var report = require('vfile-reporter')

 remark()
   .use(require('remark-lint'))
+  .use(require('lint-no-hr-after-indent'))
   .process('_Emphasis_ and **importance**', function (err, file) {
     console.error(report(err || file))
   })
```

## License

[MIT][https://github.com/olizilla/remark-lint-no-hr-after-heading/blob/main/license] © [olizilla][https://github/olizilla]

