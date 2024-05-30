<template>
  <h1>Tut-7 Interpolation is come</h1>
  <p>{{ 5 + 5 }}</p>
  <!-- {{  }}   Interpolation -->
  <!-- <p>{{ "hello".length }}</p> -->

  <!-- Pass data script to the template -->
  <p>Email {{ email }}</p>
  <p>Mobile {{ Mobile }}</p>
  <p>Name {{ getName() }}</p>
</template>

<script>
export default {
  props: {},
  name: "HomePageNew",
  data() {
    return {
      email: "imtiyaz6320@gmail.com",
      Mobile: 9262226744,
      getName: function () {
        return "imtiyaz hussain";
      },
    };
  },
};
</script>
