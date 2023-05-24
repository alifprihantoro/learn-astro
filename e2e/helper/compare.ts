import Jimp from 'jimp'

/**
* compare img
*/
export default async function compareImg(path1: string, path2: string, out: string) {
  const jimage1 = await Jimp.read(path1)
  const jimage2 = await Jimp.read(path2)// Perceived distance
  const diff = Jimp.diff(jimage1, jimage2, .1)
  diff.image.write(out)
  return diff.percent
}
