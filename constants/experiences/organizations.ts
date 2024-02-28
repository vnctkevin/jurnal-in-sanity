import { SKILLS } from "./skills";
import { SingularExperienceType } from "./types";

const OrganizationsExperience: SingularExperienceType[] = [
  {
    name: "COMPFEST",
    logo: "/images/experiences/organizations/compfest/logo.svg",
    link: "https://www.compfest.id/",

    images: [
      "/images/experiences/organizations/compfest/1.png",
      "/images/experiences/organizations/compfest/2.png",
      "/images/experiences/organizations/compfest/3.png",
      "/images/experiences/organizations/compfest/4.png",
    ],

    history: [
      {
        role: "Staff of UI/UX Design",
        date: "Nov. 2021 - Dec. 2022",
        job_desc: [
          "Work with 10 UX designers to complete projects from various product owners.",
          "Contribution in the creation of Academy and Competition UI/UX Design which was used by over 4200+ participants in that year's event.",
          "Create user-centered design through user interview, wireframe, high fidelity design, and usability testing for COMPFEST 14's user dashboard, Academy and Competition event, and Job and Intern Fair.",
        ],
      },
      {
        role: "Graphic Designer",
        date: "Mar. 2021 - Nov. 2021",
        job_desc: [
          "Developed a the main website using Next.js, TypeScript, TailwindCSS, and Framer Motion.",
          "Developed the business logic and transactional mailing system using Fastify, GraphQL, AWS SES, and many more.",
          "Designed and developed an email template using Figma and MJML.",
        ],
      },
    ],

    skills: [
      SKILLS.Photoshop,
      SKILLS.Figma,
    ],
  },
  {
    name: "StudentXCEOs",
    logo: "/",
    link: "/",

    images: [
      
    ],

    history: [
      {
        role: "IT Developer",
        date: "May. 2021 - Oct. 2021",
        job_desc: [
          "Work with 2 UX designers and 5 Software Developers to complete projects to support the event.",
          "Create user-centered design through user interview, wireframe, high fidelity design, and usability testing for StudentXCEOs' merchandise store page and landing page." ,
        ],
      },
    ],

    skills: [SKILLS.Figma],
  },
  {
    name: "Open House Fasilkom UI 2020",
    logo: "/",
    link: "/",

    images: [
      
    ],

    history: [
      {
        role: "Graphic Designer",
        date: "Sept. 2020 - Dec. 2020",
        job_desc: [
          "Assisted in designing promotional and supplementary material for Open House Fasilkom UI 2020",
          "Produced and designed the merchandise for Open House Fasilkom UI 2020",
        ],
      },
    ],

    skills: [SKILLS.Figma, SKILLS.Photoshop],
  },
  {
    name: "Google Developer Student Club University of Indonesia",
    logo: "/",
    link: "/",

    images: [
      
    ],

    history: [
      {
        role: "Member",
        date: "Feb. 2022 - Present",
        job_desc: [
          "Participated in various events and workshops held by the club.",
        ],
      },
    ],

    skills: [SKILLS.Java, SKILLS.Django, SKILLS.GCP],
  },
];

export default OrganizationsExperience;
