import { SKILLS } from "./skills";
import { SingularExperienceType } from "./types";

const WorkExperience: SingularExperienceType[] = [
  {
    name: "Mandiri My Digital Academy Batch 2",
    logo: "/",
    link: "https://mydigitalacademy.id/",

    images: [],

    history: [
      {
        role: "Awardee",
        date: "Des. 2023 - Jan. 2024",
        job_desc: [
          "Successfully secured a spot among the top 600 awardees, standing out from a competitive pool of over 24,000 applicants (<2.5%).",
          "Engaged in an intensive 1-month Bootcamp at My Digital Academy, emphasizing innovation in banking and financial product development.",
          "Collaborated in a team of 6 to develop a digital banking MVP, and presented the MVP to the judges from Rakamin Academy, Shopee, and Bank Mandiri.",
        ],
      },
    ],

    skills: [SKILLS.Outsystems, SKILLS.Figma, SKILLS.Leadership, SKILLS.Communication],
  },
  {
    name: "Pemantauan Publikasi Ilmiah",
    logo: "/images/experiences/projects/memepedia/logo.svg",
    link: "https://ppi.cs.ui.ac.id/",

    images: [],

    history: [
      {
        role: "Software Engineer",
        date: "Jan. 2023 - Jun. 2023",
        job_desc: [
          "Develop a Web-based scientific publication and journal management portal for Faculty of Computer Science University of Indonesia used by 160+ Graduate and Masters Program students, researchers, and lecturers.",
          "Create and implement the frontend design of the portal using Bootstrap framework and deploy the production version in GCP.",
          "Developed in Django and SQL to support the backend.",
          "Provided the Information Architecture, Wireframe, and the High-Fidelity Design using Figma as the sole UI/UX Developer in the project.",
        ],
      },
    ],

    skills: [SKILLS.GCP, SKILLS.Django, SKILLS.Python, SKILLS.Bootstrap, SKILLS.Figma],
  },
  {
    name: "MACO Design Studio",
    logo: "/",
    link: "https://maco-creatives.framer.website/",

    images: [],

    history: [
      {
        role: "Project Lead",
        date: "Aug. 2022 - Dec. 2022",
        job_desc: ["Managed cross-functional team of 9, ranging from entry-level analysts to board of directors, and collaborated with business development, software engineers, designers, operations and marketing.",
          "Led the development of a web-based application for a client in the law sector.",
          "Collaborated and communicated directly with an undisclosed corporate client.",],
      },
    ],

    skills: [
      SKILLS.Figma,
      SKILLS.Leadership,
      SKILLS.DecisionMaking,
      SKILLS.Communication,
    ],
  },
  {
    name: "University of Indonesia",
    logo: "/images/experiences/work/ui/logo.png",
    link: "https://cs.ui.ac.id/",
    headline_role: "Peer Tutor",
    headline_date: "July 2022 - July 2023",

    images: [],

    history: [
      {
        role: "Peer Tutor for Advanced Programming in 6th semester.",
        date: "Jan. 2023 - June. 2023",
        job_desc: [
          "Directly responsible and assisted 3 students to help them better understand the materials taught in the course.",
          "Gave out weekly/by request tutor sessions.",
        ],
      },
      {
        role: "Peer Tutor for Platform-based Programming in 6th semester.",
        date: "Feb. 2023 - June. 2023",
        job_desc: [
          "Taught 3 students on a weekly basis.",
          "Gave out weekly/by request sessions.",
        ],
      },
      {
        role: "Peer Tutor for Linear Algebra in 5th semester.",
        date: "Jul. 2022 - Dec. 2022",
        job_desc: [
          "Taught 3 students on a weekly basis.",
          "Directly responsible and assisted students to help them better understand the materials taught in the course.",
          "Gave out weekly/by request sessions.",
        ],
      },
    ],

    skills: [SKILLS.Python, SKILLS.Java, SKILLS.Django],
  },
  {
    name: "SalingJaga Research Team",
    logo: "/",
    link: "https://suaramahasiswa.com/saling-jaga-ui-website-inovasi-fh-ui-untuk-penanganan-kekerasan-seksual",

    images: [],

    history: [
      {
        role: "UI/UX Designer",
        date: "Jun 2020 - Dec 2020",
        job_desc: ["Conducted user-oriented research to understand the problems in dealing with sexual assault cases.",
          "Assisted in the process of planning, designing, and implementing the required resources for the solution",
          "Created the hi-fi UI design for ”SalingJaga” website.",],
      },
    ],

    skills: [
      SKILLS.Figma,
    ],
  },
];

export default WorkExperience;