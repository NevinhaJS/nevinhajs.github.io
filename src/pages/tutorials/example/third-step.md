---
title: "Step 3 - Using state, props and animations"
description: ""
parentId: "example"
layout: "tutorial"
time: 90
weight: 3
---

## {$page.title}

So far we have created a very basic app component, wich don't have any state and don't use any NevinhaJs animation. Now it's time to create a basic component, that will have an input field and a text wich will reflect the value of the input.

First, we'll see how to use motions in a Nevinha component, let's update the render method in our App component:

```javascript
  class App extends NevinhaComponent {
    render() {
      const {name} = this.state;

      return (
        <section>
          <article enterLeftBounce>
            <h1 className="hello">
              <p className="margin-hello">Hello! This is the new: </p>
              {name ? name : 'NevinhaJS'}
            </h1>
          </article>
        </section>
      );
    }
  }
```

In the component above, we're using `enterLeftBounce` as animation, wich will animate our app in a fadeIn effect comming from the left side of our application. Notice that we are using an inline condition to check if the state `name` exists, if it's not, we will show 'NevinhaJs' as a default value.

Now we have to create the `FormComponent` wich will have an input and a footer message. The `FormComponent` will receives a `handleKeyUp` method as props for sendding our App component the value of the input when the user inputs something in our form. The `FormComponent` will be have the code bellow:

```javascript
class FormComponent extends NevinhaComponent {
	render() {
		const {handleKeyPress} = this.props;

		return (
			<form class="app-form">
				<input
					className="input"
					onKeyUp={handleKeyPress}
					placeholder="Edit page name"
					type="text"
				/>
				<footer pulseSlow>
					<p className="footer">
						Type the page name in the input above
					</p>
				</footer>
			</form>
		);
	}
}
```

If you have used some component framework like react, you probably are familiar with the code above, but the coll thing is that we aren't using react or any other component framework but even though, we are using states, props, animations and our components are using the virtual DOM algorithms.

We need to call our `FormComponent` inside the `App` component, for using it, and we also need to create a constructor method in our `App` component to bind the instance in the `handleKeyUp` method. Like the example bellow:

```javascript
lass App extends NevinhaComponent {
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
			<div enterLeftBounce>
				<h1 className="hello">
					<p className="margin-hello">Hello! This is the new: </p>
					{name ? name : 'NevinhaJS'}
				</h1>

				<FormComponent handleKeyPress={this.handleKeyPress} />
			</div>
		);
	}
}
```

Notice that we update our state through the `setState` method. This method will trigger our diff internally, wich checks wich changes in the virtual DOM and updates them.

For finishing our app, you can create a `style.css` file in the `public` folder, just to stylize your app:

```css
body {
	background: #f5f5f5;
	font: 24px 'Open Sans', sans-serif;
	margin: 0;
}

#my-app {
	position: relative;
}

.height {
	height: 100vh;
    padding-top: 1px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
}

.margin-hello {
	margin: 10px 0;
	font-size: 2rem;
}

.form {
	display: block;
	text-align: center;
	width: 500px;
	margin: 0 auto;
}
.hello {
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    font-size: 5rem;
    min-height: 138px;
}

input {
	text-align: center;
	font-size: 1.6rem;
	padding: 24px 0;
	width: 100%;
	border: none;
	box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.22);
}

footer {
	font-size: 1rem;
    color: #bfbfbf;
    line-height: 2;
}
```

Don't forget to call the `style.css` file in your `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
	<link rel="stylesheet" type="text/css" href="./style.css">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
</head>
<body>
	<div id="my-app" class="height"></div>
	<script src="./bundle.js"></script>
</body>
</html>
```

Now you can run in your terminal `yarn start` and see our example working.

