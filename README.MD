[![npm](https://img.shields.io/npm/v/@deep-foundation/react-use-is-package-installed.svg)](https://www.npmjs.com/package/@deep-foundation/react-use-is-package-installed)

# Goal

This package provides a React hook that checks whether a deep package is installed.

# How to use?
```ts
  const { isPackageInstalled, loading, error } = useIsPackageInstalled({
    packageName,
    shouldIgnoreResultWhenLoading,
    onError,
  });
```
