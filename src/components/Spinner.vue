<template>
    <div class="spinner-container">
      <div class="spinner">
        <div class="flower">
          <div class="petal petal1"></div>
          <div class="petal petal2"></div>
          <div class="petal petal3"></div>
          <div class="petal petal4"></div>
          <div class="petal petal5"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SpinningFlowerPot'
  }
  </script>
  
  <style scoped>
  .spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0; /* Soft background for contrast */
  }
  
  .spinner {
    width: 80px;
    height: 80px;
    background-color: #e3b98f; /* Lighter clay color */
    border-radius: 20%; /* Less rounded shape for pot/bowl */
    border: 8px solid #c89f73; /* Lighter border color */
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2), /* Inner shadow for depth */
                0 5px 15px rgba(0, 0, 0, 0.3); /* Outer shadow */
    position: relative;
    margin: 20px auto;
    animation: spin 5s linear infinite; /* Slowed down to 5 seconds */
  }
  
  .spinner::before {
    content: '';
    position: absolute;
    bottom: 0; /* Place at the bottom of the pot */
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 20px;
    background-color: #e3b98f;
    border-radius: 0 0 20% 20%; /* Rounded bottom part */
    border: 5px solid #c89f73;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1),
                0 3px 8px rgba(0, 0, 0, 0.2);
  }
  
  /* Flower styling */
  .flower {
    position: absolute;
    top: -10px; /* Adjusted to position the flower above the pot */
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    background-color: #ffcccb; /* Flower color */
    border-radius: 50%; /* Rounded shape for flower */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* Light shadow for flower */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  /* Petal styling */
  .petal {
    position: absolute;
    width: 20px;
    height: 10px;
    background-color: #ffcccb; /* Petal color */
    border-radius: 50% 50% 0 0; /* Rounded top part for petals */
  }
  
  .petal1 {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
  }
  
  .petal2 {
    top: 10px;
    left: 50%;
    transform: translate(-50%, -50%) rotate(72deg);
  }
  
  .petal3 {
    top: 20px;
    left: 50%;
    transform: translate(-50%, -50%) rotate(144deg);
  }
  
  .petal4 {
    top: 10px;
    left: 50%;
    transform: translate(-50%, -50%) rotate(216deg);
  }
  
  .petal5 {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%) rotate(288deg);
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  