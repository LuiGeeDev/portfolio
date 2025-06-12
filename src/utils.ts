export function cssClassNames(module: CSSModuleClasses, name: string) {
  if (!module || !name) {
    return '';
  }

  const className = module[name];
  if (!className) {
    return '';
  }

  return `${name} ${className}`;
}
