export type Project = {
  name: string;
  stack: string;
  description: string;
  image: string;
  imageAlt: string;
  /** CSS object-position matching the crop in Figma */
  imagePosition: string;
  liveUrl?: string;
  repoUrl?: string;
};

export type Role = {
  title: string;
  company: string;
  companyUrl?: string;
  dates: string;
  description: string;
};

export const profile = {
  name: "Yolanda Jian",
  tagline:
    "A management engineering + AI student passionate about data science and machine learning. In my free time, I love to dance, bake, and draw!",
  email: "y3jian@uwaterloo.ca",
  resumeUrl: "/assets/Yolanda_Jian_Resume_2026.pdf",
  github: "https://github.com/y3jian",
  linkedin: "https://www.linkedin.com/in/yolandajian/",
};

// The 3 highlighted at the top of the Projects section.
export const featuredProjects: Project[] = [
  {
    name: "Scan2Craft",
    stack: "Python, NumPy, Trimesh, scikit-image, litemapy",
    description: "Turns a 3D scan of an object into a fully buildable voxel structure, auto-generated inside Minecraft.",
    image: "/assets/scan2craft.png",
    imageAlt: "A giant voxel sculpture built into a Minecraft landscape",
    imagePosition: "50% 50%",
    repoUrl: "https://github.com/y3jian/MinecraftModel",
  },
  {
    name: "Arctic Sea Ice",
    stack: "Python, PyTorch, scikit-learn, Clay, AWS SageMaker, Docker",
    description:
      "A sea-ice classification pipeline that turns raw Arctic satellite imagery into zoned ice classification maps.",
    image: "/assets/Arctic-sea-ice.png",
    imageAlt: "Side-by-side satellite imagery and classified sea ice zone map",
    imagePosition: "50% 50%",
    repoUrl: "https://github.com/sparkgeo/arctic-showcase",
  },
  {
    name: "Stock analysis assistant",
    stack: "Python, LangChain, HuggingFace Transformers, Streamlit",
    description: "A chat assistant that answers natural-language questions about stocks using LLM-driven analysis.",
    image: "/assets/project-stock-analyst.png",
    imageAlt: "Chat interface answering questions about stocks",
    imagePosition: "100% 50%",
    repoUrl: "https://github.com/y3jian/LLM-Investment-QA-App",
  },
];

// The rest, browsable in the carousel below the featured 3.
export const moreProjects: Project[] = [
  {
    name: "EV Energy Consumption Model",
    stack: "Python, JupyterLab, pandas, NumPy, scikit-learn, matplotlib, seaborn, TensorFlow",
    description:
      "Compared Random Forest, Gradient Boosting, and Lasso models for predicting EV energy consumption.",
    image: "/assets/ev_energy_ml.png",
    imageAlt: "EV Energy Consumption cover graphic — ML applications in the EV sector",
    imagePosition: "20% 50%",
    repoUrl: "https://github.com/y3jian/ML-EV-Energy-Consumption",
  },
  {
    name: "Matcha Mania",
    stack: "Python, BeautifulSoup, SQLAlchemy, pandas, HTML/CSS, JavaScript",
    description:
      "A price-tracking dashboard that checks ceremonial matcha listings across vendors daily, with sorting, region filters, and a watchlist.",
    image: "/assets/matcha_mania.png",
    imageAlt: "Dashboard listing ceremonial matcha prices across vendors",
    imagePosition: "50% 0%",
    repoUrl: "https://github.com/y3jian/matcha-mania",
  },
  {
    name: "Soma",
    stack: "React, TypeScript, Vite, Tailwind CSS, Three.js, Supabase, Auth0, Python (FastAPI, PyTorch, MONAI)",
    description:
      "An interactive pain-tracking app that log symptoms on a 3D body model and replay severity trends over time with a heatmap and playback timeline.",
    image: "/assets/soma.png",
    imageAlt: "3D body model with a pain heatmap and severity-over-time chart",
    imagePosition: "50% 50%",
    repoUrl: "https://github.com/michellejyao/soma",
  },
  {
    name: "café flo",
    stack: "React Native, Typescript, Google Gemini API, Figma",
    description:
      "A period care companion app that uses Gemini to answer questions and personalize cycle tracking.",
    image: "/assets/project-cafe-flo.png",
    imageAlt: "café flo, a period care app shown on a phone",
    imagePosition: "56% 50%",
    repoUrl: "https://github.com/y3jian/Gally",
  },
  {
    name: "Waste Tracker",
    stack: "JavaScript, HTML/CSS, C++, Arduino",
    description: "A 2nd place winning hackathon build pairing an Arduino sensor rig with a web dashboard to track waste in real time.",
    image: "/assets/project-waste-tracker.png",
    imageAlt: "Waste Tracker hackathon project",
    imagePosition: "50% 0%",
    repoUrl: "https://github.com/y3jian/WiE-Greenhouse-Hackathon",
  },
];

export const roles: Role[] = [
  {
    title: "Geospatial Data Scientist Intern",
    company: "Sparkgeo",
    companyUrl: "https://sparkgeo.com/",
    dates: "May 2026 - Aug 2026",
    description: "Built and fine-tuned an ML pipeline that turned raw satellite imagery into sea ice classification models, presented at the Canadian Space Agency's 2026 forum.",
  },
  {
    title: "Software Project Coordinator Intern",
    company: "Canadian Imperial Bank of Commerce (CIBC)",
    dates: "Sept 2025 - Dec 2025",
    description: "Built forecasting models and Power BI dashboards to track budgets and delivery risk across 38+ software projects.",
  },
  {
    title: "Automation Engineering Intern",
    company: "Canadian Imperial Bank of Commerce (CIBC)",
    dates: "Jan 2025 - Apr 2025",
    description: "Automated ETL pipelines and real-time dashboards that cut manual reporting and data processing by hundreds of hours.",
  },
  {
    title: "Research + Data Analyst Intern",
    company: "Canada Revenue Agency",
    dates: "May 2024 - Aug 2024",
    description:
      "Analyzed demographic data from 30M+ taxpayers to improve digital service conversion and inform a nationwide digital transition strategy.",
  },
];
