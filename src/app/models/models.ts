// Guide
export interface IGuide {
    title: string;
    content: string;
}

// Recipe

export interface ITemperature {
    value: string;
    unit: string;
}
export interface ITags {
    quick: boolean;
    easy: boolean;
    temperature: ITemperature
    lesswash: boolean;
    cheap: boolean;
}

export interface IIngredient {
    name: string;
    amount: number;
    unit: string;
}

export interface IFlexItem {
    ingredient: string;
    substitutes: string;
}

export interface IRecipe {
    name: string;
    star: boolean;
    description: string;
    tags: ITags;
    ingredients: IIngredient[];
    flex: IFlexItem[];
    instructions: string[];
    notes: string;
}

export interface IRecipes {
    foods: IRecipe[]
    desserts: IRecipe[]
    drinks: IRecipe[]
}