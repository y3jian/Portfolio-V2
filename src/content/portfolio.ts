export type Project = {
  name: string;
  stack: string;
  image: string;
  imageAlt: string;
  /** CSS object-position matching the crop in Figma */
  imagePosition: string;
};

export type Role = {
  title: string;
  company: string;
  dates: string;
  description: string;
};

export const profile = {
  name: "Yolanda Jian",
  tagline:
    "A management engineering + AI student passionate about software development and data. In my free time, I love to dance, bake, and draw.",
  email: "yolandajian8@gmail.com",
  resumeUrl: "/assets/yolanda-jian-resume-2025.pdf",
  github: "https://github.com/y3jian",
  linkedin: "https://www.linkedin.com/in/yolandajian/",
};

export const projects: Project[] = [
  {
    name: "café flo",
    stack: "React Native, Typescript, Google Gemini API, Figma",
    image: "/assets/project-cafe-flo.png",
    imageAlt: "café flo, a period care app shown on a phone",
    imagePosition: "56% 50%",
  },
  {
    name: "Stock analysis assistant",
    stack: "Python, LangChain, HuggingFace Transformers, Streamlit",
    image: "/assets/project-stock-analyst.png",
    imageAlt: "Chat interface answering questions about stocks",
    imagePosition: "100% 50%",
  },
  {
    name: "Waste Tracker",
    stack: "JavaScript, HTML/CSS, C++, Arduino",
    image: "/assets/project-waste-tracker.png",
    imageAlt: "Waste Tracker hackathon project",
    imagePosition: "50% 0%",
  },
  // TODO: replace placeholder name/stack/image with the real project details.
  {
    name: "New Project 1",
    stack: "Add tech stack",
    image: "/assets/project-placeholder.svg",
    imageAlt: "Placeholder image for a new project",
    imagePosition: "50% 50%",
  },
  // TODO: replace placeholder name/stack/image with the real project details.
  {
    name: "New Project 2",
    stack: "Add tech stack",
    image: "/assets/project-placeholder.svg",
    imageAlt: "Placeholder image for a new project",
    imagePosition: "50% 50%",
  },
];

// TODO: the Figma design uses placeholder copy for the CIBC roles — replace with real descriptions.
const placeholder =
  "this is content text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor";

export const roles: Role[] = [
  // TODO: replace placeholder title/company/dates/description with the real role details.
  {
    title: "Add role title",
    company: "Add company",
    dates: "Add dates",
    description: placeholder,
  },
  {
    title: "Software Developer Intern",
    company: "CIBC",
    dates: "Sept 2025 - present",
    description: placeholder,
  },
  {
    title: "Automation Engineering Intern",
    company: "CIBC",
    dates: "Jan 2025 - Apr 2025",
    description: placeholder,
  },
  {
    title: "Research + Data Analyst Intern",
    company: "Canada Revenue Agency (CRA)",
    dates: "May 2024 - Aug 2024",
    description:
      "Improved operational digitization by 10% using GenAI and data analytics.",
  },
];
