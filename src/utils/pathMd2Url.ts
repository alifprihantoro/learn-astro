export default function pathMd2Url(path:string){
  const slug = path
    .replace(/.+\/posts\//i, '')
    .replace(/\/readme.md/i, '')
    .replace(/.md/i, '')
    .replace(/\s/ig, '-')
  return slug
}
