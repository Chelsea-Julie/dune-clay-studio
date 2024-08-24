<template>
<div id="app">

<section id="home" class="hero">
  <img src="https://kiara-adams.github.io/images/90f27621-5a83-4585-9840-699c06a117e0.png
" class="hero-image" alt="Pottery">
  <div class="hero-content">
    <h2>Welcome to Dune Clay Studio</h2>
    <p>Discover beautiful, handcrafted pottery and ceramics.</p>
    <a href="#featured-cards" class="hover-button">Explore Our Collection</a>
  </div>
</section>

<section id="intro" class="intro">
  <div class="container">
    <h2>Crafting Art with Clay</h2>
    <p>At Dune Clay Studio, we bring to life unique pottery pieces, each telling its own story through the hands that shaped it. Our creations are a blend of traditional techniques and modern design, perfect for adding a touch of elegance to your space.</p>
  </div>
</section>

<section id="featured-cards" class="featured-cards">
  <div class="containerss">
    <h2>Our Featured Pieces</h2>
    <div class="card-wrapper">
      <div class="card-item">
        <img src="https://chelsea-julie.github.io/all-images/images/nodeEOMP/elegant_ceramic_table_lamp.jpg" alt="Pottery Piece 1">
        <div class="card-overlay">
          <p>Elegant Pottery Lamps</p>
          <router-link to="/products" class="shop-now-btn">Shop Now</router-link>
        </div>
      </div>
      <div class="card-item">
        <img src="https://chelsea-julie.github.io/all-images/images/nodeEOMP/Retro_Organic_Chunky_Style_Mugs.jpg" alt="Pottery Piece 2">
        <div class="card-overlay">
          <p>Beautiful Pottery Kitchenwear</p>
          <router-link to="/products" class="shop-now-btn">Shop Now</router-link>
        </div>
      </div>
      <div class="card-item">
        <img src="https://kiara-adams.github.io/images/MYLENEBELLE.jpg" alt="Pottery Piece 2">
        <div class="card-overlay">
          <p>Elegant Pottery Vases</p>
          <!-- <a href="#shop-now" class="shop-now-btn">Shop Now</a> -->
          <router-link to="/products" class="shop-now-btn">Shop Now</router-link>
        </div>
      </div>
      <div class="card-item">
        <img src="https://chelsea-julie.github.io/all-images/images/nodeEOMP/Ceramic_cat_sculpture.jpg" alt="Pottery Piece 3">
        <div class="card-overlay">
          <p>Beautiful Pottery Sculptures</p>
          <router-link to="/products" class="shop-now-btn">Shop Now</router-link>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="testimonials" class="testimonials">
  <div class="container">
    <h2>What Our Customers Say</h2>
    <div class="testimonial-wrapper">
      <div class="testimonial-item">
        <img src="https://chelsea-julie.github.io/all-images/images/nodeEOMP/Minimalistic_beige_twist_vase.jpg" alt="Customer 1">
        <p>"The pottery pieces from Dune Clay Studio really adds to your home decor."</p>
        <span>- Chloe S.</span>
      </div>
      <div class="testimonial-item">
        <img src="https://chelsea-julie.github.io/all-images/images/nodeEOMP/Pot_for_plants.jpg" alt="Customer 2">
        <p>"The pottery pieces from Dune Clay Studio have truly transformed my living space. Each piece is unique and beautifully crafted."</p>
        <span>- Erin W.</span>
      </div>
      <div class="testimonial-item">
        <img src="https://chelsea-julie.github.io/all-images/images/nodeEOMP/Speckled_Dinnerware.jpg" alt="Customer 2">
        <p>"I love the attention to detail in every piece. You can tell that these are made with love and care. Highly recommend!"</p>
        <span>- Keira K.</span>
      </div>
    </div>
  </div>
</section>

<h1 class="collect"> Our Collection</h1>
<div class="gallery-container">
  <div class="gallery">
    <div class="gallery-item">
      <img src="https://kiara-adams.github.io/images/MYLENEBELLE.jpg" alt="Blue Sofa">
      <div class="overlay">
        <h3>Brown pottery vase</h3>
        <p>A stylish pottery vase</p>
        <router-link to="/products" class="shop-now-btn">View Collection</router-link>
      </div>
    </div>
    <div class="gallery-item">
      <img src="https://kiara-adams.github.io/images/Dreamy❤️.jpg" alt="Wooden Cabinet" class="woody">
      <div class="overlay">
        <h3>lounge set pottery</h3>
        <p>A Pottery set.</p>
        <router-link to="/products" class="shop-now-btn">View Collection</router-link>
      </div>
    </div>
    <!-- <div class="gallery-item">
      <img src="https://chelsea-julie.github.io/all-images/images/nodeEOMP/Textured_Natural_Bud_Vase.jpg" alt="Living Room Design">
      <div class="overlay">
        <h3>Living Room Design</h3>
        <p>A cozy living room setup with modern furniture.</p>
        <button @click="viewCollection('living-room')">View Collection</button>
      </div>
    </div> -->
    <!-- <div class="gallery-item">
      <img src="https://chelsea-julie.github.io/all-images/" alt="Dining Set">
      <div class="overlay">
        <h3>Dining Set</h3>
        <p>A modern dining set perfect for family gatherings.</p>
        <button @click="viewCollection('dining-set')">View Collection</button>
      </div>
    </div> -->
    <div class="gallery-item">
      <img src="https://chelsea-julie.github.io/all-images/images/nodeEOMP/Tersilia_tea_set_in_brown_ceramic.jpg" alt="Pendant Light">
      <div class="overlay">
        <h3>Pottery Set</h3>
        <p>An elegant  Potteryset</p>
      </div>
    </div>
    <div class="gallery-item">
      <img src="https://kiara-adams.github.io/images/🤍 (1).jpg" alt="Shelf Decor">
      <div class="overlay">
        <h3>Sculptures</h3>
        <p>Chic Sculpture design.</p>
        <router-link to="/products" class="shop-now-btn">View Collection</router-link>
      </div>
    </div>
  </div>
</div>
<div class="bottom-as">
  <h2 class="bottom-head">Best sellers</h2>
    <div class="row gap-2 justify-content-center" v-if="recentProduct">
      <Card v-for="product in recentProduct" :key="product.productID" style="width: 18rem;">
        <template #cardHeader>
          {{ product.productURL }}
          <img :src="product.prodURL" loading="lazy" class="img-fluid" :alt="product.prodName">
        </template>
        <template #cardBody>
          <h5 class="card-title">{{ product.prodName }}</h5>
          <p class="lead">{{ product.prodDescription }}</p>
          <p class="lead">Amount: R{{ product.amount }}</p>
        </template>
      </Card>
    </div>
    <div v-else>
      <Spinner/> 
    </div>
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
  computed: {
    recentProduct(){
      return this.$store.state.recentProducts;
    }
  },

  mounted () {
    return this.$store.dispatch('fetchRecentProducts');
  }
}
</script>


<style>

.hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; /* Ensure the image is behind the text */
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  /* background-color: rgba(0, 0, 0, 0.5); Dark overlay for readability */
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  margin: auto;
}
.bottom-as{
  padding-top: 200px;
}

.hero-content h2 {
  margin: 0;
  font-size: 3em;
}

.hero-content p {
  font-size: 1.5em;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #5c4033; 
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}

.featured-cards {
  padding: 50px 0;
  background: #f9f9f9;
}

.featured-cards h2 {
  text-align: center;
  margin-bottom: 30px;
}
.bottom-head{ 
  padding-bottom:50px ;
  text-align: center;
  color: #6f4f28;
}
.card-wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.card-item {
  position: relative;
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  margin: auto;
  opacity: 0;
  animation: fadeIn 2s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

#intro {
  padding: 50px 0;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.3s ease;
  text-align: center;
  padding: 20px;
}

.card-item:hover .card-overlay {
  opacity: 1;
  transform: scale(1.05);
}


.card-item:hover .card-overlay {
  opacity: 1;
}

.card-overlay p {
  margin: 0 0 10px 0;
}

.shop-now-btn {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.shop-now-btn:hover {
  background-color: #555;
}

/* Base Styles */


/* Header */
header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: transparent;
  transition: background-color 0.3s ease;
  padding: 20px 0;
  z-index: 1000;
}

header.scrolled {
  background-color: #d8cfc4; /* Light beige */
}

header .container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.collect{
  text-align: center;
  color: #6f4f28;
}
header h1 {
  margin: 0;
  color: #5c4033; /* Dark brown */
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

nav ul li {
  margin-left: 20px;
}

nav ul li a {
  text-decoration: none;
  color: #5c4033; /* Dark brown */
}

/* Carousel Section */
.carousel-section {
  margin-top: 60px; /* Space below the fixed header */
  padding: 0;
  background-color: #f5ede1; /* Light beige */
  overflow: hidden;
}

.carousel-wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
 
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-image {
  width: 100%;
  height: 50vh; /* Adjust the height as needed */
  object-fit: cover;
}

/* About Section */
.about-section {
  padding: 50px 20px;
  background-color: #e2d8c4; /* Slightly darker beige */
  text-align: center;
}

.about-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.about-text {
  flex: 1;
  max-width: 500px;
  padding: 20px;
  background-color: #f5f0e6; /* Beige */

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.about-image {
  flex: 1;
  max-width: 500px;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.about-image img {
  width: 100%;
  height: auto;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
/* products home  */
.product{
  padding-top:300px;

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
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */

.product-item p {
  font-size: 1em;
  color: #555;
}

.product-item .price {
  font-weight: bold;
  color: #333;
}
/* Footer */
.footer {
  background-color: #d8cfc4; /* Light beige */
  padding: 20px 0;
  text-align: center;
}
/* styles.css */
#header {
  position: fixed;
  width: 100%;
  background: transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background 0.3s;
}

#header h1 {
  color: #fff;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

nav ul li {
  position: relative;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  padding: 10px;
  display: block;
  transition: color 0.3s;
}

nav ul li a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  transform-origin: bottom right;
}

nav ul li a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

/* Navbar change color on scroll */
#header.scrolled {
  background: rgba(255, 255, 255, 0.8);
}

.new{
  text-align: center;
}
/* CSS */
.hover-button {
  background-color: rgb(214, 170, 88); /* Initial background color */
  text-decoration: none; /* Remove underline */

  color: white; /* Text color */
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Smooth transition */
}

.hover-button:hover {
  background-color: white; /* Background color on hover */
  color: brown; /* Text color on hover */
}



footer {
  background-color: #d8cfc4; /* Light beige */
  padding: 20px 0;
  text-align: center;
}


/* Modal Styles */
.modal {
  display: none; 
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
  padding-top: 60px; 
}

.modal-content {
  background-color: #fefefe;
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%; 
  max-width: 500px;
}

.closeBtn {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.closeBtn:hover,
.closeBtn:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.admin-section button {
  padding: 10px 20px;
  background-color: #b5651d;
  color: white;
  border: none;
  cursor: pointer;
}

.admin-section button:hover {
  background-color: #a45214;
}
/* nw home */
/* Introductory Section */
#intro {
  padding: 50px 0;
  /* background-color: #f4f2ef; */
  text-align: center;
}

#intro h2 {
  font-size: 2.5rem;
  color: #6b4f4f;
  margin-bottom: 20px;
}

#intro p {
  font-size: 1.1rem;
  color: #4d3b3b;
  max-width: 800px;
  margin: 0 auto;
}

/* Testimonials Section */
#testimonials {
  padding: 60px 0;
  /* background-color: #f4f2ef; */
  text-align: center;
}

#testimonials h2 {
  font-size: 2.5rem;
  color: #6b4f4f;
  margin-bottom: 40px;
}

.testimonial-wrapper {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.testimonial-item {
  /* background-color: #fff; */
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  max-width: 300px;
}

.testimonial-item p {
  font-size: 1rem;
  color: #4d3b3b;
  margin-bottom: 10px;
}

.testimonial-item span {
  font-weight: bold;
  color: #6b4f4f;
}

/* Call-to-Action Section */
#cta {
  padding: 50px 0;
  /* background-color: #d3b292; */
  text-align: center;
}

#cta h2 {
  font-size: 2.5rem;
  color: #94360ec6;
  margin-bottom: 20px;
}

#cta p {
  font-size: 1.1rem;
  color: #f4f2ef;
  max-width: 700px;
  margin: 0 auto 20px auto;
}

#cta .btn {
  display: inline-block;
  padding: 12px 24px;
  /* background-color: #6b4f4f; */
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
}

/* Container and grid layout */
.product-category {
  padding: 2rem 0;
  background-color: #f7efe6;
}

.product-category-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

/* Individual category items */
.product-category-item {
  position: relative;
  overflow: hidden;
}

.category-img {
  width: 100%;
  display: block;
  transition: opacity 0.3s ease-in-out;
}

/* Hover effect on images */
.product-category-item:hover .category-img {
  opacity: 0.7;
}

/* Badge on the images */
.product-category-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  z-index: 2;
}

/* View Collection button */
.view-collection {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.view-btn {
  background-color: #8b5e3c;
  color: #fff;
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  border-radius: 5px;
  text-decoration: none;
}

/* Show button on hover */
.product-category-item:hover .view-collection {
  opacity: 1;
}




/* Container and grid layout */
.product-category {
  padding: 2rem 0;
  background-color: #f7efe6;
}

.product-category-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

/* Individual category items */
.product-category-item {
  position: relative;
  overflow: hidden;
}

.category-img {
  width: 100%;
  display: block;
  transition: opacity 0.3s ease-in-out;
}

/* Hover effect on images */
.product-category-item:hover .category-img {
  opacity: 0.7;
}

/* Badge on the images */
.product-category-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  z-index: 2;
}

/* View Collection button */
.view-collection {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.view-btn {
  background-color: #8b5e3c;
  color: #fff;
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  border-radius: 5px;
  text-decoration: none;
}

/* Show button on hover */
.product-category-item:hover .view-collection {
  opacity: 1;
}
/* Container and grid layout */
.product-category {
  padding: 2rem 0;
  background-color: #f7efe6; /* Light brown background */
}

.product-category-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

/* Individual category items */
.product-category-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-category-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Category image */
.category-img {
  width: 100%;
  display: block;
  transition: opacity 0.3s ease-in-out;
}

/* Hover effect on images */
.product-category-item:hover .category-img {
  opacity: 0.8;
}

/* Badge on the images */
.product-category-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
}

/* View Collection button */
.view-collection {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  text-align: center;
}

.view-btn {
  background-color: #8b5e3c; /* Warm brown color */
  color: #fff;
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.view-btn:hover {
  background-color: #6f4f28; /* Darker brown */
  transform: scale(1.05);
}

/* Show button on hover */
.product-category-item:hover .view-collection {
  opacity: 1;
}
.gallery-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 200px);
  gap: 5px; /* Small gap between images */
  max-width: 1000px;
}
.gallery-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}
.gallery-item:hover img {
  transform: scale(1.1);
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}
.gallery-item:hover .overlay {
  opacity: 1;
}
.overlay h3 {
  margin: 0;
  font-size: 20px;
}
.overlay p {
  font-size: 14px;
  margin-bottom: 20px;
}
.overlay button {
  padding: 10px 20px;
  background-color: #ff9900;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}
.overlay button:hover {
  background-color: #e88b00;
}

/* Specific sizes for the grid */
.gallery-item:nth-child(1) {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
.gallery-item:nth-child(2) {
  grid-column: 3 / 4;
  grid-row: 1 / 3;
}
.gallery-item:nth-child(3) {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
.gallery-item:nth-child(4) {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}
.gallery-item:nth-child(5) {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
}
.gallery-item:nth-child(6) {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
}




/* caroo */
.testimonials {
  background-color: transparent; /* Make the section background transparent */
  padding: 50px 0;
  overflow: hidden;
}

.testimonials h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2em;
  color: #333; /* Keep the text color */
}

.testimonial-wrapper {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 20px; /* Space between items */
  padding: 0 20px;
}

.testimonial-item {
  background-color: rgba(255, 255, 255, 0.8); /* White background with 80% opacity */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex: 0 0 300px; /* Fixed width for each item */
  margin: 10px 0;
  transition: transform 0.3s ease-in-out;
}

.testimonial-item img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
}

.testimonial-item p {
  font-size: 1.1em;
  color: #555;
  margin-bottom: 10px;
}

.testimonial-item span {
  font-weight: bold;
  color: #333;
}

.testimonial-item:hover {
  transform: scale(1.05);
}

.product-item img:hover {
  transform: scale(1.02); /* Slight zoom effect */
}
</style>
