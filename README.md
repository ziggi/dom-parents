# dom-parents
Get the parents of the element, optionally filtered by a selector.

# Usage

```JavaScript
import getParents from 'dom-parents';

getParents(document.querySelector('#main'), '.cat').forEach((element) => {
  element.style.backgroundColor = '#008800';
})
```

```JavaScript
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