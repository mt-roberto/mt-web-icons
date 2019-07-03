const fs = require('fs-extra');
const path = require('path');
const SVGO = require('svgo');
const svgr = require('@svgr/core').default;
const babel = require('@babel/core');
const toPascalCase = require('to-pascal-case');
const ejs = require('ejs');

const FOLDER = {
  SVGS: path.resolve(__dirname, '../svgs'),
  REACT: path.resolve(__dirname, '../react'),
  ICOMOON: path.resolve(__dirname, '../icomoon'),
  TEMPLATES: path.resolve(__dirname, '../templates')
};

const BABEL_SETTINGS = {
  minified: true,
  plugins: [
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-export-default-from'
  ]
};

// We wanna preserve the ViewBox to preserve the aspect ratio of the svg.
const svgo = new SVGO({
  plugins: [{ removeViewBox: false }]
});

// Template for our component
function reactComponentTemplate({ template }, opts, { imports, componentName, props, jsx, exports }) {
  const templateEngine = template.smart({ plugins: ['jsx'] });
  return templateEngine.ast`
    import * as React from 'react';
    export default function ${componentName}(props) { return ${jsx} }
  `;
}

// Loads JSON definition of our icons
const icomoonJsonDefinition = require(path.join(FOLDER.ICOMOON, 'selection.json')).icons;

// Removes svgs and components directories in case some icons are not available anymore
fs.removeSync(FOLDER.SVGS);
fs.removeSync(FOLDER.REACT);

fs.mkdirsSync(FOLDER.SVGS);
fs.mkdirsSync(FOLDER.REACT);

icomoonJsonDefinition.forEach(async ({ properties: { name }, icon: { paths } }) => {
  // Creates the SVG source code
  const pathStrings = paths.map(path => `<path fill="#000" d="${path}"/>`);
  const dataSource = `
    <svg version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 1024 1024"
    >
      ${pathStrings.join('')}
    </svg>`.replace(/^\s+|\s+$/gm, '');

  try {
    const { data } = await svgo.optimize(dataSource);

    // Creates and saves the SVGs
    const svgFilename = `${name.replace(new RegExp(/[-_]+/, 'g'), '-')}.svg`;
    const svgPath = path.join(FOLDER.SVGS, svgFilename);
    fs.outputFile(svgPath, data);

    // Creates Typescript Components
    const componentName = toPascalCase(name);
    const componentPath = path.join(FOLDER.REACT, componentName);

    // Creates `react` folder where to save our components
    fs.mkdirsSync(componentPath);

    // Creates the React component from the SVG source.
    const svgComponent = await svgr(data, { icon: true, template: reactComponentTemplate }, { componentName });

    // Transpiles JSX into JS with Babel
    const result = await babel.transformAsync(svgComponent, BABEL_SETTINGS);

    fs.outputFile(path.join(componentPath, 'index.js'), result.code);

    // Generates type definitions for the single react components
    const typeDefinition = await ejs.renderFile(path.join(FOLDER.TEMPLATES, 'reactComponentTypeDefinition.d.ts'), {
      componentName
    });
    fs.outputFile(path.join(componentPath, 'index.d.ts'), typeDefinition);
  } catch (err) {
    console.error(err);
  }
});

async function generateIconComponent() {
  const iconComponendFolder = path.join(FOLDER.REACT, 'Icon');

  const componentStatements = icomoonJsonDefinition.map(({ properties: { name } }) => {
    const componentName = toPascalCase(name);
    const componentPath = path.join(FOLDER.REACT, componentName);
    return { name: componentName, path: path.relative(iconComponendFolder, componentPath) };
  });

  // Generats the IconComponent source
  const iconComponentTemplate = await ejs.renderFile(path.join(FOLDER.TEMPLATES, 'IconComponent.jsx'), {
    components: componentStatements
  }, { rmWhitespace: true });
  // Transpiles `IconComponent` JSX => JS with Babel
  const iconComponentSource = await babel.transformAsync(iconComponentTemplate, BABEL_SETTINGS);
  fs.outputFile(path.join(iconComponendFolder, 'index.js'), iconComponentSource.code);

  // Generates type definitions for the `IconComponent`
  const typeDefinition = await ejs.renderFile(path.join(FOLDER.TEMPLATES, 'IconComponentTypeDefinition.d.ts'), {
    components: componentStatements
  });
  fs.outputFile(path.join(iconComponendFolder, 'index.d.ts'), typeDefinition);
}

generateIconComponent();
