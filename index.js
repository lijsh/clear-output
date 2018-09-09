const readline = require('readline')
const stripAnsi = require('strip-ansi')
const wcwidth = require('wcwidth')

module.exports = function (output) {
  const stream = process.stderr
  const column = stream.columns || 80
  const lineCount = stripAnsi(output).split('\n').reduce((count, line) => {
    return count + Math.max(1, Math.ceil(wcwidth(line) / column))
  }, 0)
  for (let index = 0; index < lineCount; index++) {
    if (index > 0) {
      readline.moveCursor(stream, 0, -1)
    }
    readline.clearLine(stream)
    readline.cursorTo(stream, 0)
  }
}
