import ProductsRepository from './ProductsRepository';
import CategoriesRepository from './CategoriesRepository';
import AttributesRepository from './AttributesRepository';
import ReviewsRepository from './ReviewsRepository';

const repositories = {
    'products': ProductsRepository,
    'category': CategoriesRepository,
    'attributes': AttributesRepository,
    'reviews': ReviewsRepository,
}
export default {
    get: name => repositories[name]
};