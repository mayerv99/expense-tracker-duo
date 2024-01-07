import { defaultTheme } from "../styles/HomeStyle/theme";

declare module "styled-components" {
  type ThemeType = typeof defaultTheme;
  export interface DefaultTheme extends ThemeType {}
}
