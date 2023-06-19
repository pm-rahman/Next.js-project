import { getProductsFromDb } from '@/services/productServices';
import {cache} from 'react'
import 'server-only';

const getProducts = cache(getProductsFromDb)

export default getProducts;