<template>
    <div class="user-form">
      <!-- Form with prevent modifier to stop page reload on submit -->
      <form @submit.prevent="handleSubmit">
        
        <!-- Input field for name with trim modifier to remove leading/trailing whitespace -->
        <div>
          <label for="name">Name:</label>
          <input id="name" v-model.trim="userData.name" placeholder="Your Name">
        </div>
        
        <!-- Input field for age with lazy and number modifiers -->
        <!-- lazy: Updates data on change event (e.g., losing focus) -->
        <!-- number: Converts valid input to a number -->
        <div>
          <label for="age">Age:</label>
          <input id="age" v-model.lazy.number.trim="userData.age" placeholder="Your Age" type="number">
        </div>
        
        <button type="submit">Submit</button>
      </form>
      
      <!-- Displaying bound data -->
      <div class="output">
        <p>Name: {{ userData.name }}</p>
        <p>Age: {{ userData.age }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // userData object to hold form data
        userData: {
          name: '',
          age: null,
        },
      };
    },
    methods: {
      handleSubmit() {
        // Alert to display submitted data (for demonstration)
        alert(`Submitted Name: ${this.userData.name}, Age: ${this.userData.age}`);
      },
    },
  };
  </script>
  
  <style>
  /* Simple styling for clarity */
  .user-form div {
    margin-bottom: 10px;
  }
  </style>
  