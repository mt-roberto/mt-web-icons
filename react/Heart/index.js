function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function Heart(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M933.619 171.527c120.508 119.575 120.508 313.488-.001 433.065L577.326 958.078c-36.093 35.804-94.559 35.804-130.653-.001L90.381 604.591c-120.508-119.575-120.508-313.488.001-433.065C206.114 56.711 390.89 52.232 511.999 158.09c121.11-105.859 305.885-101.38 421.619 13.437zm-436.043 29.076c-104.451-103.632-273.884-103.632-378.344-.001C14.87 304.156 14.87 471.961 119.231 575.514l356.29 353.484c20.124 19.963 52.835 19.963 72.959.001l356.29-353.484c104.362-103.554 104.362-271.359.001-374.912C800.31 96.97 630.876 96.97 526.426 200.602c-7.985 7.922-20.864 7.922-28.849 0z"
  }));
}