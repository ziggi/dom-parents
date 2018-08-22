export default (element, selector, includeElement = false) => {
  const elements = [];
  let elem = element;
  const isWithSelector = selector !== undefined;

  if (!includeElement) {
    elem = elem.parentElement;
  }

  while (elem !== null) {
    if (elem.nodeType === Node.ELEMENT_NODE) {
      if (!isWithSelector || elem.matches(selector)) {
        elements.push(elem);
      }
    }

    elem = elem.parentElement;
  }

  return elements;
};
