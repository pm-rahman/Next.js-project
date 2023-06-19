import { getCategoriesFromDb } from "@/services/categoriesServices";
import { cache } from 'react';
import 'server-only';
const getCategories = cache(() => {
    return getCategoriesFromDb();
})

export default getCategories;