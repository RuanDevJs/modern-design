import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
    outline: 0,
  },

  "h1, h2, h3, ul, li, a, span, p, img, button": {
    display: "block",
    maxWidth: "100%",
  },

  "a, ul, li": {
    textDecoration: "none",
    listStyle: "none",
  },

  img: {
    display: "block",
    maxWidth: "100%",
    objectFit: "cover",
  },

  "body, label, input, textarea, button": {
    fontFamily: "Poppins, sans-serif",
    fontSize: "$md",
    color: "$gun_powder",
  },

  ".container": {
    width: "calc((100vw / 2rem) ) 0.82px)",
    margin: "0 auto",
    padding: "1rem 4rem",
  },
});
