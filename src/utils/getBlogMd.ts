export default function getBlogMd(path:string){
  const slug = path
    .replace(/.*\//i, '')
    .replace(/readme.md/i, 'list')
    .replace(/.md/i, '')
    .replace(/\s/ig, '-')
  return slug
}
