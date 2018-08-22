# dom-parents
Get the parents of the element, optionally filtered by a selector.

## Install

```sh
npm install --save dom-parents
```

## Usage

### Apply action to all parents elements
```js
import getParents from 'dom-parents';

getParents(document.querySelector('#main'), '.cat').forEach((element) => {
  element.style.backgroundColor = '#008800';
})
```

### Check for parents existing
```js
import getParents from 'dom-parents';

document.querySelectorAll('.animal').forEach((element) => {
  element.addEventListener('mousedown', () => {
    const isBobAnimal = getParents(this, '.animals').length !== 0;
    if (isBobAnimal) {
      console.log('Bob is animal');
    } else {
      console.log('Bob is spy!');
    }
  });
});
```

### If the user clicks on a .item element
```js
import getParents from 'dom-parents';

document.addEventListener('mousedown', (event) => {
  const [item] = getParents(event.target, '.item', true);
  if (item) {
    console.log('mousedown on .item element');
  }
});
```

## API

### getParents(element, selector, includeElement = false)

#### element

Type: `object`

The element from which the search should start.

#### selector

Type: `string`

Selector to search for the parent elements.

#### includeElement

Type: `bool`

Include `element` to the search or not.
