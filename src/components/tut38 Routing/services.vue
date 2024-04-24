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
            <li><a href="/ServicesPage" class="active">Services</a></li>
            <li><a href="/ContactPage">Contact</a></li>
          </ul>
        </nav>
      </header>
  
      <main>
        <section class="hero">
          <div class="hero-content">
            <h2 class="large-label">Our Services</h2>
            <p>Explore our comprehensive range of services.</p>
          </div>
        </section>
  
        <section class="services">
          <div class="service-card">
            <i class="fa fa-code"></i>
            <h3>Web Development</h3>
            <p>We create stunning and responsive websites tailored to your business needs.</p>
          </div>
          <div class="service-card">
            <i class="fa fa-mobile"></i>
            <h3>Mobile App Development</h3>
            <p>Our team develops high-performance mobile apps for iOS and Android platforms.</p>
          </div>
          <div class="service-card">
            <i class="fa fa-pencil-ruler"></i>
            <h3>UI/UX Design</h3>
            <p>We design intuitive and visually appealing user interfaces for optimal user experience.</p>
          </div>
          <div class="service-card">
            <i class="fa fa-chart-line"></i>
            <h3>Digital Marketing</h3>
            <p>Our digital marketing strategies help you reach and engage your target audience.</p>
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
    name: 'ServicesPage',
  }
  </script>
  
  <style>
  /* Import global styles */
  /* @import './assets/styles/global.css'; */
  
  /* Services styles */
  .services {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 3rem;
  }
  
  .service-card {
    flex: 0 0 calc(50% - 1rem);
    margin-bottom: 2rem;
    padding: 1.5rem;
    background-color: #f8f8f8;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
  }
  
  .service-card:hover {
    transform: translateY(-5px);
  }
  
  .service-card i {
    font-size: 2rem;
    color: #ff6b6b;
    margin-bottom: 0.5rem;
  }
  
  @media (max-width: 768px) {
    .service-card {
      flex: 0 0 100%;
    }
  }
  </style>