function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function NubRight(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M829.656 587.154l-462.02 367.163c-55.345 43.982-135.865 34.77-179.846-20.574A128.001 128.001 0 0 1 160 854.107V169.886c0-70.692 57.308-128 128-128 28.923 0 56.993 9.795 79.636 27.79l462.02 367.163c41.508 32.986 48.417 93.376 15.431 134.885a96.005 96.005 0 0 1-15.431 15.431z"
  }));
}