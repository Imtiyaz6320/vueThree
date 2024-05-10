<template>
    <div>
        <h1>i am calling before Create amd Create component : {{ name }}</h1>
    </div>
</template>
<script>
export default {
    name: 'thrtyFour',
    data() {
        console.log("created");
        return {
            name: 'imtiyaz Hussain'
        }
    },
    beforeCreate() {
        // this.name=="imo"  // not woking q ki phal  beforeCreate hota hai tab creata us time  data() bhi nahi creat kiya jata hai 
        alert(" hi Imtiyaz i am call beforeCreate ")
    },
    created() {
        this.name = "imo"
        alert(" okay Imtiyaz i am call Create ")
    },
}
</script>