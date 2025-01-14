import { IconProps } from "@/components/icon";

interface Skill {
  name: string;
  category: string;
  icon: IconProps["name"];
  proficiency: number;
}

export const contentSkills: Skill[] = [
  {
    name: "React",
    category: "Frontend",
    icon: "SiReact",
    proficiency: 90,
  },
  {
    name: "React Native",
    category: "Frontend",
    icon: "SiReactquery",
    proficiency: 90,
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "SiNextdotjs",
    proficiency: 100,
  },
  {
    name: "JavaScript",
    category: "Languages",
    icon: "SiJavascript",
    proficiency: 100,
  },
  {
    name: "TypeScript",
    category: "Languages",
    icon: "SiTypescript",
    proficiency: 100,
  },
  {
    name: "Vercel",
    category: "DevOps",
    icon: "SiVercel",
    proficiency: 100,
  },
  {
    name: "AWS - Amazon",
    category: "DevOps",
    icon: "SiAwsamplify",
    proficiency: 80,
  },
  {
    name: "Azure",
    category: "DevOps",
    icon: "SiAzuredevops",
    proficiency: 90,
  },
  {
    name: "GCP - Google Cloud",
    category: "DevOps",
    icon: "SiGooglecloud",
    proficiency: 90,
  },
  {
    name: "Figma",
    category: "Design",
    icon: "SiFigma",
    proficiency: 97,
  },
  {
    name: "Adobe Illustrator",
    category: "Design",
    icon: "SiAdobeillustrator",
    proficiency: 97,
  },
  {
    name: "Adobe XD",
    category: "Design",
    icon: "SiAdobexd",
    proficiency: 97,
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "SiNodedotjs",
    proficiency: 70,
  },
  {
    name: "HTML5",
    category: "Frontend",
    icon: "SiCss3",
    proficiency: 100,
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: "SiCss3",
    proficiency: 100,
  },
  {
    name: "VueJS",
    category: "Frontend",
    icon: "SiVuedotjs",
    proficiency: 90,
  },
  {
    name: "TailwindCSS",
    category: "Frontend",
    icon: "SiTailwindcss",
    proficiency: 100,
  },
  {
    name: "Material UI",
    category: "Frontend",
    icon: "SiMui",
    proficiency: 100,
  },
  {
    name: "JQuery",
    category: "Frontend",
    icon: "SiJquery",
    proficiency: 100,
  },
  {
    name: "Boostrap 4",
    category: "Frontend",
    icon: "SiBootstrap",
    proficiency: 100,
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "SiMongodb",
    proficiency: 80,
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: "SiDocker",
    proficiency: 70,
  },
  {
    name: "Terraform",
    category: "DevOps",
    icon: "SiTerraform",
    proficiency: 80,
  },
  {
    name: "Jest",
    category: "Testing",
    icon: "SiJest",
    proficiency: 90,
  },
  {
    name: "Cypress",
    category: "Testing",
    icon: "SiCypress",
    proficiency: 80,
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: "SiGithub",
    proficiency: 100,
  },
  {
    name: "Bitbucket",
    category: "Tools",
    icon: "SiBitbucket",
    proficiency: 90,
  },
  {
    name: "Jira",
    category: "Tools",
    icon: "SiJira",
    proficiency: 90,
  },
  {
    name: "Confluence",
    category: "Tools",
    icon: "SiConfluence",
    proficiency: 90,
  },
  {
    name: "Trello",
    category: "Tools",
    icon: "SiTrello",
    proficiency: 90,
  },
  {
    name: "VSCode",
    category: "Tools",
    icon: "SiVisualstudiocode",
    proficiency: 100,
  },
];
