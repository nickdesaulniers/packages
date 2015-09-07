const React = require('react')

// URL to download the wiki packages list from
exports.wiki = 'https://raw.githubusercontent.com/wiki/nickdesaulniers/packages/Packages.md'
exports.home = 'https://github.com/nickdesaulniers/packages'

// JSX for logo, to be placed at the top of the sidebar
exports.logo = function () {
  return <h1>Nicks <span className="light">stuff</span></h1>
}
