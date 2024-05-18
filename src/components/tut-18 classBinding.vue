<template>
  <div>
    <h1>hello classBinding.vue</h1>
    <!-- <h2 :class="{green:colorfull ,err:true}">Home compunent</h2> -->
    <h2 :class="applyStyle">Home compunent</h2>

    <button v-on:click="colorfull = !colorfull">Chang color</button>
  </div>
</template>
<script>
export default {
  name: "ClassBinding",
  data() {
    return {
      colorfull: true,
    };
  },
  computed: {
    applyStyle() {
      return {
        green: this.colorfull,
        err: true,
        other: true,
      };
    },
  },
};
</script>

<style scoped>
h1 {
  color: orange;
}

.green {
  background-color: rgb(65, 209, 65);
  width: 200px;
  padding: 10px;
}

.err {
  color: red;
}

.other {
  font-size: 50px; /* Corrected syntax */
}
</style>
