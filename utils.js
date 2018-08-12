// self
const { version } = require('./package.json')

let gitHead = version
if (typeof window === 'undefined') {
  // npm
  const { readFileSync } = require('fs')
  try {
    gitHead = readFileSync(
      `.git/${readFileSync('.git/HEAD', 'utf-8')
        .slice(5)
        .trim()}`,
      'utf-8'
    ).trim()
  } catch (e) {
    // nop
  }
}

module.exports = { gitHead }
