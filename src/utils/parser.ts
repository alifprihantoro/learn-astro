export const html = (e: TemplateStringsArray, ...a: Array<string | number | (string | number)[]>) => {
  const CONTENT: string[] = []
  if (e.length > 1) {
    const concate = e.map((val, i) => {
      if (i >= e.length - 1) {
        return val
      }
      const arg = a[i]
      if (Array.isArray(arg)) {
        const argArray = arg.join('')
        return val + argArray
      }
      return val + arg
    })
    CONTENT.push(...concate)
  } else {
    CONTENT.push(e[0])
  }
  return CONTENT.join('')
}
