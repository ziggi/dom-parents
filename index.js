export default (element, selector) => {
  const elements = [];
  let elem = element;
  const isWithSelector = selector !== undefined;

  while ((elem = elem.parentElement) !== null) {
    if (elem.nodeType === Node.ELEMENT_NODE) {
      if (!isWithSelector || elem.matches(selector)) {
        elements.push(elem);
      }
    }
  }

  return elements;
};
