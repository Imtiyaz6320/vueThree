<template>
  <!-- <div>
        <h1>Api call </h1>
    </div>
    <p v-for="item in list" :key="item">
    {{ item.id }} -----------   {{ item.email }}-------  {{ item.first_name }}--------  {{ item.avatar }}
    </p> -->
  <!-- <h1>User Data </h1>
    <ul class="item" v-for="item in list" :key="item.id">
        <li>{{ item.id }}</li>
        <li>{{ item.email }}</li>
        <li>{{ item.first_name }}</li>
        <li>{{ item.last_name }}</li>
        <li><img :src="item.avatar"></li>
    </ul>
     -->
  <h1>User Data</h1>
  <ul class="item-list">
    <li class="item" v-for="item in list" :key="item.id">
      <div class="item-details">
        <p>{{ item.id }}</p>
        <p>{{ item.email }}</p>
        <p>{{ item.first_name }}</p>
        <p>{{ item.last_name }}</p>
      </div>
      <img :src="item.avatar" alt="User Avatar" class="item-avatar">
    </li>
  </ul>

</template>
<script>
import axios from "axios";
export default {
  name: 'FakeApicalls',
  data() {
    return {
      list: []
    }
  },
  async mounted() {
    let result = await axios.get("https://reqres.in/api/users?page6")
    console.log("api data", result.data.data);
    this.list = result.data.data
  },
}
</script>

<style scoped>
.item-list {
  list-style-type: none;
  padding: 0;
}

.item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.item-details {
  flex-grow: 1;
  margin-right: 1rem;
}

.item-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>