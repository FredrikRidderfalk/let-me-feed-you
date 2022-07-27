export interface Guide {
    title: string;
    content: string;
}

export interface Tags {
    quick: boolean;
    easy: boolean;
    temperature: {
        value: string;
        unit: string;
    };
    lesswash: boolean;
    cheap: boolean;
}

export interface Temperature {
    value: string;
    unit: string;
}

export interface Ingredient {
    name: string;
    amount: number;
    unit: string;
}

export interface FlexItem {
    ingredient: string;
    substitute: string;
}
