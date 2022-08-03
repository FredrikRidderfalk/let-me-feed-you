// Guide
export interface Guide {
    title: string;
    content: string;
}

// Recipe

export interface Temperature {
    value: string;
    unit: string;
}
export interface Tags {
    quick: boolean;
    easy: boolean;
    temperature: Temperature
    lesswash: boolean;
    cheap: boolean;
}

export interface Ingredient {
    name: string;
    amount: number;
    unit: string;
}

export interface FlexItem {
    ingredient: string;
    substitutes: string;
}

export interface Recipe {
    name: string;
    star: boolean;
    description: string;
    tags: Tags;
    ingredients: Ingredient[];
    flex: FlexItem[];
    instructions: string[];
    notes: string;
}

export interface Recipes {
    foods: Recipe[]
    desserts: Recipe[]
    drinks: Recipe[]
}