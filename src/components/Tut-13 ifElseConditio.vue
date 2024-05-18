<template>
  <!-- if if-else condisone -->
  <div>
    <h1 v-if="Show">if condisone</h1>
    <h1 v-else>else condisone</h1>
    <!-- <button v-on:click="Show=true">Show</button> <br><br> -->
    <button v-on:click="Show = !Show">Toggele</button>
  </div>

  <!-- loop in vuejs -->
  <div>
    <ul>
      <li v-for="item in technology" :key="item">
        {{ item }}
      </li>
    </ul>
    <br /><br />
    <ul>
      <li v-for="item in user" :key="item.email">
        Name is : {{ item.name }} and Email is : {{ item.email }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Show: false,
      technology: ["java", "php", "node", "html", "css", "vue"],
      user: [
        { name: "imtiyaz", email: "imtiyaz@gmail.com" },
        { name: "imo", email: "imtiyaz@outlook.com" },
        { name: "imti", email: "imtiyazhussain892163@gmail.com" },
        { name: "imtiyazAnsriAlam", email: "imtiyajhussain8@gmail.com" },
      ],
    };
  },
  name: "tutThirteen",
  methods: {},
};
</script>
