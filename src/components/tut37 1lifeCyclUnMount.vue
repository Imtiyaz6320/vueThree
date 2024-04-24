<template>
    <div>
        <h1>hello</h1>
    </div>
    <button v-on:click="show = !show">compunent show and Hide</button>
    <onethirtySeven v-if="show" />
</template>
<script>
import onethirtySeven from './tut37 2lifeCyclUnMount.vue'
export default {
    name: 'thirtySeven',
    components: {
        onethirtySeven
    },
    data() {
        return {
            show: true
        }
    },
   
}
</script>