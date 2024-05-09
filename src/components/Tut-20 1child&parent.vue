<!-- chiled components sa prant data kaise send karna  -->
<template>
    <div class="pl">
        <h1>hello this is calling child to parent</h1>
        <h2>{{ chaildName }}</h2>
    </div>
    <twentyChild :getUser="getUserName" />
</template>
<script>
import twentyChild from './Tut-20 2child.vue'
export default {
    name: "twentyParent",
    components: {
        twentyChild
    },
    data() {
        return {
            chaildName: ""
        }
    },
    methods: {
        getUserName(name) {  // mak function send parmiter name 
            alert(name); // Shows an alert with the name
            this.chaildName = name; // Updates the chaildName data property with the received name
        }
    },
}
</script>

<style scoped>
.pl {
    background-color: #c3e51b;
    color: white;
}
</style>