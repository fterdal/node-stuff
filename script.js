const fs = require('fs').promises;

const writeToFile = async () => {
  try {
    await fs.appendFile('output.txt', (new Date()).toString() + '\n')
  } catch (err) {
    console.log('ERR', err)
  }

}
writeToFile()
