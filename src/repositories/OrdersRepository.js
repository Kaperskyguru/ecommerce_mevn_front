import Client from './Services/AxioAPIClient';
const resource = '/orders';

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
    createItem(payload) {
        return Client.post(`${resource}/items`, payload);
    },
    update(payload, id) {
        return Client.put(`${resource}/${id}`, payload);
    },
    delete(id) {
        return Client.delete(`${resource}/${id}`)
    },
};