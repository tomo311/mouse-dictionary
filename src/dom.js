/**
 * Mouse Dictionary (https://github.com/wtetsu/mouse-dictionary/)
 * Copyright 2018-present wtetsu
 * Licensed under MIT
 */

const dom = {};

dom.create = html => {
  var template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstChild;
};

dom.applyStyles = (element, styles) => {
  if (!styles) {
    return;
  }
  for (let key of Object.keys(styles)) {
    element.style[key] = styles[key];
  }
};

export default dom;
