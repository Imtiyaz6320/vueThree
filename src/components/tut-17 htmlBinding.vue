<template>
  <div>
    <h1>{{ Text }}</h1>
  </div>
  <div v-html="tag"></div>
  <div v-html="tagOne"></div>
</template>
<script>
export default {
  name: "htmlBinding",

  data() {
    return {
      Text: "imtiyaz",
      tag: "<h1>Imtiyaz Hussain</h1>",
      tagOne: "<h1>Imtiyaz@gmail.com</h1>",
    };
  },
};
</script>
