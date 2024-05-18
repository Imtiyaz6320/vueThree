<!-- 1st defind  props:{  then call ha {{}} -->

<template>
    <div>
        <h2>child compunent</h2>
        <!-- <h1>{{ name }}</h1> -->
        <h1>{{ detils.email }}</h1>
        <button v-on:click="getData()">call Function</button>

    </div>
</template>
<script>
export default {
  watch: {
  },
    name:'childOne',
    props:{
        name:String,
        detils:Object,
        getData: Function
    },
}
</script>