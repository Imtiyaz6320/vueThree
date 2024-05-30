<template>
  <div>
    <!--  Ciick Event. -->
    <button v-on:click="getData('1st time click')">Click Me</button>
    <button v-on:dblclick="getData('btn double time click')">
        dblclick then woking
    </button>

    <!-- Mouse Move event -->
    <h1 v-on:mousemove="getConsole()">open console then hower</h1>

    <button v-on:click="getcount()">count Increg</button>
    <h1>{{ count }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  name: "tutNine",
  methods: {
    getData(data) {
      alert(data);
    },
    getConsole() {
      console.log("HI Mouse hover call function");
    },
    getcount() {
      this.count = this.count + 1;
    },
  },
};
</script>
