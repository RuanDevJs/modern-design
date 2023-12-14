import { styled } from "@/design";

export const Container = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  ".heading-img img": {
    width: "100%",
  },
});

export const Navigation = styled("nav", {
  ".navigation-menu": {
    display: "flex",
    alignItems: "center",
  },

  ".navigation-menu > li": {
    margin: "0 8px",
  },

  ".navigation-menu > li > a": {
    fontSize: "$md",
    fontWeight: "500",
    color: "$gun_powder",
    padding: "8px 16px",

    transition: ".32s ease-in-out",

    "&:hover": {
      color: "$salt_box",
    },
  },
});

export const Menu = styled("div", {
  ul: {
    display: "flex",
    alignItems: "center",
  },

  li: {
    margin: "0 4px",
    padding: "8px",

    cursor: "pointer",
    color: "$gun_powder",

    transition: ".32s ease-in-out",

    a: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      color: "$gun_powder",
      "&:hover": {
        color: "$salt_box",
      },
    },
  },
});
