---
title: "Step 1 - Preparing your environment"
description: ""
buttonTitle: "I did step 1"
parentId: "example"
layout: "tutorial"
time: 90
weight: 1
---

## {$page.title}

First, lets create our enviromment configuration, we can start creating our package.json, something like this:

```javascript
{
  "name": "nevinha-js-basic-example",
  "version": "1.0.0",
  "scripts": {
    "start": "webpack-dev-server --content-base public --inline --hot",
  }
}
```

Next you'll need to install webpack for creatting a local server and the babel dependecies to transpile your code:

```javascript
  yarn add webpack webpack-dev-server babel-core babel-eslint babel-loader babel-plugin-transform-react-jsx babel-preset-es2015 babel-preset-stage-0
```

After that, let's create a .babelrc file in our project, to configure the babel transpile and allow us to use es6 syntaxe:

```javascript
{
  "presets": [
    "es2015",
    "stage-0"
  ],
  "plugins": [
    [
	  "transform-react-jsx",
      { "pragma": "NevinhaDOM" }
    ]
  ]
}
```

Finally, let's create our webpack.config file:

```javascript
const path = require('path');

function resolveModule(name) {
	return path.resolve(__dirname, `src/${name}`);
}

module.exports = {
	entry: [
		'core-js/es6/symbol',
		'core-js/fn/array/find',
		'core-js/fn/object/assign',
		'core-js/fn/string/ends-with',
		resolveModule('index.js')
	],

	module: {
		loaders: [
			{exclude: /node_modules/, loader: 'babel-loader', test: /\.js$/}
		]
	},

	output: {
		filename: 'bundle.js',
		path: path.resolve('./dist')
	},
};
```

Now that you have completed the step 1, you can follow to the next section.