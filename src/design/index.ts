import { createStitches } from "@stitches/react";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  theme: {
    fontSizes: {
      xsm: "0.5rem", // 8
      sm: "0.875rem", // 14
      md: "1rem",
      lg: "1.375rem",
      xlg: "2rem",
    },
    colors: {
      gun_powder: "#3d405c",
      salt_box: "#6c5879",
      tapestry: "#9f5095",
      cranberry: "#d44e86",
      carnation: "#f95d6a",
    },
  },
});
