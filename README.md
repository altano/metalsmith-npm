# metalsmith-npm
Metalsmith plugin to include npm modules in your globals.

# Parameters
```javascript
"metalsmith-npm": {
    <global variable to use>: <package name in npm to require()>
},
```

# Example Javascript Usage
```javascript
var npm = require('metalsmith-npm');

metalsmith.use(npm({
    _: "lodash",
    typogr: "typogr"
}));
```
This is equivalent to:

```javascript
metalsmith.metadata({
    _: require("lodash"),
    typogr: require("typogr")
});
```

But is more concise and can be used with a CLI .json configuration, unlike the code above.

# Example CLI Usage
```javascript
"metalsmith-npm": {
    "_": "lodash",
    "typogr": "typogr"
}
```

Then in your other files you may use the globals, e.g. in archive.jade:
```jade
block content
	- var lineHeight = 2.2;
	- var archives = _.chain(articles).groupBy(function(item) {
    ...
```