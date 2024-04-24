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
            <li><a href="/ContactPage">Contact</a></li>
          </ul>
        </nav>
      </header>
  
      <main>
        <section class="hero">
          <div class="hero-content">
            <h2 class="large-label">Welcome to Our Website</h2>
            <p>Discover our innovative products and services.</p>
            <button class="cta-btn">Get Started</button>
          </div>
        </section>
  
        <section class="features">
          <div class="feature-card">
            <i class="fa fa-rocket"></i>
            <h3>Fast</h3>
            <p>Our services are lightning fast.</p>
          </div>
          <div class="feature-card">
            <i class="fa fa-lock"></i>
            <h3>Secure</h3>
            <p>We prioritize security and privacy.</p>
          </div>
          <div class="feature-card">
            <i class="fa fa-thumbs-up"></i>
            <h3>Reliable</h3>
            <p>You can count on us.</p>
          </div>
        </section>
      </main>
  
      <footer>
        <p>&copy; My Website</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  }
  </script>
  
  <style>
  /* Reset some default styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Global styles */
  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    color: #333;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  /* Header styles */
  header {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo img {
    height: 40px;
    margin-right: 0.5rem;
  }
  
  nav ul {
    display: flex;
    list-style: none;
  }
  
  nav li {
    margin-left: 1.5rem;
  }
  
  /* Main content styles */
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../../assets/1hero-bg.jpg');
    background-size: cover;
    background-position: center;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
  }
  
  .hero-content h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .large-label {
    font-size: 4rem;
    font-weight: bold;
    color: #ff6b6b;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
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
  
  .features {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
  }
  
  .feature-card {
    text-align: center;
    flex: 1;
    margin: 0 1rem;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    transition: transform 0.3s ease;
  }
  
  .feature-card:hover {
    transform: translateY(-5px);
  }
  
  .feature-card i {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #ff6b6b;
  }
  
  /* Footer styles */
  footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem;
  }
  </style>