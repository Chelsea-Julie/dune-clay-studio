<template>
     <section class="hero-container">
      <video class="hero-video" autoplay muted loop>
        <source src="https://kiara-adams.github.io/images/freecompress-8298094-uhd_2160_3840_30fps.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="hero-overlay">
        <h1 class="hero-title">Explore Our Collection</h1>
      </div>
    </section>

    <div class="container">
      <div class="row">
        <h4 class="display-4">lololo</h4>
      </div>
      <div class="row gap-2 justify-content-center" v-if="products">
        <Card v-for="product in products" :key="product.productID" style="width: 18rem;">
          <template #cardHeader>
            {{ product.productURL }}
            <img :src="product.prodURL" loading="lazy" class="img-fluid" :alt="product.prodName">
          </template>
          <template #cardBody>
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p v-if="isTextVisible">{{  product.prodDesc }}</p>

            <button @click="toggleText">Toggle Text</button>
            <p class="lead">Amount: R{{ product.amount }}</p>
          </template>
        </Card>
      </div>
  
      <div v-else>
        <Spinner/> 
      </div>
    </div>
  </template>
  
  <script>
  import Card from '@/components/Card.vue';
  import Spinner from '@/components/Spinner.vue';
  export default {
    name: 'HomeView',
    components: {
      Card, Spinner
  
    },
    data() {
    return {
      isTextVisible: true
    };
  },
  methods: {
    toggleText() {
      this.isTextVisible = !this.isTextVisible;
    }
  },
    computed: {
      products(){
        return this.$store.state.products;
      }
    },
  
    mounted () {
      return this.$store.dispatch('fetchProducts');
    }
  }
  </script>
  <style>
  body {
    margin: 0;
    font-family: 'Marcellus', serif;
    background-color: #F5F5DC; 
    color: #4B3F3F; 
  }
  

  .hero-container {
    position: relative;
    width: 100%;
    height: 80vh;
    overflow: hidden;
  }
  
  .hero-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .hero-title {
    color: #FFF5EE; 
    font-size: 3rem;
    text-align: center;
  }
  

  .product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
  }
  
  .product-item {
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  .product-item img {
    width: 70%;
    height: 60%;
  }
  
  .product-item h3 {
    font-size: 1.2em;
    margin: 10px 0;
  }
  
  .product-item p {
    font-size: 1em;
    color: #555;
  }
  
  .product-item .price {
    font-weight: bold;
    color: #333;
  }
  

  .view-button {
    background-color: #4B3F3F;
    color: #FFF5EE;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .view-button:hover {
    background-color: #705D56;
  }

.container {
  padding: 20px;
}

.row {
  margin-bottom: 20px;
}

h4.display-4 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}


.Card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 10px; 
  width: 300px; 
}

.Card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-header {
  position: relative;
  width: 100%;
  height: 200px; /* Fixed height for images */
}

.card-header img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom: 1px solid #e0e0e0;
}

.card-body {
  padding: 15px;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: #333;
}

.lead {
  font-size: 1rem;
  color: #555;
}

/* View Description Button and Popup */
.btn-view-description {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  display: block;
  width: 100%; /* Full width of card body */
}

.btn-view-description:hover {
  background-color: #0056b3;
}

.description-popup {
  display: none; /* Hidden by default */
  padding: 10px;
  background-color: #f8f9fa;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-top: 10px;
}

.show-description .description-popup {
  display: block; /* Show when toggled */
}

/* Responsive Design */
@media (min-width: 768px) {
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .Card {
    flex: 1 1 calc(33.333% - 20px); /* 3 cards per row with spacing */
    box-sizing: border-box;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }

  .Card {
    flex: 1 1 100%; /* Full width for smaller screens */
  }
}

  
  </style>
  