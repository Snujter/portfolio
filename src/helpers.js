export function getClassName(classes, constantClasses = []) {
  return Object.keys(classes)
    .filter(key => classes[key])
    .concat(...constantClasses)
    .join(" ");
}
