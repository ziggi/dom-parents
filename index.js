export default (element, selector, includeElement = false) => {
  const isWithSelector = selector !== undefined;
  const elements = [];
  let elem = element;

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
