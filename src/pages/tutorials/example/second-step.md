---
title: "Step 2 - Creating your first component"
description: ""
parentId: "example"
layout: "tutorial"
buttonTitle: "I did step 2"
time: 90
weight: 2
---

## {$page.title}

Now that we have all of our environment configurated, we can follow creating our components. But before we do it, we need to create a folder called `src` and another folder called `public`.

First, let's create a `index.html` file in our `public` folder:

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

Now, let's create our app component. Inside of `src` folder, we'll create a `app.js` file, witch extends of NevinhaCompnonent and will be our app component file.

Every NevinhaJs component needs to extends `NevinhaComponent` class, you don't need to extend from `NevinhaComponent` just if your component is a state-less component. Knowing that, let's import `NevinhaComponent`, the `render` to render our NevinhaJs application in the `#my-app` element, and `NevinhaDOM`, wich we won't use in the code but remember that we have put NevinhaDOM as a pragma of the `transform-react-jsx` babel plugin and every we will use JSX sintaxe, we'll need to import NevinhaDOM.

So our first app component, will look something like this:

```javascript
import {NevinhaComponent, render, NevinhaDOM} from 'nevinha-js';

class App extends NevinhaComponent {
	render() {
		return (
			<div>
				some code come here!
			</div>
		);
	}
}

const $root = document.querySelector('#my-app');
render(App, $root);
```

Now you can follow for the next section, where we'll see how to update our components state, use props and animations.