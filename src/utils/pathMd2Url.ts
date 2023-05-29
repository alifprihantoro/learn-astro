export default function pathMd2Url(path:string){
  const slug = path
    .replace(/.+\/(notes|pages)\//i, '')
    .replace(/.+\/note\/(.+\/|)(.+)\.md/i, '$2')
    .replace(/readme.md/i, 'list')
    .replace(/.md/i, '')
    .replace(/\s/ig, '-')
  return slug
}
