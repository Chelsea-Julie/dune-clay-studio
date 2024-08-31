<template>
    <div class="contact-page" :style="{ backgroundImage: 'url(https://kiara-adams.github.io/images/bg%20image%20.jpg)' }">
      <div class="contact-container">
        <div class="image-container">
          <video src="https://kiara-adams.github.io/images/5633999-uhd_3840_2160_24fps (1) (1) (1).mp4" autoplay muted loop></video>
        </div>
        <div class="form-container">
          <h2></h2>
          <form action="https://formspree.io/f/meqyyrrl" method="POST">
          <label for="name"><i class="bi bi-person"></i> Name</label>
          <input type="text" id="name" name="name" v-model="contactForm.name" required>

          <label for="email"><i class="bi bi-envelope"></i> Email</label>
          <input type="email" id="email" name="email" v-model="contactForm.email" required>

          <label for="message"><i class="bi bi-chat-dots"></i> Message</label>
          <input type="text" id="message" name="message" required>

          <button type="submit">Send</button>
        </form>
  
          <div class="contact-info">
            <p><strong>Contact</strong></p>
            <p>duneclay@gmail.com</p>
            <p><strong>Based in</strong></p>
            <p>123 Maple Street, Lansdown</p>
            <div class="social-icons">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
  
      <div class="signup-container">
        <h1>Sign Up</h1>
        <form @submit.prevent="submitSignupForm" class="signup-form">
          <div class="input-group">
            <label for="signup-name"><i class="bi bi-person"></i> Name</label>
            <input type="text" id="signup-name" v-model="signupForm.name" required>
          </div>
          <div class="input-group">
            <label for="signup-email"><i class="bi bi-envelope"></i> Email</label>
            <input type="email" id="signup-email" v-model="signupForm.email" required>
          </div>
          <div class="input-group">
            <label for="signup-password"><i class="bi bi-lock"></i> Password</label>
            <input type="password" id="signup-password" v-model="signupForm.password" required>
          </div>
          <div class="input-group">
            <label for="signup-confirm-password"><i class="bi bi-lock"></i> Confirm Password</label>
            <input type="password" id="signup-confirm-password" v-model="signupForm.confirmPassword" required>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
  
      <h2 class="map-title">Find Us Here</h2>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.7835867656235!2d18.482408415153257!3d-33.94723178061999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dccd8b6e776eb27%3A0x5a6c0cbb2f11e1ef!2s315%20Imam%20Haroon%20Rd%2C%20Lansdowne%2C%20Cape%20Town%2C%207970!5e0!3m2!1sen!2sus!4v1692111426872!5m2!1sen!2sus"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contactForm: {
          name: '',
          email: '',
          message: '',
        },
        signupForm: {
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }
      };
    },
    methods: {
      submitContactForm() {
        // Handle contact form submission logic here
        console.log("Contact Form Submitted", this.contactForm);
      },
      submitSignupForm() {
        // Handle signup form submission logic here
        console.log("Signup Form Submitted", this.signupForm);
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-page {
    display: flex;
    padding-top: 200px ;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-size: cover; /* Ensure the background image covers the page */
    background-position: center; /* Center the background image */
  }
  
  .contact-container {
    display: flex;
    background-color: rgba(255, 255, 255, 0.5); /* Light transparent background */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 1200px;
    width: 100%;
    margin: 40px 0;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .image-container {
    flex: 1;
    margin-right: 20px;
    border-right: 1px solid #000; /* Add a line between the video and the form */
    padding-right: 20px; /* Add some padding to keep space from the line */
  }
  
  .image-container video {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
  
  .form-container {
    flex: 2;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: transparent; /* Transparent background */
  }
  
  .form-container h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333;
  }
  
  .form-container form {
    display: flex;
    flex-direction: column;
  }
  
  .form-container label {
    font-size: 1.2em;
    margin-bottom: 5px;
    color: #555;
  }
  
  .form-container input[type="text"],
  .form-container input[type="email"],
  .form-container input[type="password"],
  .form-container input {
    border: none;
    border-bottom: 1px solid #000; /* Bottom line only */
    background-color: transparent; /* No background color */
    margin-bottom: 20px;
    padding: 10px 0; /* Padding for better text spacing */
    font-size: 1em;
    outline: none;
    width: 100%;
    color: #333; /* Text color */
  }
  
  .form-container button {
    background-color: #8b4513;
    color: #fff;
    padding: 15px;
    font-size: 1.2em;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 50%;
    align-self: center;
    transition: background-color 0.3s;
  }
  
  .form-container button:hover {
    background-color: #a0522d;
  }
  
  .contact-info {
    margin-top: 20px;
    font-size: 1em;
    color: #555;
  }
  
  .contact-info p {
    margin: 5px 0;
  }
  
  .social-icons {
    margin-top: 10px;
  }
  
  .social-icons a {
    text-decoration: none;
    margin-right: 15px;
    color: #555;
    font-size: 1.5em;
    transition: color 0.3s;
  }
  
  .social-icons a:hover {
    color: #000;
  }
  
  .signup-container {
    max-width: 1200px;
    width: 100%;
    margin: 20px 0;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.5); /* Light transparent background */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }
  
  .signup-container h1 {
    font-size: 2em;
    margin-bottom: 20px;
    color: #333;
  }
  
  .signup-form {
    display: flex;
    flex-direction: column;
  }
  
  .signup-form .input-group {
    margin-bottom: 20px;
  }
  
  .signup-form label {
    font-size: 1.2em;
    color: #555;
  }
  
  .signup-form input {
    padding: 10px;
    font-size: 1em;
    border: none;
    border-bottom: 1px solid #000;
    background-color: transparent;
    outline: none;
    width: 100%;
    margin-bottom: 20px;
    color: #333; /* Text color */
  }
  
  .signup-form button {
    background-color: #8b4513;
    color: #fff;
    padding: 15px;
    font-size: 1.2em;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 50%;
    align-self: center;
    transition: background-color 0.3s;
  }
  
  .signup-form button:hover {
    background-color: #a0522d;
  }
  
  .map-title {
    font-size: 1.5em;
    color: #333;
    margin-top: 20px;
    text-align: center;
  }
  
  .map {
    width: 100%;
    max-width: 1200px;
    height: 350px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  </style>
  