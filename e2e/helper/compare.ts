import Jimp from 'jimp'

/**
* compare img is different or not
* @param path1 image url compare 1
* @param path2 image url compare 2
* @param out image url result compare
*/
export default async function compareImg(path1: string, path2: string, out: false | string) {
  const jimage1 = await Jimp.read(path1)
  const jimage2 = await Jimp.read(path2)// Perceived distance
  const diff = Jimp.diff(jimage1, jimage2, .1)
  out && diff.image.write(out)
  return diff.percent == 0 ? true : false
}
