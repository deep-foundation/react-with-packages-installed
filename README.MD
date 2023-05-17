[![npm](https://img.shields.io/npm/v/@deep-foundation/react-with-packages-installed.svg)](https://www.npmjs.com/package/@deep-foundation/react-with-packages-installed)

# Goal

This package provides a component that wraps the react hook `useArePackageInstalled` from the package [`@deep-foundation/use-are-packages-installed`](https://www.npmjs.com/package/@deep-foundation/use-are-packages-installed). Loading, error, not installed and installed states are handled by the components you pass.

# How to use?

```ts
<WithInstalledPackages
  packageNames={["your-package-name0", "your-package-name1"]}
  shouldIgnoreResultWhenLoading={false}
  onError={onError}
  loadingChildren={<div>Loading...</div>}
  errorChildren={<div>Error occurred</div>}
  notInstalledChildren={<div>your-package-name is not installed</div>}
>
  <Content />
</WithInstalledPackage>
```
