import * as React from 'react';
import toPascalCase from 'to-pascal-case';

const { Suspense, lazy } = React;

function getModule(name) {
  switch (name) {
    // Switch statement example:
    //
    // ======
    // case 'Baloon':
    //   return lazy(() => import('../icons/Baloon.jsx');
    //   break;
    //
    <%- switchStatements; %>
    default:
      return;
      break;
  }
}

export default function Icon(props) {
  const {
    name,
    width = 24,
    height = 24,
    fallback = null,
    placeholder= <div style={{ borderRadius: 100, backgroundColor: '#000', width: `${width}px`, height: `${height}px` }} />
  } = props;

  const IconComponent = getModule(toPascalCase(name));

  return (
    <Suspense fallback={fallback}>
      {IconComponent && <IconComponent {...props} /> || placeholder}
    </Suspense>
  );
}
