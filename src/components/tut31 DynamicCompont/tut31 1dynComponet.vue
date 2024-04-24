<template>
    <div>
        <h1>hello imtiyaz this call Dynamic Component</h1>
    </div>
    <button @click="tab='javaOne'">Java Loding..</button>
    <button @click="tab='nodeTwo'">Node Loding..</button>
    <button @click="tab='phpThree'">php Loding..</button>

    <!-- <javaOne/>
    <nodeTwo/>
    <phpThree/> -->
    <component :is="tab"/>
    </template>

<script>
import javaOne from "./java.vue";
import nodeTwo from "./node.vue";
import phpThree from "./php.vue";


export default {
    name:"tut31DynCom",
    components:{
        javaOne,
        nodeTwo,
        phpThree
    },
    data() {
        return {
            tab:"javaOne"
        }
    },
}
</script>

<style scoped>
h1{
background-color: #533d3d;
color: rgb(235, 238, 63);
text-align: center;
border: 2rem;
}
</style>