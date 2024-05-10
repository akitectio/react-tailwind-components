import merge from "deepmerge";
import PropTypes from "prop-types";
import { ReactNode, createContext, useContext } from "react";
import theme from "../theme/index";
import combineMerge from "../utils/combineMerge";

const AkitectTailwindTheme = createContext(theme);

AkitectTailwindTheme.displayName = "AkitectTailwindThemeProvider";

interface ThemeProviderProps {
  value?: typeof theme;
  children: ReactNode;
}



function ThemeProvider({ value = theme, children }: ThemeProviderProps) {
  const mergedValue = merge(theme, value, { arrayMerge: combineMerge });
  return (
    <AkitectTailwindTheme.Provider value={mergedValue}>{children}</AkitectTailwindTheme.Provider>
  )
}

const useTheme = () => useContext(AkitectTailwindTheme);

ThemeProvider.propTypes = {
  value: PropTypes.instanceOf(Object),
  children: PropTypes.node.isRequired,
};

export { AkitectTailwindTheme, ThemeProvider, useTheme };
