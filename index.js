/**
 * Get the parents of the element, optionally filtered by a selector.
 *
 * @param {HTMLElement} element - The element from which the search should start.
 * @param {string} selector - Selector to search for the parent elements.
 * @param {boolean} [includeElement=false] - Include `element` to the search or not.
 */
export default (element, selector, includeElement = false) => {
  const hasSelector = selector !== undefined;
  const elements = [];
  let el = element;

  if (!includeElement) {
    el = el.parentElement;
  }

  while (el !== null) {
    if (el.nodeType === Node.ELEMENT_NODE) {
      if (!hasSelector || el.matches(selector)) {
        elements.push(el);
      }
    }

    el = el.parentElement;
  }

  return elements;
};
