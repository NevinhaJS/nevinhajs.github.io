---
title: "Lifecycle, state and props"
description: "When we were creating NevinhaJs, we noticed that even being a framework animation based, we would need some thing to control our components animations states and references of our components tags DOM representations. The follow topics in this section, will show you how to do it."
layout: "guide"
icon: "code-file"
weight: 2
---

###### {$page.description}

<article id="1">

## State and how to update

have the control of your components is primordial in any web application, knowing that, we have developed a very simple way to control and update your component state.

You just need to call the `setState()` method to delete, update or add a new state:

```javascript
handleKeyPress(){
  setState({
    fooValue: 'foo'
  })
}
```

In the example above, we are adding or updating the state of `fooValue` of our component when the `handleKeyPress` method is called. If the fooValue state is used in the `render` method of our component, this component will call the render method again, to update the HTML tag or the value that was changed.

Now if you use `this.state.fooValue` in your component, you will get the new or the updated value of foo. You can also edit more than one state in the `setState` method, you just need to parse the `object: value` follow by `,` in the `setState` method.
</article>

<article id="2">

## Props, context and children
When you share values between components, we call it props, or if you are parsing a HTML markup by the component declaration, we call it children.

A very simple way to parse props or children for some component is using a state-less component, for example:

```javascript
const WelcomeMessage = ({userName}, children) => {
  return (
    <p>
      Welcome MR. {userName}
    </p>
  )
}

class MyCompnoent extends NevinhaComponent {
  render() {
    return (
      <div scaleBounce>
        <p>This component bellow shows a welcome message:</p>

        <WelcomeMessage userName="Clóvis" />
      </div>
    );
  }
}
```

You can also parse a HTML markup for your component and access it using the `children` paramiter


```javascript
const WelcomeMessage = ({userName}, children) => {
  return (
    <div>
      <p>
        Welcome MR. {userName}
      </p>

      <p>These are my children:</p>

      <br />

      {children}
    </div>
  )
}

class MyCompnoent extends NevinhaComponent {
  render() {
    return (
      <div scaleBounce>
        <p>This component bellow shows a welcome message:</p>

        <WelcomeMessage userName="Clóvis">
          <p>Github User: clovisdasilvaneto</p>
          <p>Age: 23</p>
        </WelcomeMessage>
      </div>
    );
  }
}
```

If you needs to have a state and props in your child component, you can use a state-full component, like bellow:

```javascript
class WelcomeMessage extends NevinhaComponent {
  constructor(props, context){
    super(props, context);

    this.state.someState = 'NevinhaJS';
  }

  render() {
    const {userName} = this.props;
    const {someState} = this.state;

    return (
      <div>
        <p>
          Welcome MR. {userName}
        </p>

        <p>My state is: {someState}</p>

        <p>These are my children:</p>

        <br />

        {this.children}
      </div>
    )
  }
}

class MyCompnoent extends NevinhaComponent {
  render() {
    return (
      <div scaleBounce>
        <p>This component bellow shows a welcome message:</p>

        <WelcomeMessage userName="Clóvis">
          <p>Github User: clovisdasilvaneto</p>
          <p>Age: 23</p>
        </WelcomeMessage>
      </div>
    );
  }
}
```
***ps**: You don't need to call the constructor method to use props or children in your state-full component, but if you call the constructor method to initialize something like a state property, you will need to parse the `props` and the `context` as paramiters of your `super()` call.*

#### Using refs
Some times we want to manipulate some rendered node in our component without needs to select it by using querySelector or some related thing. In NevinhaJs it's possible using the `ref` attribute:

```javascript
class MyCompnoent extends NevinhaComponent {
  constructor(props, children){
    super(props, children);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log(this.context.github.element);
  }

  render() {
    return (
      <div scaleBounce>
        <p onClick={this.handleClick.bind(this)}>Click and get the reference of the span bellow in your browser console</p>

        <span ref="github"><b>Gtihub Username:</b> clovisdasilvaneto</span>
      </div>
    );
  }
}
```
</article>

<article id="3">

## Lifecycle

Lifecycle is one thing that we are working to extend your component controll possibilities. At momment, we just have one lifecycle, wich is `componentWillMount` and it's called when your component will be attached on the DOM.

We are finishing the following lifecycles:

- ComponentDidMount
- componentWillUnmount
- WillReceiveProps
- WillReceiveAnimation
- AnimationEnd

We are so excited to finish that lifecycles and offer to you a better API to manipulate your animations.

To use a lifecycle is very simple, you just need to create a method with the lifecycle name in your state-full component:

```javascript
class MyCompnoent extends NevinhaComponent {
  componentWillMount(){
    console.log('The component will mount');
  }

  render() {
    return (
      <div scaleBounce>
        <span ref="github"><b>Gtihub Username:</b> clovisdasilvaneto</span>
      </div>
    );
  }
}
```
</article>