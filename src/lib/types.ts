export interface PortfolioItem {
    id: string
    title: string
    description: string
    image: string
    link: string
    tags: string[]
    longDescription?: string
    features?: string[]
    technologies?: string[]
}

export interface CommunityItem {
    id: string
    title: string
    description: string
    image: string
    link: string
    tags: string[]
    longDescription?: string
    features?: string[]
    technologies?: string[]
}

export type Language = "pt" | "en" | "es";

export type Translations = {
    [key: string]: {
        [key: string]: string;
    };
};
export type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
};