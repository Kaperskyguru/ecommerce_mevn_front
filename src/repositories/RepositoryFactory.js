import ProductsRepository from './ProductsRepository';
import CategoriesRepository from './CategoriesRepository';
import AttributesRepository from './AttributesRepository';
import ReviewsRepository from './ReviewsRepository';
import OrdersRepository from './OrdersRepository';
import CustomersRepository from './CustomersRepository';
import TestRepository from "./TestRepository";

const repositories = {
    'products': ProductsRepository,
    'category': CategoriesRepository,
    'attributes': AttributesRepository,
    'reviews': ReviewsRepository,
    'orders': OrdersRepository,
    'customers': CustomersRepository,
    'test': TestRepository,
}
export default {
    get: name => repositories[name]
};