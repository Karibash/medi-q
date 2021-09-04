const path = require('path');

const entryPoints = [
  [''],
  ['core'],
  ['react'],
];

const entryPointPaths = entryPoints.map(entryPoint => path.join(...entryPoint));

module.exports = {
  entryPoints,
  entryPointPaths,
};
