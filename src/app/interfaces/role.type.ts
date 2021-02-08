import { Skill } from "./skill.type";

export interface Role {
    id: number;
    index: number;
    color: string;
    image_url: string;
    name: string;
    tasks: string[];
    skills: Skill[];
}