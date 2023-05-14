[![npm](https://img.shields.io/npm/v/@deep-foundation/react-with-package-installed.svg)](https://www.npmjs.com/package/@deep-foundation/react-with-package-installed)

# Goal

This package provides a component that wraps the react hook `useIsPackageInstalled` from the package [`@deep-foundation/use-is-package-installed`](https://www.npmjs.com/package/@deep-foundation/use-is-package-installed). Loading, error, not installed and installed states are handled by the components you pass.

# How to use?

```ts
<WithInstalledPackage
  packageName="your-package-name"
  shouldIgnoreResultWhenLoading={false}
  onError={onError}
  loadingChildren={<div>Loading...</div>}
  errorChildren={<div>Error occurred</div>}
  notInstalledChildren={<div>your-package-name is not installed</div>}
>
  <Content />
</WithInstalledPackage>
```
