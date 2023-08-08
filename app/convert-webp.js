import { readdirSync, statSync, mkdirSync } from 'fs'
import { join, extname, relative, dirname } from 'path'
import { exec } from 'child_process'

// Recursivamente busca archivos en un directorio y sus subdirectorios
function findFiles (dir, extension, fileList = []) {
  const files = readdirSync(dir)

  files.forEach(file => {
    const filePath = join(dir, file)
    const stat = statSync(filePath)

    if (stat.isDirectory()) {
      findFiles(filePath, extension, fileList)
    } else if (stat.isFile() && extname(file) === extension) {
      fileList.push(filePath)
    }
  })

  return fileList
}

// Encuentra todos los archivos .png
const pngFiles = findFiles('./src/img', '.png')

// Para cada archivo .png, convierte a .webp usando cwebp
pngFiles.forEach(pngFile => {
  const webpFile = join('./public/img', relative('./src/img', pngFile)).replace('.png', '.webp')
  const dir = dirname(webpFile)

  // Crea el directorio si no existe
  mkdirSync(dir, { recursive: true })

  // Ejecuta cwebp
  exec(`cwebp -q 80 ${pngFile} -o ${webpFile}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error converting file ${pngFile}: ${error}`)
    } else {
      console.log(`Converted ${pngFile} to ${webpFile}`)
    }
  })
})
