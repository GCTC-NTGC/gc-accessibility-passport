import path from "path-browserify";
import { useIntl } from "react-intl";
import { getLocale } from "./localize";

export type accessibilityPassportRoutes = ReturnType<
  typeof accessibilityPassportRoutes
>;

function accessibilityPassportRoutes(lang: string) {
  const home = (): string => path.join("/", lang, "/"); // leading slash in case empty base url
  return {
    home,
  };
}

/**
 * A hook version of indigenousApprenticeshipRoutes which gets the locale from the intl context.
 * @returns IndigenousApprenticeshipRoutes
 */
export const useAccessibilityPassportRoutes =
  (): accessibilityPassportRoutes => {
    const intl = useIntl();
    const locale = getLocale(intl);
    return accessibilityPassportRoutes(locale);
  };

export default accessibilityPassportRoutes;
