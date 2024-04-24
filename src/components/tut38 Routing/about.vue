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
          <li><a href="/About" class="active">About</a></li>
          <li><a href="/ServicesPage">Services</a></li>
          <li><a href="/ContactPage">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-content">
          <h2 class="large-label">About Us</h2>
          <p>Learn more about our company and our mission.</p>
        </div>
      </section>

      <section class="about-content">
        <div class="about-text">
          <h3>Who We Are</h3>
          <p>We are a team of passionate professionals dedicated to providing innovative solutions and exceptional service. Our mission is to empower our clients with the tools and resources they need to achieve their goals.</p>
          <p>Founded in 2010, our company has grown from a small startup to a leading provider in our industry. We pride ourselves on our commitment to excellence, integrity, and customer satisfaction.</p>
        </div>
        <div class="about-image">
          <img src="../../assets/about-image.jpg" alt="About Image">
        </div>
      </section>

      <section class="values">
        <h3>Our Core Values</h3>
        <div class="value-card">
          <i class="fa fa-handshake"></i>
          <h4>Integrity</h4>
          <p>We maintain the highest standards of ethics and professionalism.</p>
        </div>
        <div class="value-card">
          <i class="fa fa-bolt"></i>
          <h4>Innovation</h4>
          <p>We continuously strive to develop cutting-edge solutions.</p>
        </div>
        <div class="value-card">
          <i class="fa fa-users"></i>
          <h4>Customer Focus</h4>
          <p>Our customers are at the heart of everything we do.</p>
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
  name: 'AboutPage',
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

nav li a.active {
  color: #ff6b6b;
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
  height: 400px;
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
}

.about-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0;
}

.about-text {
  flex: 1;
  margin-right: 2rem;
}

.about-image img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.values {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.value-card {
  flex: 0 0 calc(33.33% - 1rem);
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: #f8f8f8;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
}

.value-card i {
  font-size: 2rem;
  color: #ff6b6b;
  margin-bottom: 0.5rem;
}

/* Footer styles */
footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
}
</style>