import { Link, Typography } from "@mui/material";

export const foodPalace2Data = {
  title: "Food palace 2",
  title2: "I made this CMS in 2 different versions:",
  extraInfoJSX: (
    <>
      1.React + Redux
      <br />
      <Link
        onClick={() => {
          window.open("https://github.com/kai-zen/food-palace-2", "_blank");
        }}
        sx={{ cursor: "pointer" }}
      >
        Source code
      </Link>
      <br />
      <br />
      2.Next.js + Mongo db
      <br />
    </>
  ),
  date: "March 6, 2022",
  image: "/images/food-palace-2.png",
  sourceCode: "https://github.com/kai-zen/next-food-palace-2",
  visitLink: "https://food-palace-2.netlify.app",
  technologies: [
    "React.js",
    "Redux",
    "Next.js",
    "MUI",
    "MongoDB",
    "mongoose",
    "jwt",
    "bcryptjs",
    "axios",
    "Formik",
    "regex",
  ],
  aboutJSX: (
    <>
      <Typography paragraph>Next.js version:</Typography>
      <Typography paragraph>
        I used Material UI to implement components and cookies to save data,
        Redux to manage states in client side and SSR + static generation to
        fetch data from my own APIs (by axios) which are implemented using Next
        api routes. Saved data in mongo db and did the CRUD on it using
        mongoose.
      </Typography>
      <Typography paragraph>React.js version:</Typography>
      <Typography paragraph>
        In React version, I used react-router v6 to manage routes and Formik to
        validate forms, Redux to manage data and
      </Typography>
    </>
  ),
};

export const cryptoData = {
  title: "Crypto price tracker",
  title2: "My first experience working with APIs",
  date: "December 1, 2021",
  image: "/images/crypto.png",
  sourceCode: "https://github.com/kai-zen/crypto-tracker",
  visitLink: "https://github.com/kai-zen/crypto-tracker",
  technologies: ["React.js", "CSS", "HTML", "axios"],
  aboutJSX: (
    <Typography paragraph>
      I didn't have any experience with APIs so it was more like a practice than
      a project.
      <br />
      Styling and UI are all only CSS and HTML.
    </Typography>
  ),
};
