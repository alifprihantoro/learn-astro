export default function pathMd2Url(path:string){
  const slug = path
    .replace(/.+\/notes\//i, '')
    .replace(/readme.md/i, 'list')
    .replace(/.md/i, '')
    .replace(/\s/ig, '-')
  return slug
}
