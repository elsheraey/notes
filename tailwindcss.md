# Tailwind CSS

My debut with Tailwind CSS started with [The Net Ninja Tailwind CSS Tutorial](https://github.com/elsheraey/netninja-tailwind-css) and then I jumped to using it in production...

After quite some time playing with Tailwind CSS to create custom components, I found the [twMerge utility function](https://www.npmjs.com/package/tailwind-merge) to be a must have. 

Before getting introduced to `twMerge`, I had made the following function, sometimes with hierarchies, which makes me really glad to have just found a better solution.

```
export const joinClassNames = (classNames1: string, classNames2: string): string => {
  const classes = new Set<string>();
  classNames1
    .split(' ')
    .concat(classNames2.split(' '))
    .forEach(className => {
      if (className !== '' && !classes.has(className)) {
        classes.add(className);
      }
    });
  return Array.from(classes).join(' ');
};
```