<template>
  <div class="user">
    <h2>{{ data.name }} {{ data.email }}</h2>
    <button v-on:click="getData(data.name, data.email)">Alert Name</button>
  </div>
</template>

<script>
export default {
  name: "UsersOne",
  props: {
    data: Object,
    getData: Function,
  },
};
</script>

<style scoped>
.user {
  background-color: skyblue;
  padding: 10px;
  border-bottom: 1px solid;
  margin-bottom: 20px;
}
</style>
