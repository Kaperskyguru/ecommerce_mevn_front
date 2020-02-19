<template>
  <!-- SECTION -->
  <div class="section">
    <!-- container -->
    <div class="container">
      <!-- row -->
      <div class="row">
        <div class="col-md-7">
          <!-- Billing Details -->
          <div class="billing-details">
            <div class="section-title">
              <h3 class="title">Billing address</h3>
            </div>
            <ValidationObserver ref="observer" v-slot="{ invalid }">
              <!-- <form> -->
              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                key="Full name"
                name="name"
                persist
              >
                <div class="form-group">
                  <input
                    class="input"
                    v-model="customer.name"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                  />
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>

              <ValidationProvider
                rules="required|email"
                v-slot="{ errors }"
                key="Email"
                name="email"
                persist
              >
                <div class="form-group">
                  <input
                    class="input"
                    v-model="customer.email"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>

              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                key="Address"
                name="address"
                persist
              >
                <div class="form-group">
                  <input
                    class="input"
                    v-model="customer.address_1"
                    type="text"
                    name="address"
                    placeholder="Address"
                  />

                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                key="City"
                name="city"
                persist
              >
                <div class="form-group">
                  <input
                    class="input"
                    v-model="customer.city"
                    type="text"
                    name="city"
                    placeholder="City"
                  />

                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>

              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                key="Country"
                name="country"
                persist
              >
                <div class="form-group">
                  <input
                    class="input"
                    v-model="customer.country"
                    type="text"
                    name="country"
                    placeholder="Country"
                  />
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>

              <div class="form-group">
                <input
                  class="input"
                  v-model="customer.postal_code"
                  type="text"
                  name="postal_code"
                  placeholder="Postal Code"
                />
              </div>

              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                key="Region"
                name="Region"
                persist
              >
                <div class="form-group">
                  <select
                    class="input"
                    v-model="customer.shipping_region_id"
                    type="text"
                    name="region"
                  >
                    <option value="1" selected="selected" disabled
                      >Please Select</option
                    >
                    <option value="2">US/Canada</option>
                    <option value="3">Europe</option>
                    <option value="4">Rest of World</option>
                  </select>
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>

              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                key="Telephone"
                name="tel"
                persist
              >
                <div class="form-group">
                  <input
                    class="input"
                    v-model="customer.mob_phone"
                    type="tel"
                    name="tel"
                    placeholder="Telephone"
                  />
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
              <div class="form-group">
                <div class="input-checkbox">
                  <input
                    v-model="customer.shouldCreateAccount"
                    type="checkbox"
                    id="create-account"
                  />
                  <label for="create-account">
                    <span></span>
                    Create Account?
                  </label>

                  <div class="caption">
                    <ValidationProvider
                      rules="required"
                      v-slot="{ errors }"
                      key="Password"
                      name="password"
                      persist
                      v-if="customer.shouldCreateAccount"
                    >
                      <input
                        class="input"
                        v-model="customer.password"
                        type="password"
                        name="password"
                        placeholder="Enter Your Password"
                      />
                    </ValidationProvider>
                  </div>
                </div>
              </div>
              <!-- </form> -->
            </ValidationObserver>
          </div>
          <!-- /Billing Details -->

          <!-- Shiping Details -->
          <div class="shiping-details">
            <div class="section-title">
              <h3 class="title">Shiping address</h3>
            </div>
            <div class="input-checkbox">
              <input type="checkbox" id="shiping-address" />
              <label for="shiping-address">
                <span></span>
                Ship to a diffrent address?
              </label>
              <div class="caption">
                <div class="form-group">
                  <input
                    class="input"
                    type="text"
                    required
                    name="first-name"
                    placeholder="First Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    class="input"
                    v-model="shippingAddress.lastname"
                    type="text"
                    name="last-name"
                    placeholder="Last Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    class="input"
                    v-model="shippingAddress.email"
                    type="email"
                    required
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    class="input"
                    v-model="shippingAddress.address"
                    type="text"
                    required
                    name="address"
                    placeholder="Address"
                  />
                </div>
                <div class="form-group">
                  <input
                    class="input"
                    v-model="shippingAddress.city"
                    type="text"
                    name="zipcity"
                    placeholder="City"
                  />
                </div>
                <div class="form-group">
                  <input
                    class="input"
                    v-model="shippingAddress.country"
                    type="text"
                    required
                    name="country"
                    placeholder="Country"
                  />
                </div>
                <div class="form-group">
                  <input
                    class="input"
                    v-model="shippingAddress.zipcode"
                    type="text"
                    name="zip-code"
                    placeholder="ZIP Code"
                  />
                </div>
                <div class="form-group">
                  <input
                    class="input"
                    v-model="shippingAddress.tel"
                    type="tel"
                    required
                    name="tel"
                    placeholder="Telephone"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- /Shiping Details -->

          <!-- Order notes -->
          <div class="order-notes">
            <textarea
              v-model="customer.notes"
              class="input"
              placeholder="Order Notes"
            ></textarea>
          </div>
          <!-- /Order notes -->
        </div>

        <!-- Order Details -->
        <div class="col-md-5 order-details">
          <div class="section-title text-center">
            <h3 class="title">Your Order</h3>
          </div>
          <div class="order-summary">
            <div class="order-col">
              <div>
                <strong>PRODUCT</strong>
              </div>
              <div>
                <strong>QUANTITY</strong>
              </div>
              <div>
                <strong>TOTAL</strong>
              </div>
            </div>
            <div class="order-products">
              <span v-for="(product, i) in carts" :key="i">
                <div class="order-col">
                  <div>{{ product.name }}</div>

                  <div class="qty-label">
                    <div class="input-number">
                      <input type="number" v-model="product.quantity" />
                      <span class="qty-up">+</span>
                      <span class="qty-down">-</span>
                    </div>
                  </div>

                  <div>
                    ${{ product.quantity * product.realPrice }}
                    <!-- <input type="hidden" v-model="product.total" /> -->
                  </div>
                </div>
              </span>
            </div>
            <div class="order-col">
              <div>Shiping</div>
              <div>
                <strong>FREE</strong>
              </div>
            </div>
            <div class="order-col">
              <div>
                <strong>TOTAL</strong>
              </div>
              <div>
                <strong class="order-total">${{ price }}</strong>
              </div>
            </div>
          </div>
          <div class="payment-method">
            <div class="input-radio">
              <input type="radio" name="payment" id="payment-1" />
              <label for="payment-1">
                <span></span>
                Direct Bank Transfer
              </label>
              <div class="caption">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div class="input-radio">
              <input type="radio" name="payment" id="payment-2" />
              <label for="payment-2">
                <span></span>
                Cheque Payment
              </label>
              <div class="caption">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div class="input-radio">
              <input type="radio" name="payment" id="payment-3" />
              <label for="payment-3">
                <span></span>
                Paypal System
              </label>
              <div class="caption">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div class="input-checkbox">
            <input type="checkbox" id="terms" />
            <label for="terms">
              <span></span>
              I've read and accept the
              <a href="#">terms & conditions</a>
            </label>
          </div>
          <button v-on:click="createOrders()" class="primary-btn order-submit">
            Place order
          </button>
        </div>
        <!-- /Order Details -->
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->
  </div>
  <!-- /SECTION -->
</template>

<script>
import Repository from "../repositories/RepositoryFactory";
const OrdersRepository = Repository.get("orders");
const CustomersRepository = Repository.get("customers");
import { mapState } from "vuex";
import { errorAlert, successAlert } from "../assets/utils/sweetAlerts";
export default {
  data() {
    return {
      customer: {},
      order: {},
      shippingAddress: {},
      items: {},
      orderId: 0,
      shippingId: 0,
      customerId: 0,
      errors: {},

      price: this.$cart.getTotalPrice()
    };
  },

  computed: {
    Price: () => {
      return this.cart.realPrice;
    },
    total: () => {
      return this.product.quantity * this.product.realPrice;
    },
    ...mapState(["carts"])
  },
  created() {},
  methods: {
    totalPrice() {
      return this.$cart.getTotalPrice();
    },

    createAccounts() {
      if (this.customer.shouldCreateAccount) {
        this.customerId = this.createCustomerAccount(this.customer);
      }
      if (this.customer.shipToDifferentAddress) {
        this.shippingId = this.createDifferentShippingAddress(
          this.shippingAddress
        );
      }
      this.createBillingAddress(this.customer);
    },

    async createCustomerAccount() {
      this.customer.credit_card = "";
      this.customer.address_2 = "";
      this.customer.region = "";
      this.customer.shipping_region_id = 1;
      this.customer.day_phone = "";
      this.customer.eve_phone = "";
      if (!this.customer.shouldCreateAccount) {
        this.customer.password = "";
      }
      //Validation
      const { data } = await CustomersRepository.create(this.customer);

      return data.insertId;
    },
    createBillingAddress() {
      // Create Billing Address
    },
    createDifferentShippingAddress() {
      // Create Different Shipping Address
    },
    /* eslint-disable */
    async createOrders() {
      // evt.preventDefault();
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        return;
      }
      const customer = await this.createCustomerAccount();

      // alert(customerId);
      if (customer != 0) {
        // && this.shippingId != 0) {
        this.order.total_amount = this.totalPrice();
        this.order.customer_id = customer;
        this.order.shipping_id = this.shippingId | null;
        this.order.comments = this.customer.notes | null;
        this.order.shipped_on = new Date()
          .toISOString()
          .slice(0, 19)
          .replace("T", " ");
        this.order.status = 1;
        this.order.auth_code = "auth_" + Math.random().toString();
        this.order.reference = "ref_" + Math.random().toString();
        this.order.tax_id = 1;
        this.order.items = this.carts;

        const { data } = await OrdersRepository.create(this.order);
        if (data.insertId != 0) {
          successAlert({
            title: "success",
            message: "Order successfully placed"
          });
        }
      }
    },

    createItems() {
      if (this.orderId != 0) {
        this.items.carts = this.carts;
        this.items.order_id = this.orderId;
        OrdersRepository.createItem(this.items);
      }
    },

    validate(data) {
      let error = [];
      for (const key in data) {
        if (!data.hasOwnProperty(key)) {
          continue; // skip keys like "setItem", "getItem" etc
        }

        if (data[key] == "" || data[key] == null || data[key] == undefined) {
          this.error[key] = `${key} can not be empty`;
        }
      }
      console.log(error);

      return error;
    }
  }
};
</script>
<style scoped>
.qty-label {
  padding: 20px;
}

.order-col {
  display: flex !important;
  flex-direction: row;
  align-content: space-between;
}

.invalid-feedback {
  color: red;
  font-style: italic;
  margin: 0px !important;
  padding: 0px !important;
}
</style>