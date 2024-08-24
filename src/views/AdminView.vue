<template>
  <div class="container-fluid">
    <img src="https://kiara-adams.github.io/images/90f27621-5a83-4585-9840-699c06a117e0.png" alt="Admin Dashboard" class="header-image">

      <h2 class="adminn">welcome to our Admin</h2>
      <div class="row">
          <table class="table table-hover ">
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
                  <td colspan="3"> <img :src="user.userProfile"  alt="${element.productName}" loading="lazy" style="width: 6rem;"> </td>
                  <td colspan="3">{{ user.firstName }} {{ user.lastName }}</td>
                  <td>{{ user.userRole }}</td>
                  <td>{{ user.emailAdd }}</td>
                  <td>{{ user.userPass }}</td>
                  <td>
                      <!-- Button trigger modal -->
                      <button type="button" class="btn btn-success mb-3" data-bs-toggle="modal" data-bs-target="#exampleModalLong" style="width: 5rem;">
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
                                      <button type="submit" class="btn btn-success">Submit</button>
                                      <button type="reset" class="btn btn-dark">Reset</button>
                                  </div>
                              </form>
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-primary">Save changes</button>
                          </div>
                          </div>
                      </div>
                      </div>

                      <br> 

                      <button style="width: 5rem;" type="button" @click="userDelete(user.userID)" class="btn btn-danger" :id="user.userID" deleteProduct ><i class="fa fa-angle-left"></i> Delete</button>  
                  </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td><a href="#" class="btn btn-warning" addNewProduct><i class="fa fa-angle-left"></i>Add New Product</a></td>
                <td colspan="8" class="hidden-xs"></td>
                <td><a href="#" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>
              </tr>
            </tfoot>
          </table>

          <table class="table table-hover ">
            <thead>
              <tr>
                <th scope="col" colspan="3">Product</th>
                <th scope="col" colspan="3">Product Name</th>
                <th scope="col" >Product Description</th>
                <th scope="col" >Quantity</th>
                <th scope="col" >amount</th>
                <th scope="col" >Category</th>
                <th scope="col" colspan="2">Management</th>

              </tr>
            </thead>
            <tbody table>

              <tr v-for="(prod, index) in products" :key="index">
                  <td colspan="3"> <img :src="prod.prodUrl"  alt="${element.productName}" loading="lazy" style="width: 6rem;"> </td>
                  <td colspan="3">{{ prod.prodName }} </td>
                  <td>{{ prod.prodDescription }}</td>
                  <td>{{ prod.quantity }}</td>
                  <td>{{ prod.amount }}</td>
                  <td>{{ prod.Category }}</td>
                  <td>
                      <!-- Button trigger modal -->
                      <button type="button" class="btn btn-danger mb-3" @click="editProd(prod)" data-bs-toggle="modal" data-bs-target="#editProd" style="width: 5rem;">
                      Edit
                      </button>

                      <!-- Modal -->
                      <div class="modal fade" id="editProd" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                          <div class="modal-content">
                          <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                              </button>
                          </div>
                          <div class="modal-body">
                              <form class="form" @submit.prevent="">
                                  <div class="form-control-wrapper">
                                      <span>
                                          <input class="form-control" type="text" placeholder="Product name" v-model="prodPayload.prodName"
                                          required />
                                      </span>
                                  </div>

                                  <div class="form-control-wrapper">
                                      <span>
                                          <input class="form-control" type="text" placeholder="Product Desc" v-model="prodPayload.prodDescription"
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
                                          <input class="form-control" type="text" placeholder="Category" v-model="prodPayload.Category"
                                              required />
                                      </span>
                                  </div>

                                  <div class="form-control-wrapper">
                                      <span>
                                          <input class="form-control" type="text" placeholder="Product Url" v-model="prodPayload.prodUrl"
                                              required />
                                      </span>
                                  </div>
                                  <div class="form-control-wrapper d-md-flex d-block justify-content-between">
                                      <button type="submit" class="btn btn-success">Submit</button>
                                      <button type="reset" class="btn btn">Reset</button>
                                  </div>
                              </form>
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-primary">Save changes</button>
                          </div>
                          </div>
                      </div>
                      </div>

                      <br> 

                      <button style="width: 5rem;" type="button" @click="prodDelete(prod.prodID)" class="btn btn-danger" :id="prod.prodID" deleteProduct ><i class="fa fa-angle-left"></i> Delete</button>  
                  </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <!-- Button trigger modal -->
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  ADD PRODUCT
                  </button>

                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                      <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div class="modal-body">
                          <form class="form" @submit.prevent="addProd">
                                  <div class="form-control-wrapper">
                                      <span>
                                          <input class="form-control" type="text" placeholder="Product name" v-model="prodPayload.prodName"
                                          required />
                                      </span>
                                  </div>

                                  <div class="form-control-wrapper">
                                      <span>
                                          <input class="form-control" type="text" placeholder="Product Desc" v-model="prodPayload.prodDescription"
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
                                          <input class="form-control" type="text" placeholder="Category" v-model="prodPayload.Category"
                                              required />
                                      </span>
                                  </div>

                                  <div class="form-control-wrapper">
                                      <span>
                                          <input class="form-control" type="text" placeholder="Product Url" v-model="prodPayload.prodUrl"
                                              required />
                                      </span>
                                  </div>
                                  <div class="form-control-wrapper d-md-flex d-block justify-content-between">
                                      <button type="submit" class="btn btn-success">Submit</button>
                                      <button type="reset" class="btn btn-dark">Reset</button>
                                  </div>
                          </form>
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                      </div>
                  </div>
                  </div>
                </td>
                <td colspan="9" class="hidden-xs"></td>
                <td><a href="#" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>
              </tr>
            </tfoot>
          </table>
      </div>
  </div>

</template>
<script setup>
import { computed, onMounted } from 'vue'
// import { reactive } from 'vue';
// import { useStore } from 'vuex';

import store from '@/store';
// const store = useStore()
const payload = {
  firstName: '',
  lastName: '',
  userAge: 0,
  Gender: '',
  userRole: '',
  emailAdd: '',
  userPass: '',
  userProfile: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png'
}

function editProd(prod){
  prodPayload.prodName = prod.prodName
  prodPayload.prodDescription = prod.prodDescription
  prodPayload.quantity = prod.quantity
  prodPayload.amount = prod.amount
  prodPayload.Category = prod.Category
  prodPayload.prodUrl = prod.prodUrl

  console.log(prod.prodDescription);
}

let prodPayload = {
    prodName: "",
    prodDescription: "",
    quantity: 0,
    amount: 0,
    Category: "",
    prodUrl: ""
}

// const prodPayload = null;

function register() {
  console.log(payload);
  store.dispatch('register', payload)
}

function userDelete(id) {
  console.log(id);
  store.dispatch('deleteUser', id)
  
}

function addProd() {
  console.log(prodPayload);
  
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
/* Header Image Styling */
.header-image {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-bottom: 5px solid #ffbe7e; /* Adds a subtle border below the image */
    margin-bottom: 2rem; /* Space between the image and content */
}

/* Enhanced General container styling */
.container-fluid {
    padding: 2rem;
    background-color: #f8f0e3; /* Light sandy beige background */
    font-family: 'Arial', sans-serif;
    color: #2c2f33; /* Dark gray text */
    border-radius: 10px; /* Rounded corners for the container */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

/* Enhanced Table Styling */
.table-hover {
    background-color: #3b3b3b; /* Darker background for the table */
    color: #ffffff; /* White text for better contrast */
    border-radius: 8px;
    overflow: hidden;
}

.table-hover thead {
    background-color: #1a1a1a; /* Darker shade for table headers */
}

.table-hover tbody tr:hover {
    background-color: #4a4a4a; /* Lighter shade for row hover effect */
}

/* Button hover effects */
.btn-success:hover {
    background-color: #3a773a; /* Darker green */
}

.btn-danger:hover {
    background-color: #8b2e12; /* Darker red */
}

.btn-primary:hover {
    background-color: #1e4f72; /* Darker blue */
}

.btn-warning:hover {
    background-color: #d89d3e; /* Darker yellow */
}

/* Enhanced Modal Styling */
.modal-content {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-header {
    background-color: #f2f2f2;
    border-bottom: 1px solid #ccc;
}

.modal-body {
    padding: 2rem;
}

.form-control {
    border-radius: 5px;
    border: 1px solid #ccc;
}
.adminn{
  text-align: center;
  color: #dfac47cf;
}

.form-control:focus {
    border-color: #5cb85c;
    box-shadow: 0 0 5px rgba(92, 184, 92, 0.5);
}

/* Footer Buttons */
.table tfoot .btn-block {
    width: 100%;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
}

</style>