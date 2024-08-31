import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
// import router from '@/router'
// import { applyToken } from '@/service/AuthenticatedUser.js'
// import { useCookies } from 'vue3-cookies'
// const { cookies } = useCookies()

const apiURL = 'https://dune-clay-studio.onrender.com/'

export default createStore({
  state: {
    products: null,
    users: null
  },
  getters: {
    getProducts(state) {
      return state.products
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setUsers(state, users) {
      state.users = users
    }
  },
  actions: {


    async fetchUsers(context) {
      try {
        const users = await (await axios.get(`${apiURL}users`)).data
        if (users) {
          console.log('there are results');
          
          context.commit('setUsers', users.results)
        } else {
          toast.error(`${users}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchUser(context, id) {
      try {
        const { result, msg } = await (await axios.get(`${apiURL}user/${id}`)).data
        if (result) {
          context.commit('setUser', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async register(context, payload) {
      try {
        const { token } = await (await axios.post(`${apiURL}users/register`, payload)).data
        if (token) {
          context.dispatch('fetchUsers')
          toast.success(`Well  Done`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        } else {
          toast.error(`ena ooops`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async updateUser(context, payload) {
      try {
        const data = await (await axios.patch(`${apiURL}users/${payload.id}`, payload.load)).data
        if (data) {
          context.dispatch('fetchUsers')
        } else {
          toast.error(`ena ooops`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },

    async deleteUser(context, id) {      
      try {
        const data = await (await axios.delete(`${apiURL}users/${id}`)).data

        console.log(data);
        
        if (data) {
          context.dispatch('fetchUsers')
        } else {
          toast.error(`ena ooops`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },

    // ==== Product =====
    async fetchProducts(context) {
      try {
        const { data } = await (await axios.get(`${apiURL}products`)).data
        if (data) {
          context.commit('setProducts', data)
        } else {
          console.log('oopsie');
          
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }

    },
    async recentProducts(context) {
      try {
        const { results, msg } = await (await axios.get(`${apiURL}product/recent`)).data
        if (results) {
          context.commit('setRecentProducts', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchProduct(context, id) {
      try {
        const { result, msg } = await (await axios.get(`${apiURL}product/${id}`)).data
        if (result) {
          context.commit('setProduct', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async addAProduct(context, payload) {
      try {
        const data = await (await axios.post(`${apiURL}products/add`, payload)).data
        console.log('here' , data);
        if (data) {
          context.dispatch('fetchProducts')
          toast.success(`${data}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async updateProduct(context, data) {

      console.log(data);
      
      try {
        const responce = await (await axios.patch(`${apiURL}products/${data.id}`, data.load)).data
        if (responce) {
          context.dispatch('fetchProducts')
          toast.success(`${responce}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async deleteProduct(context, id) {
      try {
        console.log('there');
        
        const data = await (await axios.delete(`${apiURL}products/${id}`)).data
        console.log(data);
        
        if (data) {
          console.log('there');
          
          context.dispatch('fetchProducts')
          toast.success(`${data}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    }

    
  }
})