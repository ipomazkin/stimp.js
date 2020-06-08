![stimp.js logo](https://github.com/ipomazkin/stimp.js/raw/master/stimp.png "stimp.js")

# stimp.js
Small lib for organize your JS by modules with state management and DOM elements autoselection

JS docs [here](https://ipomazkin.github.io/stimp.js/)

## Install
via NPM
```
npm i stimp
```
or via Yarn
```
yarn add stimp
```
or from CDN:
```html
<script src="https://unpkg.com/stimp@latest/dist/stimp.js"></script>
```

## Features
### Apps and modules for project organization
```javascript
import Stimp from 'stimp';

window.app = new Stimp.App('main'); // create app with name "main"

const helloModule = app.addModule(Stimp.Module, 'hello'); // add module with name "hello"
helloModule.onInit(() => { // add some module code
  console.log('I have just init!');
});

app.init(); // init the app
```
You can access the module by "app.modules.hello".

### State management in React.js style
```javascript
const statefulModule = app.addModule(Stimp.Module, 'statefulModule', { // add stateful module
  isShow: false, // initial state
});

statefulModule.onInit(() => {
  setInterval(() => {
    statefulModule.setState({ // setting the new state
      isShow: !statefulModule.state.isShow
    });
  }, 1000);
});

statefulModule.onUpdateIsShow = (currentVal, prevVal) => { // add reaction on state change
  console.log(`now isShow is ${currentVal}, but before it was ${prevVal}`);
};
```

### DOM elements auto selection for each module
On frontend you often need to interact with DOM. To do that you need to select elements (by jQuery or native JS functions).
Stimp can do it for you without any JS-code. You just need to add some HTML-attributes to target tags.
For example, we have this html:
```html
<div -m="menu" class="menu">
  <div class="menu__cont">

    <button -ch="burger" class="menu__burger">open</button>

    <nav -ch="nav">
      <ul>
        <li -ch="navEl" -i="link1"><a href="#">link 1</a></li>
        <li -ch="navEl" -i="link2"><a href="#">link 2</a></li>
        <li -ch="navEl" -i="link3"><a href="#">link 3</a></li>
        <li -ch="navEl" -i="link4"><a href="#">link 4</a></li>
        <li -ch="navEl" -i="link5"><a href="#">link 5</a></li>
        <li -ch="navEl" -i="link6"><a href="#">link 6</a></li>
        <li -ch="navEl" -i="link7"><a href="#">link 7</a></li>
      </ul>
    </nav>

  </div>
</div>
```
There are 3 custom attributes:
- "-m" for module scope - use here exact module name
- "-ch" for module children - use here any value
- "-i" for module's children list, but with separate it by ID - use here any value

In JS we add this code:
```javascript
const menu = app.addModule(Stimp.DOMInteractModule, 'menu', { // add dom interactive module
  isShow: false, // initial state
});

menu.onAfterDomInit(() => { // after DOM was selected
  let dom = menu.dom; // access to the DOM elements
  let root = menu.dom.root; // access to the root module element with attribute "-m"
  let burger = menu.dom.burger; // access to the child element with attribute "-ch='burger'"
  let navEls = menu.dom.navEl; // access to the child elements with attribute -ch="navEl" -i="*"
  let firstNavEl = navEls.link1; // access to the child elements with attribute -ch="navEl" -i="link1"

  burger.addEventListener('click', () => { // add some state changing on burger button click
    menu.setState({ isShow: !menu.state.isShow });
  });
});

menu.onUpdateIsShow = (currentVal, prevVal) => { // add reaction on state change
  if (currentVal) { // if isShow is true - add class 'show' to the module root
    menu.dom.root.classList.add('show')
  } else { // if isShow is false - remove class 'show'
    menu.dom.root.classList.remove('show')
  }
};
```

### Modules init by their depends (when module "A" should be initialized before module "B")
In some cases you need to init modules in exact order. To do that you can use module dependencies.

```javascript
const a = app.addModule(Stimp.DOMInteractModule, 'a', {}); // module a
const b = app.addModule(Stimp.DOMInteractModule, 'b', {}, ['a']); // module b with module a in dependencies
const c = app.addModule(Stimp.DOMInteractModule, 'c', {}, ['a']); // module c with module b in dependencies
const d = app.addModule(Stimp.DOMInteractModule, 'd', {}, ['c', 'a']); // module d with module c and a in dependencies
```

The modules will init in this order:
- module a
- module b and module c in any order
- module d after module a and c was init
