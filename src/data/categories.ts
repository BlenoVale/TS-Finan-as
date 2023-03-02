import { Category } from "../types/Category";

export const categories: Category = {
    food: { title: 'Alimentação', color: 'blue', expense: true },
    rent: { title: 'Aluguel', color: 'brown', expense: true },
    salary: { title: 'Salário', color: 'green', expense: false },
}

export const categoryList: Array<{category: string, PTcategory: string}> =[
    {category: 'food', PTcategory: 'Alimentação'},
    {category: 'rent', PTcategory: 'Aluguel'},
    {category: 'salary',PTcategory: 'Salário'},
];