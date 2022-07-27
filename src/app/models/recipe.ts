import { FlexItem, Ingredient, Tags } from "./models";

export interface Recipe {
    name: string;
    description: string;
    tags: Tags;
    ingredients: Ingredient[];
    flex: FlexItem[];
    instructions: string[];
    notes: string;
}