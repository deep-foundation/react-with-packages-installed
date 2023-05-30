import {
  UseArePackagesInstalledParam,
  useArePackagesInstalled,
} from '@deep-foundation/react-use-are-packages-installed';

export function WithPackagesInstalled(
  param: WithPackagesInstalledParam
): JSX.Element | null {
  const {
    children,
    renderIfError,
    renderIfLoading,
    renderIfNotInstalled,
    ...useArePackagesInstalledParams
  } = param;

  const { packageInstallationStatuses, loading, error } =
    useArePackagesInstalled({
      ...useArePackagesInstalledParams,
    });

  if (loading) {
    return renderIfLoading();
  }

  if (error) {
    return renderIfError(error);
  }

  if (packageInstallationStatuses === undefined) {
    return null;
  }

  const notInstalledPackageNames = Object.entries(packageInstallationStatuses)
    .filter(([packageName, isPackageInstalled]) => !isPackageInstalled)
    .map(([packageName, isPackageInstalled]) => packageName);

  if (notInstalledPackageNames.length === 0) {
    return children;
  } else {
    return renderIfNotInstalled(notInstalledPackageNames);
  }
}

export type WithPackagesInstalledParam = UseArePackagesInstalledParam & {
  renderIfLoading: () => JSX.Element;
  renderIfError: (error: Error) => JSX.Element;
  renderIfNotInstalled: (packageNames: string[]) => JSX.Element;
  children: JSX.Element;
};
