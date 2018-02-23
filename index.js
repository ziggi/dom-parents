export default (element, selector) => {
  const elements = [];
  const isWithSelector = selector !== undefined;

  while ((elem = element.parentElement) !== null) {
    if (elem.nodeType === Node.ELEMENT_NODE) {
      if (!isWithSelector || elem.matches(selector)) {
        elements.push(elem);
      }
    }
  }

  return elements;
};
