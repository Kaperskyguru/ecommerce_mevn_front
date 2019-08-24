import Client from './Services/AxioAPIClient';
const resource = '/reviews';

export default {
    get() {
        return Client.get(`${resource}`);
    },
    find(id) {
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
    getReviewsByProductId(id) {
        return Client.get(`${resource}/product/${id}`);
    },
    getReviewsByCustomerId(id) {
        return Client.get(`${resource}/customer/${id}`)
    }
};