export const pages = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Skills",
    path: "/skills",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Dobaare",
    subprojects: [
      {
        title: "Panel",
        address: "http://panel.dobaare.com",
        stack: ["React", "Tailwind", "Redux"],
      },
      {
        title: "PWA",
        address: "http://app.dobaare.com",
        stack: ["React", "Tailwind", "Redux"],
      },
      {
        title: "Landing page",
        address: "http://dobaare.com",
        stack: ["Next JS", "Material UI"],
      },
      {
        title: "Blog",
        address: "http://dobaare.com/blog",
        stack: ["Next JS", "Material UI"],
      },
    ],
  },
  {
    id: 2,
    title: "Jib",
    subprojects: [
      {
        title: "PWA",
        address: "https://app.jibrasht.com",
        stack: ["React", "Sass", "Redux"],
      },
      {
        title: "Mobile app",
        address:
          "https://play.google.com/store/apps/details?id=com.clientjibapp",
        stack: ["React Native", "Redux"],
      },
      {
        title: "Landing page",
        address: "https://jibrasht.com",
        stack: ["Next JS", "Material UI"],
      },
    ],
  },
  {
    id: 3,
    title: "Challesh",
    subprojects: [
      {
        title: "PWA",
        address: "https://challesh.ir",
        stack: ["React", "Material UI", "Redux"],
      },
    ],
  },
  {
    id: 4,
    title: "Hadid HRM",
    subprojects: [
      {
        title: "PWA",
        address: "https://gitlab.com/omid36163413/hadidhrmfrontend",
        stack: ["React", "Material UI", "Redux"],
      },
      {
        title: "Panel",
        address: false,
        stack: ["React", "Material UI", "Redux"],
      },
    ],
  },
  {
    id: 5,
    title: "Luna shop",
    subprojects: [
      {
        title: "PWA",
        address: false,
        stack: ["Next JS", "Tailwind", "Typesctipt", "Redux"],
      },
      {
        title: "Panel",
        address: "https://github.com/kai-zen/luna_panel",
        stack: ["React", "Material UI", "GraphQL", "Redux"],
      },
    ],
  },
  {
    id: 6,
    title: "Food Palace 2",
    subprojects: [
      {
        title: "PWA (React)",
        address: "https://food-palace-2.netlify.app",
        stack: ["React", "Javascript", "Material UI", "Redux"],
      },
      {
        title: "Fullstack CMS",
        address: "https://github.com/kai-zen/next-food-palace-2",
        stack: ["Next JS", "Material UI", "Redux", "MongoDB", "mongoose"],
      },
    ],
  },
  {
    id: 7,
    title: "Food Palace",
    subprojects: [
      {
        title: "PWA with React",
        address: "https://food-palace-1.netlify.app",
        stack: ["React", "Bootstrap", "React Context"],
      },
    ],
  },
  {
    id: 8,
    title: "ToDo list",
    subprojects: [
      {
        title: "ToDo list",
        address: "https://my-todo-list-redux.netlify.app",
        stack: ["React", "CSS", "Redux"],
      },
    ],
  },
];

export const mainSkills = [
  { text: "HTML", number: "95" },
  { text: "CSS", number: "95" },
  { text: "Javascript", number: "80" },
  { text: "React JS", number: "85" },
];

const otherSkills = [
  "Typescript",
  "Next JS",
  "React Native",
  "Sass",
  "Git/Github/Gitlab",
];

const softSkills = [
  "Responsibility",
  "Teamwork",
  "Crisis Management",
  "Creativity & ideation",
  "Problem solving",
  "Planning",
  "Train & learning",
];

const libraries = [
  "Material UI",
  "Tailwind",
  "Redux",
  "Bootstrap",
  "React query",
];

export const skillsSections = [
  {
    title: "Other skills",
    data: otherSkills,
  },
  {
    title: "Soft skills",
    data: softSkills,
  },
  {
    title: "Libraries",
    data: libraries,
  },
];
