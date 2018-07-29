---
title: "Motions"
description: "Even states, props and Lifecycles, NevinhaJS has a very special set of animations and providers inside it architecture. It is what makes NevinhaJs be diferent of React and other component frameworks. Our motions you can use in any site, portal or web application."
layout: "guide"
icon: "flash"
weight: 2
---

###### {$page.description}

<article id="1">

## The basic idea of motions

Creating a motion animation in your component is very simple, all that you need is put your animation name as a prop of your component or tag HTML. Like the example bellow:

```javascript
class SomeComponent extends NevinhaComponent {
  render() {
    return (
      <div>
        <p>Here an component with a motion animation: </p>

        <MyComponent journal />

        <button scaleBounce>You also can animate HTML tags</button>
      </div>
    );
  }
}
```
In the code above, we are using inline motions, wich is the most basic way to use our motions, but if you want to controll the state of your animation, we recommend that you use controlled motions.
</article>

<article id="2">

## Inline Motions

As we saw in the last example, you can use motions animations in components or in HTML tags. Each motion, has a default configuration for each property value and it is the reason of you don't need to inform anything when you are using some motion, but if you prefer to subscribe the default configuration of some property, you can parse the property name and value as a object config of your props, like the example bellow:

```javascript
class SomeComponent extends NevinhaComponent {
  render() {
    return (
      <div>
        <p>Here an component with a custom configuration of some motion animation: </p>

        <MyComponent journal={{
          speed: 1.5
        }} />
      </div>
    );
  }
}
```

In the case above,our component will be animated using the `journal` animation in a time of 1500 milliseconds.
</article>

<article id="3">

## Controlled Motions

Controllod motions are recommended to use when you want to have a controll of your set of motions animations, for example, if you have a component that depending on the context it will use an specific animation to be animated.

The basic way for using it, is just calling the `setAnimation` method with your element ref and the animation name as argument. As the code bellow:

```javascript
class SomeComponent extends NevinhaComponent {
  constructor(props, children){
    super(props, children);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setAnimation(this.context.message, {
      name: "dance"
    });
  }

  render() {
    return (
      <div>
        <p ref="message">Hi, I'll be animated when the button bellow is clicked.</p>
        <button onClick={this.handleClick}>Click to animate</button>
      </div>
    );
  }
}
```

The setAnimation method can also receives the configuration of your motion as a second argument:


```javascript
handleClick() {
  this.setAnimation(this.context.message, {
    name: "dance",
    values: {
      speed: 0.5
    }
  });
}
```

In the code above, your component, will be animated using the `dance` animation, in the time of 500 milliseconds.


When you are using controlled motions, you can remove an animation using `removeAnimation` method with your element ref as paramiter:

```javascript
removeAnimation(this.context.message);
```

## What's next
Now that you know how to use our motions animations, problably you'll want to know what are the name and the configurations of our animations set, wich can be find in the [motions reference section](/docs/motions/motions-reference.html)
</article>
