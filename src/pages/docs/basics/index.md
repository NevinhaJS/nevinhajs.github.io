---
title: "Basics"
description: "To start to use NevinhaJs in your project is very simple and easy, if you don't want to spend time configuring your project, checkout NevinhaJS Boirlaplate by clicking in the button bellow."
layout: "guide"
icon: "arrow-right-rod"
weight: 1
---

## What's NevinhaJs

NevinhaJs is an inteligent javascript framework that helps developers to create components and motions in a very simple and fast way.

{$page.description}

<article id="1">

<div class="guide-btn-cta"><a class="btn btn-accent btn-lg" href="http://github.com.br/nevinhajs/boirlaplate" target="_blank"><span class="icon-16-external download-btn"></span>NevinhaJS Boirlaplate</a></div>

<br>

## Configuring

Assuming that you already have your ES6 environment configured with babel (if you dont know how to configure a babel environment, you can download our [NevinhaJS Boirlaplate](http://github.com.br/nevinhajs/boirlaplate) ⬆), you just need to add in your package.json the nevinhajs through the command:

```javascript
yarn add nevinha-js
```
if you don't have yarn, you can use the npm command:

```javascript
npm install nevinha-js
```

We use JSX syntaxe by default, so you'll need to add the `transform-react-jsx` babel plugin to convert the JSX to javascript:
```javascript
yarn add -D babel-plugin-transform-react-jsx
```

After that in your .babelrc file, you have to put the follow lines:

```javascript
"plugins": [
  [
  "transform-react-jsx",
    { "pragma": "NevinhaDOM" }
  ]
]
```

### What's next?
Now you know how to setup NevinhaJs in your project, let's see how to create our first component.
</article>