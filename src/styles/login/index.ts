import { keyframes, styled } from "@/design";

export const Container = styled("main", {
  marginTop: "1rem",

  display: "flex",
  alignItems: "center",
  flexDirection: "column",

  h1: {
    fontWeight: "600",
    fontSize: "$lg",
    color: "$carnation",
  },

  h2: {
    fontWeight: "600",
    fontSize: "$lg",
    color: "$gun_powder",

    textTransform: "capitalize",
    marginBottom: "1rem",
  },

  button: {
    width: "320px",
    padding: "6px 8px",

    border: 0,
    background: "$carnation",

    fontWeight: "500",
    fontSize: "$md",
    color: "#fff",

    borderRadius: 4,
    marginBottom: "18px",

    cursor: "pointer",
    transition: ".15s ease-in-out",

    "&:hover": {
      filter: "brightness(1.2)",
    },
  },
});

export const Form = styled("form", {
  margin: "2rem 0",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",

  button: {
    width: "320px",
    padding: "6px 8px",

    border: 0,
    background: "$carnation",

    fontWeight: "500",
    fontSize: "$md",
    color: "#fff",

    borderRadius: 4,
    marginBottom: "18px",

    cursor: "pointer",
    transition: ".15s ease-in-out",

    "&:hover": {
      filter: "brightness(1.2)",
    },
  },

  span: {
    display: "flex",
    fontWeight: "500",
    fontSize: "$sm",

    color: "$gun_powder",
    gap: "4px",

    transition: ".15s ease-in-out",

    a: {
      color: "$carnation",
      cursor: "pointer",

      "&:hover": {
        filter: "brightness(1.2)",
      },
    },
  },
});

export const Label = styled("div", {
  width: 460,

  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: "4px",

  marginBottom: "1rem",

  label: {
    fontSize: "$md",
    fontWeight: "400",
    color: "$gun_powder",
  },

  input: {
    width: "100%",
    padding: "12px 8px",

    border: "0",
    background: "#f2f2f2",

    borderRadius: 4,

    fontSize: "$md",
    fontWeight: "500",
    color: "$gun_powder",

    outline: "0.1px solid rgba(0,0,0,0.01)",
    transition: ".3s ease-in-out",
  },

  "input:focus": {
    outline: "1px solid rgba(0,0,0,0.2)",
  },
});
