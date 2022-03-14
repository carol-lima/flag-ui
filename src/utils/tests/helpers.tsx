import { ThemeProvider } from "styled-components";
import { render, RenderResult, RenderOptions } from "@testing-library/react";

import theme from "../../styles/theme";

const AllTheProviders: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const renderWithTheme = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });