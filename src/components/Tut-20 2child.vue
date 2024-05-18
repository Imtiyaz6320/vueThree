<template>
  <div class="plk">
    <h1>calling from child copunents</h1>
    <button v-on:click="getUser(userName)">send the parnts data</button>
    <!-- getUser call in prent compo -->
  </div>
</template>
<script>
export default {
  name: "twentyChild",
  props: {
    getUser: Function,
  },
  data() {
    return {
      userName: "imtiyaz",
    };
  },
};
</script>

<style scoped>
.plk {
  background-color: #b42de9;
  color: white;
}
</style>
