import { Category } from "../types/category.type";

export const categories: Category[] = [
    {
        id:1,
        category: 'Veg'
    },
    {
        id:2,
        category: 'Non-veg'
    },
    {
        id:3,
        category: 'Rottis'
    },
    {
        id:4,
        category:'Biryani',
        parent_category_id:1,
    },
    {
        id:5,
        category:'Gravy',
        parent_category_id:1,
    },
    {
        id:6,
        category:'Biryani',
        parent_category_id:2,
    },
    {
        id:7,
        category:'Gravy',
        parent_category_id:2,
    },
    {
        id:8,
        category:'Dry',
        parent_category_id:1,
    },
    {
        id:9,
        category:'Dry',
        parent_category_id:2,
    },
    {
        id:10,
        category:'Chepathi',
        parent_category_id:3,
    },
    {
        id:11,
        category:'Parota',
        parent_category_id:3,
    },
    {
        id:12,
        category:'Pulka',
        parent_category_id:3,
    },
];