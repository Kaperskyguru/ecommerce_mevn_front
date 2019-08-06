import ProductsRepository from './ProductsRepository';
import CategoriesRepository from './CategoriesRepository';

const repositories = {
    'products': ProductsRepository,
    'category': CategoriesRepository,
}
export default {
    get: name => repositories[name]
};