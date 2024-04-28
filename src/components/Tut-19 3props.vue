<template>
    <h1>
       Hello your teacher name is {{ name }}
    </h1>
</template>

<script>
export default {
    name: "TeacherTest",
    props:{
        name:String
    }
}
</script>

<style scoped>
h1 {
    background-color: #e17e7e;
    color: #000;
}
</style>