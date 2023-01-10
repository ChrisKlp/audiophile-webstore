export function getKeyByValue(object: object, value: string) {
  const index = Object.values(object).indexOf(value as unknown);
  const key = Object.keys(object)[index];
  return key;
}

export function getImageName(path: string) {
  const imageName = path.split('/').pop()?.split('.')[0];
  return imageName;
}
