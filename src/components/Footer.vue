<template>
    <footer class="container-fluid footer">
      <div class="row justify-content-center">
        <p class="lead footer-text">
          DUNE CLAY STUDIO &copy; <span class="year">{{ cYear }}</span>
        </p>
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
    background-color: #f8f9fa;
    padding: 20px 0;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
  }
  
  .footer-text {
    color: #343a40;
    font-weight: 300;
    text-align: center;
  }
  
  .year {
    font-weight: 700;
    color: #6c757d;
    padding-left: 5px;
  }
  
  .footer-text .year:hover {
    color: #343a40;
    transition: color 0.3s ease-in-out;
  }
  </style>
  