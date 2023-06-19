import { ObjectId } from "mongodb";
import DbConnect from "./DbConnect";

export const getProductsFromDb = async (categoryId) => {
    const db = await DbConnect();
    const productCollection = db.collection('products');
    const query = {}
    if (categoryId) {
        query.categoryId = categoryId;
    }
    return productCollection.find(query).toArray();
}

export const getProductByIdFromDb = async (id) => {
    const db = await DbConnect();
    const productCollection = db.collection('products');
    const query = { _id: new ObjectId(id) }
    return productCollection.findOne(query);
}

export const getProductsByIdsFromDb = async (ids = []) => {
    const db = await DbConnect();
    const productCollection = db.collection('products');
    const idsWithObject = ids.map((id) => new ObjectId(id));
    const query = {
        _id: { $in: idsWithObject },
    }
    return productCollection.find(query).toArray();
}