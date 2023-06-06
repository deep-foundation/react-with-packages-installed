[![npm](https://img.shields.io/npm/v/@deep-foundation/react-with-packages-installed.svg)](https://www.npmjs.com/package/@deep-foundation/react-with-packages-installed)

# Goal

This package provides a component that wraps the react hook `useArePackageInstalled` from the package [`@deep-foundation/react-use-are-packages-installed`](https://www.npmjs.com/package/@deep-foundation/react-use-are-packages-installed). Loading, error, not installed and installed states are handled by the components you pass.

# How to use?

```tsx
<WithPackagesInstalled
  packageNames={["package-name0", "package-name1"]}
  renderIfError={(error) => <div>{error.message}</div>}
  renderIfNotInstalled={(packageNames) => (
    <div>
      {`Install these deep packages to proceed: ${packageNames.join(', ')}`}
    </div>
  )}
  renderIfLoading={() => (
    <Text>Checking if deep packages are installed...</Text>
  )}
  shouldIgnoreResultWhenLoading={true}
>
  <Content />
</WithPackagesInstalled>;

```
