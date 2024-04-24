const path = require('path')
 
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const buildStylelintCommand = (filenames) =>
  `stylelint --allow-empty-input "**/*.{css,scss}" ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --fix ')}`;
 
module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*.{css,scss}': [buildStylelintCommand],
}
