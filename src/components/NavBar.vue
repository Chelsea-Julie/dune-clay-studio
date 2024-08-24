<template>
  <header id="header">
    <div class="container">
      <h1>D-U-N-E</h1>
      <nav>
        <ul>
          <li><router-link to="/" exact-active-class="active">Home</router-link></li>
          <li><router-link to="/products" exact-active-class="active">Products</router-link></li>
          <li><router-link to="/about" exact-active-class="active">About</router-link></li>
          <li><router-link to="/contact" exact-active-class="active">Contact Me</router-link></li>
          <li><router-link to="/admin" exact-active-class="active">Admin</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }
}
</script>

<style scoped>

header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: transparent;
  transition: background-color 0.3s ease;
  padding: 20px 0;
  z-index: 1000;
  font-family: 'Marcellus', serif;
}

header.scrolled {
  background-color: #f9ca92; 
}

header .container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  margin: 0;
  color: #ffffff; 
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

nav ul li {
  margin-left: 20px;
  position: relative;
}

nav ul li a {
  text-decoration: none;
  color: #ffffff; 
  padding: 10px;
  display: block;
  transition: color 0.3s, border-bottom 0.3s;
}

nav ul li a.active {
  color: #ffffff; 
  font-weight: bold;
  border-bottom: 2px solid #ffffff;
}

nav ul li a:hover {
  color: #ffffff;
}

header.scrolled nav ul li a {
  color: #fff;
}

header.scrolled nav ul li a.active {
  color: #ffffff; 
  border-bottom: 2px solid #ffffff; 
}

header.scrolled nav ul li a::after {
  background: #fff; 
}

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
</style>
