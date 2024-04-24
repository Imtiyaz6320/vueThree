<template>
    <div id="app">
      <header>
        <nav>
          <div class="logo">
            <img src="../../assets/logo.png" alt="Logo">
            <h1>My Website</h1>
          </div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/ServicesPage">Services</a></li>
            <li><a href="/ContactPage" class="active">Contact</a></li>
          </ul>
        </nav>
      </header>
  
      <main>
        <section class="hero">
          <div class="hero-content">
            <h2 class="large-label">Contact Us</h2>
            <p>Get in touch with us for more information.</p>
          </div>
        </section>
  
        <section class="contact-form">
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email">
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" class="cta-btn">Submit</button>
          </form>
        </section>
  
        <section class="contact-info">
          <div class="info-card">
            <i class="fa fa-map-marker"></i>
            <h4>Address</h4>
            <p>123 Main Street, City, Country</p>
          </div>
          <div class="info-card">
            <i class="fa fa-phone"></i>
            <h4>Phone</h4>
            <p>+1 (234) 567-890</p>
          </div>
          <div class="info-card">
            <i class="fa fa-envelope"></i>
            <h4>Email</h4>
            <p>info@mywebsite.com</p>
          </div>
        </section>
      </main>
  
      <footer>
        <p>&copy; My Website</p>
      </footer>
    </div>
  </template>
  
  <script>
//   import { useRoute } from 'vue-router';
  export default {
    name: 'ContactPage',
    data() {
        return {
            
        }
    },
    // mounted() {
    //     const route = useRoute
    //     console.log(route);
    // },
  }
  </script>
  
  <style>
  /* Import global styles */
  /* @import './assets/styles/global.css'; */
  
  /* Contact Form styles */
  .contact-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #f8f8f8;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  textarea {
    height: 150px;
  }
  
  .cta-btn {
    background-color: #ff6b6b;
    color: #fff;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .cta-btn:hover {
    background-color: #ff4d4d;
  }
  
  /* Contact Info styles */
  .contact-info {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
  }
  
  .info-card {
    flex: 0 0 calc(33.33% - 1rem);
    padding: 1.5rem;
    background-color: #f8f8f8;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .info-card i {
    font-size: 2rem;
    color: #ff6b6b;
    margin-bottom: 0.5rem;
  }
  
  @media (max-width: 768px) {
    .contact-info {
      flex-direction: column;
    }
  
    .info-card {
      flex: 0 0 100%;
      margin-bottom: 1rem;
    }
  }
  </style>