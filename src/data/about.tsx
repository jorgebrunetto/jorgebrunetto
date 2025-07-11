import { IconType } from "react-icons";
import {
  TbBrandAdobe,
  TbBrandAws,
  TbBrandAzure,
  TbBrandBitbucket,
  TbBrandBootstrap,
  TbBrandCss3,
  TbBrandCypress,
  TbBrandDocker,
  TbBrandGithub,
  TbBrandGithubCopilot,
  TbBrandGoogle,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandOpenai,
  TbBrandPhp,
  TbBrandPolymer,
  TbBrandPython,
  TbBrandReact,
  TbBrandReactNative,
  TbBrandTailwind,
  TbBrandTerraform,
  TbBrandTrello,
  TbBrandTypescript,
  TbBrandVercel,
  TbBrandVisualStudio,
  TbBrandVue,
  TbFlask,
  TbTools,
  TbVector,
} from "react-icons/tb";
interface Skill {
  name: string;
  category: string;
  icon: IconType;
  proficiency: number;
}

export const contentSkills: Skill[] = [
  {
    name: "React",
    category: "Frontend",
    icon: TbBrandReact,
    proficiency: 90,
  },
  {
    name: "React Native",
    category: "Frontend",
    icon: TbBrandReactNative,
    proficiency: 90,
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: TbBrandNextjs,
    proficiency: 100,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: TbBrandJavascript,
    proficiency: 100,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: TbBrandTypescript,
    proficiency: 95,
  },
  {
    name: "Vercel",
    category: "DevOps",
    icon: TbBrandVercel,
    proficiency: 100,
  },
  {
    name: "AWS - Amazon",
    category: "DevOps",
    icon: TbBrandAws,
    proficiency: 80,
  },
  {
    name: "Azure",
    category: "DevOps",
    icon: TbBrandAzure,
    proficiency: 90,
  },
  {
    name: "GCP - Google Cloud",
    category: "DevOps",
    icon: TbBrandGoogle,
    proficiency: 90,
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: TbBrandDocker,
    proficiency: 70,
  },
  {
    name: "Terraform",
    category: "DevOps",
    icon: TbBrandTerraform,
    proficiency: 80,
  },
  {
    name: "Figma",
    category: "Design",
    icon: TbVector,
    proficiency: 100,
  },
  {
    name: "Adobe Illustrator",
    category: "Design",
    icon: TbBrandAdobe,
    proficiency: 80,
  },
  {
    name: "Adobe XD",
    category: "Design",
    icon: TbBrandAdobe,
    proficiency: 90,
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: TbBrandNodejs,
    proficiency: 70,
  },
  {
    name: "PHP",
    category: "Backend",
    icon: TbBrandPhp,
    proficiency: 60,
  },
  {
    name: "Phyton",
    category: "Backend",
    icon: TbBrandPython,
    proficiency: 70,
  },
  {
    name: "HTML5",
    category: "Frontend",
    icon: TbBrandHtml5,
    proficiency: 100,
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: TbBrandCss3,
    proficiency: 100,
  },
  {
    name: "VueJS",
    category: "Frontend",
    icon: TbBrandVue,
    proficiency: 90,
  },
  {
    name: "TailwindCSS",
    category: "Frontend",
    icon: TbBrandTailwind,
    proficiency: 100,
  },
  {
    name: "Material UI",
    category: "Frontend",
    icon: TbBrandPolymer,
    proficiency: 100,
  },
  {
    name: "JQuery",
    category: "Frontend",
    icon: TbBrandJavascript,
    proficiency: 100,
  },
  {
    name: "Boostrap 4",
    category: "Frontend",
    icon: TbBrandBootstrap,
    proficiency: 100,
  },

  {
    name: "Jest",
    category: "Testing",
    icon: TbFlask,
    proficiency: 90,
  },
  {
    name: "Cypress",
    category: "Testing",
    icon: TbBrandCypress,
    proficiency: 80,
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: TbBrandGithub,
    proficiency: 100,
  },
  {
    name: "Bitbucket",
    category: "Tools",
    icon: TbBrandBitbucket,
    proficiency: 90,
  },
  {
    name: "Trello",
    category: "Tools",
    icon: TbBrandTrello,
    proficiency: 90,
  },
  {
    name: "VSCode",
    category: "Tools",
    icon: TbBrandVisualStudio,
    proficiency: 100,
  },
  {
    name: "Confluence",
    category: "Tools",
    icon: TbTools, // substituto mais próximo visualmente
    proficiency: 90,
  },
  {
    name: "Jira",
    category: "Tools",
    icon: TbTools, // idem acima, só por consistência de lib
    proficiency: 90,
  },
  {
    name: "ChatGPT",
    category: "IA",
    icon: TbBrandOpenai, // idem acima, só por consistência de lib
    proficiency: 100,
  },
  {
    name: "Git Compilot",
    category: "IA",
    icon: TbBrandGithubCopilot, // idem acima, só por consistência de lib
    proficiency: 100,
  },
  {
    name: "V0",
    category: "IA",
    icon: TbBrandVercel, // idem acima, só por consistência de lib
    proficiency: 100,
  },
];
