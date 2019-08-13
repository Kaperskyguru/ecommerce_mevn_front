import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674'
}
Vue.use(VueSweetalert2, options);

export function successAlert() {
    Vue.swal.fire({
        type: "success",
        title: "Product added to cart",
        showConfirmButton: false,
        timer: 1500
    });
}

export function errorAlert() {
    Vue.swal.fire({
        type: "error",
        title: "Oops...",
        text: "Product already added to cart",
        timer: 1500
    });
}