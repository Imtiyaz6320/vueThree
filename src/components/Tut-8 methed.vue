<template>
  <h1>{{ email }}</h1>
  <h1>Name:{{ getName("imtitaz") }}</h1>
  <h1>
    all:{{ getData().email }} Name:
    {{ getData().name }}
  </h1>
</template>

<script>
export default {
  name: "tutEight",
  data() {
    return {
      email: "imtiyaz6320@gmail.com",
    };
  },
  methods: {
    getName(name) {
      return name;
    },
    getData() {
      return {
        name: "imtiyaz Hussain",
        email: this.email,
      };
    },
  },
};
</script>