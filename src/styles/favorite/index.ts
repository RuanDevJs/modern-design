import { styled } from "@/design";

export const Container = styled("main", {
  ".heading h1": {
    fontWeight: "500",
    fontSize: "$xlg",
    color: "$gun_powder",

    padding: "1rem 2rem 1rem 2rem",

    borderBottom: "1px solid #f2f2f2",
  },
});

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "1rem",

  padding: "2rem",

  ".product": {
    maxWidth: "100%",

    boxShadow: "0 0 16px rgba(0,0,0,0.12)",
    padding: "1rem",

    position: "relative",
    borderRadius: 6,

    overflow: "hidden",

    img: {
      width: "180px",
      height: "120px",
      objectFit: "cover",

      borderRadius: "4px",
      margin: "0 auto",
    },

    h2: {
      width: "320px",
      fontSize: "$md",
      fontWeight: "600",
      color: "$gun_powder",

      padding: "8px 0",
    },

    p: {
      width: "100%",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",

      fontSize: "$sm",
      fontWeight: "400",
      color: "#c2c2c2",
    },
  },

  ".icon": {
    position: "absolute",
    top: 0,
    right: 0,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "4px",
    margin: "8px",

    color: "$carnation",
    background: "#fff",

    borderRadius: "50px",
    cursor: "pointer",

    transition: ".15s ease-in-out",

    "&:hover": {
      filter: "brightness(1.2)",
      opacity: 0.72,
    },
  },
});
