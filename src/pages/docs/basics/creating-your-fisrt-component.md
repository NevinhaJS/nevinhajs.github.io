---
title: "Your first component"
description: "We've seen how to setup our project, now we'll see how to create our first component using NevinhaJs."
layout: "guide"
icon: "arrow-right-rod"
weight: 1
---

###### {$page.description}

<article id="1">

## Importing NevinhaJs

NevinhaJS works following the architecture  of components (lifecycles, states ands props), motions and providers. By default we exports NevinhaComponent, render, NevinhaDOM and ParallaxProvider.

For starting to use, the basics exported variables that you'll need to import, are:

```javascript
import {NevinhaComponent, render, NevinhaDOM} from 'nevinha-js';
```
**Where:**
- **NevinhaComponent**: The component class that is responsible to render your component instance. Every NevinhaComponent instance has it own lifecycle and state methods.
- **render**: The render method responsable for rendering your component, basically it takes your component markup and send for the Nevinha Js virtual DOM algorithm
- **NevinhaDOM** The method that converts JSX syntaxe to javascript object literal language. Every JS file that uses JSX syntaxe, needs to import NevinhaDOM method.
</article>

<article id="2">

## The App component

As we said, create a nevinha component is so easy, all that you need is create a class extending NevinhaComponent class and parse your HTML markup in the `render` method.

Let's see how it's in the code:

**app.js**
```javascript
class App extends NevinhaComponent {
	render() {
		return (
			<div scaleBounce>
				<h1 className="introduction-text">
					<p> Hello I'm a Nevinha component and I'm using the scaleBounce animation effect</p>
				</h1>
			</div>
		);
	}
}
```

If you have already used any component library like [React](https://reactjs.org/) you are used to use JSX language and our lifecycles methods is so similar to [React](https://reactjs.org/) lifecycles. You can see more details about states and components lifecycle in the [Lifecycles, states and props section](/docs/lifecycle-state-props/).

Problably you noticed that our App component is using a motion prop called `scaleBounce`, wich makes your element be animated with a scale effect. You can see more details about motions animation props in the [Motions](/docs/motions) section.
</article>

<article id="3">

## State-full and State-less components

We also have state-full and state-less components as React has, our App Component for example, is a state-full component, and you also can have methods and markup logic inside it, like the example bellow:

```javascript
class App extends NevinhaComponent {
  constructor() {
    super();

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress({target}) {
    this.setState({
      name: target.value
    });
  }

  render() {
    const {name} = this.state;

    return (
      <div scaleBounce>
        <h1 className="hello">
          <p className="margin-hello">Hello! This is the new: </p>
          {name ? name : 'NevinhaJS'}
        </h1>

        <Form handleKeyPress={this.handleKeyPress} />
      </div>
    );
  }
}
```

In this example above, we are using the constructor method to bind the App context into the handleKeyPress method (to avoid the inline bind in the JSX markup), as we aren't receiving props and children, we don't need to parse them in the `super()` call.

In this example above, we are receiving a target object that contains a value of the inputed information in the `Form` component. When this information is typed, we updated the state with the new value, wich will triger the NevinhaJs Diff algorithm, and will or wont display the name that is compared in the render condition `name ? name : 'NevinhaJS'`.

To create a state-less component, you just need to create a anonymous function returning a JSX syntaxe, like the example bellow:

```javascript
const someComponent = ({name}, children) => {
  return (
    <div>
      <p>Hello, my name is {name}</p>
    </div>
  );
}
```
</article>

<article id="4">

## The render method

Now that we have our App component created, we just need to create a HTML file with the element wich will have our NevinhaJs application running and our render method.

Let's create a very simple html file:

```xml
<body>
  <div id="my-app"></div>

  <!-- my nevinha js bundle -->
  <script src="./bundle.js"></script>
</body>
```

After we created our HTML file, we can call the render method in the end of our App.js file:

**app.js**
```javascript
  const $root = document.querySelector('#my-app');
  render(App, $root);
```
</article>

<article id="5">

### What's next?

Now that you have completed the basics steps to create a simple NevinhaJs component, you can follow reading about [Lifecycle, states and props](/docs/lifecycle-state-props/)
</article>