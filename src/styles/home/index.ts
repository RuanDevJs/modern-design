import { keyframes, styled } from "@/design";

export const FromDownToUp = keyframes({
  from: {
    opacity: 0,
    transform: "translate3d(0, 50px, 0)",
  },
  to: {
    opacity: 1,
    transform: "translate3d(0, 0px, 0)",
  },
});

export const Container = styled("main", {
  marginTop: "2rem",
});

export const Intro = styled("main", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "2rem",
});

export const Left = styled("div", {
  width: "calc(100vw * 0.48)",

  h1: {
    fontSize: "50px",
    fontWeight: "600",
    textTransform: "capitalize",

    marginBottom: "15px",
  },

  p: {
    fontSize: "$md",
    fontWeight: 500,
    color: "#c9c9c9",
    lineHeight: 1.5,
  },

  ".form-search": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "stretch",

    maxWidth: "100%",
    height: "60px",
    marginTop: "40px",
    padding: "1rem 0",

    background: "#F2F2F2",
    borderRadius: 50,
  },

  ".form-search .input": {
    width: "80%",

    display: "flex",
    alignItems: "center",

    marginLeft: "12px",
  },

  ".form-search .input > input": {
    display: "block",
    width: "100%",

    border: 0,
    padding: "1rem",
    background: "transparent",

    fontSize: "$lg",
    fontWeight: "400",

    "&::placeholder": {
      color: "$gun_powder",
    },
  },

  ".form-search button": {
    border: 0,

    fontSize: "$lg",
    background: "$carnation",
    color: "#fff",

    width: "40%",
    height: "60px",

    borderRadius: 50,
    cursor: "pointer",

    transition: ".3s ease-in-out",

    "&:hover": {
      filter: "brightness(1.2)",
    },
  },
});

export const Right = styled("div", {
  marginLeft: "20px",

  ".right-img > img": {
    display: "block",
    width: 560,
    height: 360,
    objectFit: "cover",
  },

  ".announcement": {
    position: "relative",
    top: -20,
    right: -140,
    zIndex: 100,

    width: "360px",
    padding: "8px",

    display: "flex",
    alignItems: "center",
    gap: "12px",

    boxShadow: "0 0 12px rgba(0,0,0,0.25)",
    borderRadius: 12,

    background: "#fff",
  },

  ".announcement > img": {
    objectFit: "cover",
  },

  ".info h2": {
    fontSize: "$md",
    fontWeight: 400,

    marginBottom: 4,
  },

  ".info span": {
    display: "block",

    fontSize: "$sm",
    fontWeight: 700,

    margin: "4px 0",
  },

  ".info > button": {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 10,

    width: 32,
    height: 32,
    background: "$carnation",

    border: 0,
    borderRadius: 50,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    cursor: "pointer",

    transition: ".3s ease-in-out",

    "&:hover": {
      filter: "brightness(1.2)",
    },
  },
});

export const ProductsSection = styled("section", {
  marginTop: "2rem",
  background: "#fff",

  h1: {
    fontWeight: 400,
    fontSize: "$xlg",
  },

  ".products": {
    marginTop: "2rem",
    padding: "1rem",

    display: "flex",
    alignItems: "center",
  },

  ".product": {
    width: 333,
    marginBottom: "2rem",
    textAlign: "center",

    display: "flex",
    justifyContent: "center",
    flexDirection: "column",

    boxShadow: "0 0 2px rgba(0,0,0,0.25)",
    padding: "2rem",

    borderRadius: 12,
  },

  ".product-img": {
    width: "100%",
    margin: "0 auto",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  ".product > h2": {
    fontSize: "$lg",
    padding: "8px 0",
    fontWeight: "500",
  },

  ".product > span": {
    fontSize: "$sm",

    padding: "0",
    fontWeight: "700",
  },

  ".product > button": {
    width: 220,

    padding: 4,
    margin: "8px auto",

    borderRadius: 15,
    border: 0,

    background: "$carnation",
    color: "#fff",

    cursor: "pointer",

    transition: ".3s ease-in-out",

    "&:hover": {
      filter: "brightness(1.2)",
    },
  },
});

export const CategorySection = styled("section", {
  marginTop: "2rem",

  h1: {
    fontWeight: 400,
    fontSize: "$xlg",
  },

  ".category-container": {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 16,

    marginTop: "2rem",
  },

  ".category-container img": {
    width: "100%",
    height: 460,
    objectFit: "cover",
    borderRadius: 6,
  },

  ".category-overlay": {
    position: "relative",
  },

  ".category-overlay:hover .overlay": {
    opacity: 1,
  },

  ".overlay": {
    position: "absolute",
    top: 0,
    zIndex: 100,

    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    opacity: 0,
    transition: "ease-in-out .3s",

    cursor: "pointer",
    borderRadius: 6,
  },

  ".overlay > h1": {
    fontSize: "$lg",
    fontWeight: 500,

    textTransform: "uppercase",
    color: "#fff",

    letterSpacing: 1.3,

    border: "2px solid #fff",
    padding: "8px 8px",

    transition: "ease-in-out .3s",

    "&:hover": {
      filter: "brightness(0.72)",
    },

    borderRadius: "2px 10px",
  },
});

export const BlogSection = styled("section", {
  marginTop: "4rem",

  h1: {
    fontWeight: 400,
    fontSize: "$xlg",
    marginBottom: "1.875rem",
  },

  ".blog-container": {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "50px",
  },

  ".post": {
    position: "relative",
    overflow: "hidden",
    borderRadius: 16,
  },

  ".post:hover .post-overlay": {
    animation: `${FromDownToUp} .25s forwards`,
    transition: "ease-in-out .25s",
  },

  ".post > img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 16,

    cursor: "pointer",
  },

  ".blog-container .post:nth-child(1)": {
    gridColumn: "1/3",
    gridRow: "span 2",
  },

  ".post-overlay": {
    width: "100%",
    height: "100%",

    position: "absolute",
    top: 0,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    textAlign: "center",
    background: "rgba(0,0,0,0.62)",

    opacity: 0,
    borderRadius: 16,

    transition: "ease-in-out .25s",
  },

  ".post-overlay > h2": {
    marginTop: "1rem",
    width: "100%",

    fontSize: "$lg",
    fontWeight: 500,

    color: "#fff",
  },

  ".post-overlay > h2::after": {
    content: "",
    width: 120,

    display: "block",
    height: 2,

    margin: "4px auto",
    background: "#fff",
  },

  ".post-overlay > button": {
    margin: "20px",
    width: 120,

    border: "1px solid white",
    background: "transparent",

    fontSize: "$md",
    fontWeight: 500,

    color: "#fff",
    padding: 4,

    textTransform: "capitalize",
    borderRadius: "10px 2px",

    cursor: "pointer",
    transition: ".2s ease-in-out",
  },

  ".post-overlay > button:hover": {
    background: "#fff",
    color: "$gun_powder",
  },
});

export const ContactSection = styled("section", {
  marginTop: "4rem",

  h1: {
    fontWeight: 400,
    fontSize: "$xlg",
    marginBottom: "1.875rem",
  },
});

export const ContactContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
});

export const ContactAddress = styled("div", {
  background: "$carnation",
  padding: "2rem",

  ".contact-address-title": {
    fontSize: "$lg",
    fontWeight: "500",
    color: "#fff",

    marginBottom: "1rem",
  },

  borderRadius: "16px 0 0 16px",

  ".address-list": {
    marginBottom: "2.875rem",
  },

  ".address-list li": {
    marginBottom: "1rem",
  },

  ".address-list li:nth-child(n+2)": {
    marginLeft: "23px",
  },

  ".address-list span": {
    display: "flex",
    alignItems: "center",
    gap: "4px",

    fontSize: "$md",
    fontWeight: 500,
    color: "#f2f2f2",
  },
});

export const ContactForm = styled("div", {
  background: "#ffff",
  padding: "2rem",

  borderRadius: "0 16px 16px 0",
  boxShadow: "0px 0px 25px rgba(0,0,0,0.12)",

  "& > div:nth-child(1)": {
    display: "flex",
    gap: "1rem",
  },

  ".label": {
    padding: "1rem 0",
    margin: "12px 0 8px",

    display: "flex",
    flexDirection: "column",
  },

  ".label input:focus": {
    transition: "ease-in-out .22s",
    borderBottom: "$cranberry 0.2px solid",
  },

  ".label textarea:focus": {
    transition: "ease-in-out .22s",
    border: "$cranberry 0.2px solid",
  },

  ".label > label": {
    fontWeight: "500",
    color: "$salt_box",
    marginBottom: "4px",
    lineHeight: 1.3,
  },

  ".label > input": {
    fontWeight: "400",
    color: "$gun_powder",

    padding: "8px 0px",
    border: 0,
    borderBottom: "1px solid #f2f2f2",
  },

  ".label > textarea": {
    width: "620px",

    height: "320px",

    resize: "none",

    fontWeight: "400",
    color: "$gun_powder",
    lineHeight: "1.5rem",

    padding: "8px 16px",

    border: "0.2px solid #f2f2f2",
    borderRadius: 6,
  },

  button: {
    width: "220px",
    padding: 12,

    background: "$carnation",
    border: 0,
    borderRadius: "4px",

    fontWeight: 600,
    fontSize: "$md",
    color: "#fff",

    cursor: "pointer",
    transition: ".2s ease-in-out",

    "&:hover": {
      filter: "brightness(1.2)",
    },
  },
});
