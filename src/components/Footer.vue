<template>
    <footer class="container-fluid footer">
      <div class="row justify-content-center">
        <div class="col-auto">
          <p class="lead footer-text">
            DUNE CLAY STUDIO &copy; <span class="year">{{ cYear }}</span>
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-auto social-media">

       
          <a href="https://instagram.com" target="_blank" class="social-icon">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" class="social-icon">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-auto">
          <p class="footer-note">Crafted with care by Dune Clay Studio</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComp",
    data() {
      return {
        cYear: new Date().getUTCFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
  .footer {
    background: linear-gradient(135deg, #ebe0b9, #ffffff);
    padding: 20px 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin-top: 60px;
    position: relative;
    overflow: hidden;
  }
  
  .footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10%;
    height: 10%;
    background: radial-gradient(circle at center, rgba(0, 0, 0, 0.05), transparent);
    z-index: 0;
  }
  
  .footer-text {
    color: #d6a533;
    font-weight: 300;
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 20px;
    z-index: 1;
    position: relative;
  }
  
  .year {
    font-weight: 600;
    color: #f9ebbe;
  }
  
  .year:hover {
    color: #f9d98f;
    transition: color 0.3s ease-in-out;
  }
  
  .social-media {
    margin-top: 20px;
  }
  
  .social-icon {
    color: #ffffff;
    background-color: #ebcca0;
    border-radius: 50%;
    padding: 14px;
    margin: 0 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    text-decoration: none;
    position: relative;
  }
  
  .social-icon::after {
    content: '';
    position: absolute;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    top: 10%;
    left: 10%;
    z-index: -1;
    transition: background 0.3s ease-in-out;
  }
  
  .social-icon:hover::after {
    background: rgba(0, 0, 0, 0.3);
  }
  
  .social-icon:hover {
    background-color: #8b4513; /* Brown color */
    color: #ffffff;
  }
  
  .footer-note {
    color: #6c757d;
    font-size: 0.9rem;
    text-align: center;
    margin-top: 10px;
    z-index: 1;
    position: relative;
  }
  </style>
  