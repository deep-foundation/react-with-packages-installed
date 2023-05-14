import { UseIsPackageInstalledParam, useIsPackageInstalled } from '@deep-foundation/react-use-is-package-installed';

export function WithInstalledPackage (param: WithPackageInstalledParam): JSX.Element {
  const { packageName, shouldIgnoreResultWhenLoading, onError, children , errorChildren,loadingChildren, notInstalledChildren} = param;

  const { isPackageInstalled, loading, error } = useIsPackageInstalled({
    packageName,
    shouldIgnoreResultWhenLoading,
    onError,
  });

  if (loading) {
    return loadingChildren
  }

  if (error) {
    return errorChildren; 
  }

  return isPackageInstalled ? children : notInstalledChildren;
};

export type WithPackageInstalledParam = UseIsPackageInstalledParam & {
  loadingChildren: JSX.Element;
  errorChildren: JSX.Element;
  notInstalledChildren: JSX.Element;
  children: JSX.Element;
};