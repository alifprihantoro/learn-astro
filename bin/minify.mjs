/* eslint-disable no-console */
import { readdirSync, lstatSync } from 'fs'
import { join } from 'path'
import { minify } from 'minify'
import tryToCatch from 'try-to-catch'
import fs from 'fs'

const options = {
  html: {
    removeAttributeQuotes: false,
    removeOptionalTags: false,
  },
}
const folder = './dist'
const tes = (FOLDER) => {
  return readdirSync(FOLDER)
    .map(async (file) => {
      const lstat = lstatSync(join(FOLDER, file)).isFile()
      if (lstat) {
        const FILE = `${FOLDER}/${file}`
        const isMinify = /.*\.(html|js$|css)/i.test(file)
        if (isMinify) {
          const [error, data] = await tryToCatch(minify, FILE, options)
          // const data = await minify(FILE, options)
          if (error) {
            return console.error(error.message)
          }
          return fs.writeFile(FILE, data, { encoding: 'utf-8' }, (err) => {
            if (err) {
              console.log(err.message)
            }
          })
        }
        return
      }
      return tes(`${FOLDER}/${file}`)
    })
}
tes(folder)
