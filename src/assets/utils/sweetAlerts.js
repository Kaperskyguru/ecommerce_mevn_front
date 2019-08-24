import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674'
}
Vue.use(VueSweetalert2, options);

export function successAlert({
    title = 'success',
    message = 'product added to cart'
}) {
    Vue.swal.fire({
        type: title,
        title: message,
        showConfirmButton: false,
        timer: 1500
    });
}

export function errorAlert({
    message = 'Product already added to cart'
}) {
    Vue.swal.fire({
        type: "error",
        title: 'Oops...',
        text: message,
        timer: 1500
    });
}