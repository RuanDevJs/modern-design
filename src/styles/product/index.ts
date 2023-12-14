import { styled } from "@/design";

export const Container = styled("main", {
  marginTop: "2rem",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  alignItems: "start",
  gap: "2rem",

  ".product-image > img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  ".product-details": {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  ".product-details > h1": {
    fontSize: "$xlg",
    fontWeight: "700",
    background:
      "linear-gradient(180deg,rgba(249, 93, 106, 1), rgba(249, 93, 106, 0.5))",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },

  ".product-details > span": {
    fontSize: "$lg",
    fontWeight: "700",
    color: "$gun_powder",

    padding: "12px 0",
  },

  ".product-details > p": {
    fontSize: "1.125rem",
    fontWeight: "400",
    color: "#c2c2c2",

    lineHeight: "1.5rem",
  },

  ".stars": {
    marginTop: "1rem",

    svg: {
      marginRight: "8px",
    },

    paddingBottom: "2rem",
    borderBottom: "1px solid #f9f9f9",
  },

  ".cep-form": {
    margin: "32px 0",
  },

  ".cep-form-label": {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "12px",
  },

  ".calculate-form": {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },

  ".calculate-form button": {
    width: 120,
    fontSize: "$md",
    fontWeight: 500,
    background: "$carnation",

    padding: "8px",
    marginTop: "auto",

    borderRadius: "4px",
    height: 40,
  },

  ".calculate-form > input": {
    padding: "12px 16px",
    borderRadius: "4px",

    background: "#f2f2f2",
    fontSize: "$md",

    fontWeight: 500,
    height: 40,

    border: 0,
  },

  button: {
    border: 0,
    color: "#fff",

    fontSize: "$lg",
    fontWeight: 500,
    background: "$carnation",

    width: "460px",
    padding: "8px",
    marginTop: "auto",

    borderRadius: 4,
    cursor: "pointer",
    transition: ".3s ease-in-out",

    "&:hover": {
      filter: "brightness(1.2)",
    },
  },
});
