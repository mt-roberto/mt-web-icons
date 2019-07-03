function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function InternetFee(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M983.04 512c0-260.152-210.888-471.04-471.04-471.04S40.96 251.848 40.96 512c0 260.152 210.888 471.04 471.04 471.04S983.04 772.152 983.04 512zm40.96 0c0 282.773-229.227 512-512 512S0 794.773 0 512 229.227 0 512 0s512 229.227 512 512z"
  }), React.createElement("path", {
    d: "M763.855 512c0-261.65-118.635-471.04-257.997-471.04-139.369 0-257.997 209.384-257.997 471.04s118.628 471.04 257.997 471.04c139.362 0 257.997-209.39 257.997-471.04zm40.96 0c0 281.268-130.726 512-298.957 512-168.238 0-298.957-230.726-298.957-512S337.62 0 505.858 0c168.231 0 298.957 230.732 298.957 512z"
  }), React.createElement("path", {
    d: "M21.468 526.349h982.047c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H21.468c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48z"
  }), React.createElement("path", {
    d: "M489.31 21.012v982.508c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V21.012c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"
  }));
}