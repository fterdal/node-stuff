const fs = require('fs').promises
const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/dates')

const Date = db.define('date', {
  date: Sequelize.DATEONLY,
})

const writeToFile = async () => {
  try {
    await db.sync()
    await Date.create({ date: new Date() })
    await fs.appendFile(
      '/Users/finnterdal/code/hello/this/is/where/the/output/is/output.txt',
      new Date().toString() + '\n'
    )
    await db.close()
  } catch (err) {
    console.log('ERR', err)
  }
}
writeToFile()
