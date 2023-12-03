import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

const convertToWebpRecursive = async (inputPath, outputPath) => {
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true })
  }

  const files = fs.readdirSync(inputPath)

  for (const file of files) {
    const inputFilePath = path.join(inputPath, file)
    const outputFilePath = path.join(outputPath, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'))

    if (fs.statSync(inputFilePath).isDirectory()) {
      await convertToWebpRecursive(inputFilePath, outputFilePath)
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      await sharp(inputFilePath)
        .webp({ quality: 75 })
        .toFile(outputFilePath)
    } else if (/\.svg$/i.test(file)) {
      fs.copyFileSync(inputFilePath, outputFilePath)
    }
  }
}

const sourcePath = './src/img'
const destinationPath = './public/img'
convertToWebpRecursive(sourcePath, destinationPath)
console.log('Images optimized')
