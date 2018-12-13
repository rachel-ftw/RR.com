export const twelveWordBlurb = string => {
  const arr = string.split(' ')
  return arr.length > 12 ?
    arr.slice(0, 12).join(' ').concat('...') :
    arr.join(' ').concat('...')
}

export const projectColors = {
  design: 'pink',
  writing: 'purple',
  code: 'yellow'
}