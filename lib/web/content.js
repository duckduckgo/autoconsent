
export default function handleMessage(message) {
  if (message.type === 'click') {
    const elem = document.querySelectorAll(message.selector);
    if (elem.length > 0) {
      if (message.all === true) {
        elem.forEach(e => e.click());
      } else {
        elem[0].click();
      }
    }
    return Promise.resolve(elem.length > 0);
  } else if (message.type === 'elemExists') {
    const exists = document.querySelector(message.selector) !== null;
    return Promise.resolve(exists);
  } else if (message.type === 'elemVisible') {
    const elem = document.querySelectorAll(message.selector);
    const results = new Array(elem.length);
    elem.forEach((e, i) => {
      results[i] = e.offsetParent !== null;
    });
    if (results.length === 0) {
      return Promise.resolve(false);
    } else if (message.check === 'any') {
      return Promise.resolve(results.some(r => r));
    } else if (message.check === 'none') {
      return Promise.resolve(results.every(r => !r));
    }
    // all
    return Promise.resolve(results.every(r => r));
  } else if (message.type === 'getAttribute') {
    const elem = document.querySelector(message.selector);
    if (!elem) {
      return Promise.resolve(false);
    }
    return Promise.resolve(elem.getAttribute(message.attribute));
  } else if (message.type === 'eval') {
    // TODO: chrome support
    const result = window.eval(message.script); // eslint-disable-line no-eval
    return Promise.resolve(result);
  } else if (message.type === 'hide') {
    const parent = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
    const hidden = message.selectors.filter((selector) => {
      const matching = document.querySelectorAll(selector);
      return matching.length > 0;
    }, []);
    const rule = `${hidden.join(',')} { display: none !important; }`;
    const css = document.createElement('style');
    css.type = 'text/css';
    css.id = 're-consent-css-rules';
    css.appendChild(document.createTextNode(rule));
    parent.appendChild(css);
    return Promise.resolve(hidden);
  }
  return Promise.resolve(null);
}