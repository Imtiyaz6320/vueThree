<template>
  <h1>hello tut-Fifteen IS Calling</h1>

  <!-- passing data in partto child  -->
  <!-- <childOne name="imtiyaz Hussain" />  -->

  <!-- passing obj in partto child  -->
  <!-- <childOne :detils='user'/>  -->

  <!-- passing Methed in partto child  -->
  <childOne :getData='getData'/> 

</template>
<script>
import  childOne  from "./Tut-15 passDataChild.vue";
export default {
    name: 'tutFifteen',
    components: {
        childOne
    },
    data() {
        return {
          user: {name:'imo',email:'imo@gmail.com'},
        }
    },
    methods: {
        getData(){
            console.log("parent Function called ");
            alert("parent Function called")
        }
    },
}
</script>