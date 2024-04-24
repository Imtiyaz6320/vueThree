<!-- <template>
  <div class="calculator">
    <div class="display">{{ currentValue || 0 }}</div>
    <div class="buttons">
      <button @click="clear" class="span-two">AC</button>
      <button @click="sign">+/-</button>
      <button @click="percent">%</button>
      <button @click="append('/')" class="operator">/</button>
      <button @click="append('7')">7</button>
      <button @click="append('8')">8</button>
      <button @click="append('9')">9</button>
      <button @click="setOperation('*')" class="operator">*</button>
      <button @click="append('4')">4</button>
      <button @click="append('5')">5</button>
      <button @click="append('6')">6</button>
      <button @click="setOperation('-')" class="operator">-</button>
      <button @click="append('1')">1</button>
      <button @click="append('2')">2</button>
      <button @click="append('3')">3</button>
      <button @click="setOperation('+')" class="operator">+</button>
      <button @click="append('0')" class="span-two">0</button>
      <button @click="append('.')">.</button>
      <button @click="evaluate" class="operator">=</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentValue: '',
      prevValue: null,
      operator: null,
    };
  },
  methods: {
    clear() {
      this.currentValue = '';
      this.prevValue = null;
      this.operator = null;
    },
    sign() {
      this.currentValue = this.currentValue.charAt(0) === '-'
        ? this.currentValue.slice(1)
        : `-${this.currentValue}`;
    },
    percent() {
      this.currentValue = `${parseFloat(this.currentValue) / 100}`;
    },
    append(number) {
      this.currentValue = `${this.currentValue}${number}`;
    },
    setOperation(op) {
      if (this.currentValue === '') return;
      if (this.prevValue !== null) {
        this.calculate();
      }
      this.operator = op;
      this.prevValue = this.currentValue;
      this.currentValue = '';
    },
    calculate() {
      let result;
      const prev = parseFloat(this.prevValue);
      const current = parseFloat(this.currentValue);
      if (isNaN(prev) || isNaN(current)) return;
      switch (this.operator) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '*':
          result = prev * current;
          break;
        case '/':
          result = prev / current;
          break;
        default:
          return;
      }
      this.currentValue = result;
      this.operator = null;
      this.prevValue = null;
    },
    evaluate() {
      this.calculate();
    },
  },
};
</script>

<style scoped>
.calculator {
  width: 300px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.display {
  background-color: #f2f2f2;
  padding: 10px;
  text-align: right;
  font-size: 24px;
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 10px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}

button {
  background-color: #e6e6e6;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #d9d9d9;
}

button.operator {
  background-color: #ff9800;
  color: #fff;
}

button.operator:hover {
  background-color: #e68a00;
}

button.span-two {
  grid-column: span 2;
}
</style> -->




<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <div class="logo">
          <img src="" alt="Logo">
          <h1>My Website</h1>
        </div>
        <ul class="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-content">
          <h2>Welcome to Our Website</h2>
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
  name: 'App',
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

.navbar {
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

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin-left: 1.5rem;
}

.burger {
  display: none;
  cursor: pointer;
}

.burger div {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 5px;
  transition: all 0.3s ease;
}

/* Main content styles */
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
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

/* Responsive styles */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .burger {
    display: block;
  }

  .hero-content h2 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }

  .features {
    flex-direction: column;
  }

  .feature-card {
    margin: 1rem 0;
  }
}

/* Burger menu animation */
.nav-active {
  transform: translateX(0%);
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.toggle .line2 {
  opacity: 0;
}

.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}
</style>