import { getProductByIdFromDb } from '@/services/productServices';
import {cache} from 'react'
import 'server-only';

const getSingleProduct = cache(getProductByIdFromDb)

export default getSingleProduct;