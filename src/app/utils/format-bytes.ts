export function formatBytes(bytes: number) {
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']

  let value = bytes
  let sizeIndex = 0

  while (value >= 1024 && sizeIndex < sizes.length) {
    value /= 1024
    sizeIndex++
  }

  return `${value.toFixed(1)} ${sizes[sizeIndex]}`
}
