<template>
    <div class="weather-app">
      <header>
        <h1>Weather Search</h1>
      </header>
      <form @submit.prevent="fetchWeather" aria-label="Search for weather information by city">
        <label for="city">City Name</label>
        <input id="city" type="text" v-model="city" placeholder="Enter city name" required aria-required="true" />
        <button type="submit">Search</button>
      </form>
  
      <section v-if="weather" class="weather-info">
        <h2>Weather in {{ weather.name }}</h2>
        <p>Temperature: {{ weather.main.temp }} °C</p>
        <p>Weather: {{ weather.weather[0].description }}</p>
      </section>
  
      <p v-if="error" class="error" role="alert">{{ error }}</p>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        city: '',
        weather: null,
        error: null,
      };
    },
    methods: {
      async fetchWeather() {
        try {
          // const apiKey = 'cd0b5f6eb6605a9d3aa7c83bc0c44e71';
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=cd0b5f6eb6605a9d3aa7c83bc0c44e71`
          );
          this.weather = response.data;
          this.error = null;
        } catch (err) {
          this.error = 'City not found. Please try again.';
          this.weather = null;
        }
      },
    },
  };
  </script>
  <style scoped>
  .weather-app {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  header {
    margin-bottom: 20px;
  }
  
  h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 10px;
  }
  
  form {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #555;
  }
  
  input {
    padding: 10px;
    margin-right: 10px;
    width: 70%;
    max-width: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .weather-info {
    margin-top: 20px;
    background: #e9f7fe;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    font-size: 1.5rem;
    color: #007bff;
    margin-bottom: 10px;
  }
  
  p {
    margin: 5px 0;
    font-size: 1rem;
    color: #555;
  }
  
  .error {
    color: red;
    margin-top: 20px;
    font-weight: bold;
  }
  </style>