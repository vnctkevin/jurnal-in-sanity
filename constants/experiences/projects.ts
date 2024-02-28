import { SKILLS } from "./skills";
import { SingularExperienceType } from "./types";

const ProjectsExperience: SingularExperienceType[] = [
  {
    name: "URL Shortener",
    logo: "/images/experiences/projects/url_shortener/logo.svg",
    link: "https://github.com/vnctkevin/url-shortener",

    images: [],

    history: [
      {
        role: "Software Engineer",
        date: "Apr. 2023",
        job_desc: [
          "Developed a simple URL Shortener using Django and SQLite.",
        ],
      },
    ],

    skills: [SKILLS.Python, SKILLS.SQLite, SKILLS.Django],
  },
  {
    name: "Jurnal Visual Kevin",
    logo: "/images/experiences/projects/jvk/logo_jvk.svg",
    link: "https://github.com/vnctkevin/jvk-blog",

    images: [],

    history: [
      {
        role: "Software Engineer/Content Writer",
        date: "Jun. 2023 - Present",
        job_desc: [
          "Develop a personal blog using Sanity CMS, NextJS, and Cloudinary Image Gallery. This page reaches 500+ page views within 21 days of the launch.",
          "Use TailwindCSS for styling and deploy it in Vercel.",
          "Write articles about my thoughts, hobbies, and case study of my past works.",
        ],
      },
    ],

    skills: [SKILLS.NextJS, SKILLS.TailwindCSS, SKILLS.Cloudinary, SKILLS.StyledComponents],
  },
  {
    name: "BooKantin",
    logo: "/",
    link: "https://github.com/vincentsuryakim/bookantin-fe",

    images: [],

    history: [
      {
        role: "Frontend Engineer",
        date: "Sep. 2022 - Dec. 2022",
        job_desc: [
          "Developed a Web-based online food and beverage purchase and booking application.",
          "Designed and implemented using Django REST API as backend services and Next.JS with TailwindCSS framework as app frontend.",
        ],
      },
    ],

    skills: [SKILLS.Django, SKILLS.Figma, SKILLS.NextJS, SKILLS.TailwindCSS],
  },
  {
    name: "Reflekt.io",
    logo: "/",
    link: "https://reflekt-io.adaptable.app/",

    images: [],

    history: [
      {
        role: "Software Engineer",
        date: "May. 2021 - Oct. 2021",
        job_desc: [
          "Developed a web and mobile application to help maintain people's mental health during difficult situations, especially in a pandemic.",
          "Used Bootstrap for styling and deployed using various PaaS during the current software lifespan.",
          "Developed in Django and SQL to support the backend.",
        ],
      },
    ],

    skills: [SKILLS.Flutter, SKILLS.Django, SKILLS.Python, SKILLS.Figma],
  },
];

export default ProjectsExperience;