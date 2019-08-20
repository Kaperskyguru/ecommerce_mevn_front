import ProductsRepository from './ProductsRepository';
import CategoriesRepository from './CategoriesRepository';
import AttributesRepository from './AttributesRepository';

const repositories = {
    'products': ProductsRepository,
    'category': CategoriesRepository,
    'attributes': AttributesRepository,
}
export default {
    get: name => repositories[name]
};