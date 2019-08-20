import Client from './Services/AxioAPIClient';
const resource = '/attributes';

export default {
    get() {
        return Client.get(`${resource}`);
    },
    find(attribute) {
        return Client.get(`${resource}/${attribute}`);
    },

}