<template>
    <div class="container-fluid">
        <h2>welcome to our Admin</h2>
        <div class="row">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col" colspan="3">User</th>
                  <th scope="col" colspan="3">User Name</th>
                  <th scope="col" >User Role</th>
                  <th scope="col" >User Email</th>
                  <th scope="col" >Password</th>
                  <th scope="col" colspan="2">Management</th>
  
                </tr>
              </thead>
              <tbody table>

                <tr v-for="(user, index) in users" :key="index">
                    <td colspan="3"> <img :src="user.userProfile"  :alt="user.productName" loading="lazy" style="width: 6rem;"> </td>
                    <td colspan="3">{{ user.firstName }} {{ user.lastName }}</td>
                    <td>{{ user.userRole }}</td>
                    <td>{{ user.emailAdd }}</td>
                    <td>{{ user.userPass }}</td>
                    <td>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-success mb-3" @click="updateUID(user)" data-bs-toggle="modal" data-bs-target="#exampleModalLong" style="width: 5rem;">
                        Edit
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form class="form" @submit.prevent="register">
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="First name" v-model="payload.firstName"
                                            required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="last name" v-model="payload.lastName"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="number" placeholder="Age" v-model="payload.userAge" required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="Gender" placeholder="Gender" v-model="payload.Gender"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="userRole" placeholder="userRole" v-model="payload.userRole"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="email" placeholder="Email address" v-model="payload.emailAdd"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="password" placeholder="Password" v-model="payload.userPass"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="url" placeholder="Profile link" v-model="payload.userProfile"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper d-md-flex d-block justify-content-between">
                                        <button type="button" @click="updateUser()" class="btn btn-success">Submit</button>
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>

                        <br> 

                        <button style="width: 5rem;" type="button" @click="userDelete(user.userID)" class="btn btn-warning" :id="user.userID" deleteProduct >Delete</button>  
                    </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                    <td>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    ADD User
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
                        </div>
                        <div class="modal-body">
                            <form class="form">
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="First name" v-model="payload.firstName"
                                            required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="last name" v-model="payload.lastName"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="number" placeholder="Age" v-model="payload.userAge" required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="Gender" placeholder="Gender" v-model="payload.Gender"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="userRole" placeholder="userRole" v-model="payload.userRole"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="email" placeholder="Email address" v-model="payload.emailAdd"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="password" placeholder="Password" v-model="payload.userPass"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="url" placeholder="Profile link" v-model="payload.userProfile"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper d-md-flex d-block justify-content-between">
                                        <button type="button" @click="register" class="btn btn-success">Submit</button>
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </form>
                        </div>
                        </div>
                    </div>
                    </div>
                  </td>
                  <td colspan="8" class="hidden-xs"></td>
                  <td><a href="#" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>
                </tr>
              </tfoot>
            </table>

            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col" colspan="3">Product</th>
                  <th scope="col" colspan="3">Product Name</th>
                  <th scope="col" >Product Description</th>
                  <th scope="col" >Quantity</th>
                  <th scope="col" >amount</th>
                  <th scope="col" >Catergory</th>
                  <th scope="col" colspan="2">Management</th>
  
                </tr>
              </thead>
              <tbody table>

                <tr v-for="(prod, index) in products" :key="index">
                    <td colspan="3"> <img :src="prod.prodURL"  :alt="prod.prodName" loading="lazy" style="width: 6rem;"> </td>
                    <td colspan="3">{{ prod.prodName }} </td>
                    <td>{{ prod.prodDesc }}</td>
                    <td>{{ prod.quantity }}</td>
                    <td>{{ prod.amount }}</td>
                    <td>{{ prod.catergory }}</td>
                    <td>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-success mb-3" @click="updateID(prod)" data-bs-toggle="modal" data-bs-target="#editProd" style="width: 5rem;">
                        Edit
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="editProd" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            </div>
                            <div class="modal-body">
                                <form class="form">
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Product name" v-model="prodPayload.prodName"
                                            required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Product Desc" v-model="prodPayload.prodDesc"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="number" placeholder="Quantity" v-model="prodPayload.quantity" required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="number" placeholder="amount" v-model="prodPayload.amount"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="catergory" v-model="prodPayload.catergory"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Product Url" v-model="prodPayload.prodURL"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper d-md-flex d-block justify-content-between">
                                        <button type="button" @click="updateProd()" class="btn btn-success">Submit</button>
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>

                        <br> 

                        <button style="width: 5rem;" type="button" @click="prodDelete(prod.prodID)" class="btn btn-warning" :id="prod.prodID" deleteProduct >Delete</button>  
                    </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProd">
                    ADD PRODUCT
                    </button>


                    <!-- Modal -->
                    <div class="modal fade" id="addProd" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
                        </div>
                        <div class="modal-body">
                            <form class="form" >
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Product name" v-model="prodPayload.prodName"
                                            required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Product Desc" v-model="prodPayload.prodDesc"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="number" placeholder="Quantity" v-model="prodPayload.quantity" required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="number" placeholder="amount" v-model="prodPayload.amount"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="catergory" v-model="prodPayload.catergory"
                                                required />
                                        </span>
                                    </div>

                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="Product Url" v-model="prodPayload.prodURL"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper d-md-flex d-block justify-content-between">
                                        <button type="submit" @click.prevent="addProd" class="btn btn-success">Submit</button>
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                  </td>
                  <td colspan="10" class="hidden-xs"></td>
                </tr>
              </tfoot>
            </table>
        </div>
    </div>

</template>
<script setup>
import { computed, onMounted } from 'vue'
import { ref } from 'vue';
// import { useStore } from 'vuex';

import store from '@/store';
// const store = useStore()
let payload = ref({
    firstName: '',
    lastName: '',
    userAge: 0,
    Gender: '',
    userRole: '',
    emailAdd: '',
    userPass: '',
    userProfile: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png'
})

let prodPayload = ref({
      prodName: "",
      prodDesc: "",
      quantity: 0,
      amount: 0,
      catergory: "",
      prodURL: ""
})



// const prodPayload = null;

function register() {
    console.log(payload);
    store.dispatch('register', payload.value)
}

function addProd() {
    console.log(prodPayload.value);
    store.dispatch('addAProduct', prodPayload.value)
}

function userDelete(id) {
    console.log(id);
    store.dispatch('deleteUser', id)
}

let uID
function updateUID(user) {
    payload.value.firstName = user.firstName
    payload.value.lastName = user.lastName
    payload.value.emailAdd = user.emailAdd
    payload.value.Gender = user.Gender
    payload.value.userPass = user.userPass
    payload.value.userRole = user.userRole
    payload.value.userProfile = user.userProfile
    payload.value.userAge = user.userAge

    console.log(user);
    
    uID = user.userID
}

function updateUser() {
    
const data = {
    id : uID,
    load : payload.value
}

console.log(data);


store.dispatch('updateUser', data)
}


let pID
function updateID(prod) {
    prodPayload.value.prodName = prod.prodName
    prodPayload.value.amount = prod.amount
    prodPayload.value.prodDesc = prod.prodDesc
    prodPayload.value.catergory = prod.catergory
    prodPayload.value.quantity = prod.quantity
    prodPayload.value.prodURL = prod.prodURL
    pID = prod.prodID
}

function updateProd() {

    const data = {
        id : pID,
        load : prodPayload.value
    }

    console.log(data);
    
    
    store.dispatch('updateProduct', data)
}
function prodDelete(id) {
    console.log(id);
    store.dispatch('deleteProduct', id)
    
}

const users = computed(
    () => store.state.users
)

const products = computed(
    () => store.state.products
)
onMounted(() => {
    store.dispatch('fetchUsers')
    store.dispatch('fetchProducts')
}) 

</script>

<style scoped>
.btn{
   background-color:  burlywood;
}
</style>