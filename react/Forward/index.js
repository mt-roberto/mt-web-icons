function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function Forward(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M799.584 440.059L498.23 111.547c-24.354-28.708-20.825-71.724 7.883-96.078s71.724-20.825 96.078 7.883l400.744 436.859a67.846 67.846 0 0 1 13.784 20.022 68.03 68.03 0 0 1 5.977 29.488l-.001.063a68.343 68.343 0 0 1-7.265 29.134 68.28 68.28 0 0 1-1.384 2.6 67.59 67.59 0 0 1-10.102 13.687L592.545 999.061c-25.592 27.611-68.721 29.247-96.331 3.656s-29.247-68.721-3.656-96.331L798.423 576.39H67.963c-37.647 0-68.166-30.519-68.166-68.166s30.519-68.166 68.166-68.166h731.621z"
  }));
}