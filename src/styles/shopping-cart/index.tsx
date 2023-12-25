import { styled } from "@/design";

export const Container = styled("main", {
  ".title > h1": {
    fontSize: "$xlg",
    fontWeight: "500",
  },
});

export const Grid = styled("div", {
  marginTop: "2rem",
  display: "grid",

  gridTemplateColumns: "2fr 1fr",
  gap: "2rem",
});

export const Product = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "1rem",

  borderTop: "1px solid #c2c2c2",
  padding: "2rem 0",
  marginTop: "1rem",
});

export const Image = styled("div", {
  width: "320px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export const Info = styled("div", {
  ".info-heading": {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  },

  ".info-heading > h2": {
    fontSize: "$lg",
    fontWeight: "500",
  },

  ".info-heading > span": {
    fontSize: "$md",
    fontWeight: "600",
  },

  "& > p": {
    fontSize: "$sm",
    fontWeight: "400",

    color: "$gun_powder",
    opacity: "0.72",

    lineHeight: "1.5rem",
  },

  ".info-footer": {
    display: "flex",
    alignItems: "center",
    marginTop: "12px",

    gap: "2rem",
  },

  ".info-footer > select": {
    padding: "4px 16px",

    fontSize: "$sm",
    fontWeight: "500",

    border: "none",
    boxShadow: "0 0 10px rgba(0,0,0,0.22)",

    borderRadius: "4px",
    background: "#fff",

    cursor: "pointer",
  },

  ".info-footer > span": {
    fontSize: "$sm",
    fontWeight: "400",

    cursor: "pointer",
    transition: ".2s ease-in-out",
  },

  ".info-footer > span:hover": {
    color: "$salt_box",
  },
});

export const Order = styled("div", {
  background: "#fff",

  height: "100px",
  padding: "16px",

  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  ".order-heading": {
    display: "flex",
    gap: "0.5rem",
    marginBottom: "8px",
  },

  ".order-heading > h2 ": {
    fontWeight: 500,
    fontSize: "$md",
  },

  ".order-heading > span ": {
    fontWeight: 600,
    fontSize: "$md",
  },

  button: {
    width: "100%",
    padding: "8px 12px",

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
