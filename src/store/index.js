import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { applyToken } from '@/service/AuthenticatedUser.js'


const apiURL = 'https://dune-clay-studio.onrender.com/'

console.log(toast, apiURL, applyToken);

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    recentProducts: null,
    product: null
  },

  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setRecentProduct(state, value) {
      state.recentProducts = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
  },

  actions: {
    async fetchRecentProducts(context) {
      try {
        const { data, msg } = (await axios.get(`${apiURL}products/Recent`)).data;
        if (data) {
          context.commit('setRecentProduct', data);
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchProduct(context, id) {
      try {
        const { result, msg } = await (await axios.get(`${apiURL}/products/${id}`)).data;
        if (result) {
          context.commit('setProduct', result);
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchProducts(context) {
      try {
        const { data, msg } = (await axios.get(`${apiURL}products`)).data;
        if (data) {
          context.commit('setProducts', data);
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      } catch (error) {
        console.error(error);
      }
    },

    async addProduct(context, product) {
      try {
        const { data, msg } = (await axios.post(`${apiURL}products/add`, product)).data;
        if (data) {
          context.dispatch('fetchProducts');
          toast.success('Product added successfully', { autoClose: 2000 });
        } else {
          toast.error(`${msg}`, { autoClose: 2000 });
        }
      } catch (error) {
        console.error(error);
      }
    },

    async updateProduct(context, product) {
      try {
        const { data, msg } = (await axios.patch(`${apiURL}products/${product.id}`, product)).data;
        if (data) {
          context.dispatch('fetchProducts');
          toast.success('Product updated successfully', { autoClose: 2000 });
        } else {
          toast.error(`${msg}`, { autoClose: 2000 });
        }
      } catch (error) {
        console.error(error);
      }
    },

    async deleteProduct(context, id) {
      try {
        const { data, msg } = (await axios.delete(`${apiURL}products/${id}`)).data;
        if (data) {
          context.dispatch('fetchProducts');
          toast.success('Product deleted successfully', { autoClose: 2000 });
        } else {
          toast.error(`${msg}`, { autoClose: 2000 });
        }
      } catch (error) {
        console.error(error);
      }
    },
  },

  modules: {
  }
})
