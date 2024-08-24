<template>
  <header id="header">
    <div class="container">
      <h1>D-U-N-E</h1>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact Me</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>

        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  mounted() {
    // Add scroll event listener for header background change
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
/* Navbar and Navigation Styles */
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
    background-color: #d8cfc4; /* Light beige */
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
    position: relative;
}

nav ul li a {
    text-decoration: none;
    color: #5c4033; /* Dark brown */
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
    background: #5c4033; /* Dark brown underline */
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: bottom right;
}

nav ul li a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

/* Navbar change color on scroll */
header.scrolled nav ul li a {
    color: #fff; /* White text on scroll */
}

header.scrolled nav ul li a::after {
    background: #fff; /* White underline on scroll */
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

/* Navbar links */
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

/* Navbar color on scroll */
#header.scrolled {
    background: rgba(255, 255, 255, 0.8);
}

</style>
