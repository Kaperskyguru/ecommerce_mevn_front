import Client from './Services/AxioAPIClient';
const resource = '/products';

export default {
    get() {
        return Client.get(`${resource}`);
    },
    getProduct(id) {
        return Client.get(`${resource}/${id}`);
    },
    create(payload) {
        return Client.post(`${resource}`, payload);
    },
    update(payload, id) {
        return Client.put(`${resource}/${id}`, payload);
    },
    delete(id) {
        return Client.delete(`${resource}/${id}`)
    },
    getProductsByCategory(id) {
        return Client.get(`${resource}/category/${id}`);
    },
    getProductCategories() {
        return Client.get(`productcategories`)
    }
};