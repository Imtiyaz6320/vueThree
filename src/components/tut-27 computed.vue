<template>
    <div>
        <h1>hello is call in computed propaty </h1>
        <!-- <h1>{{(dollors*rupeeval)-discount}}</h1>  -->
        <h1>{{ getResu }}</h1>
        <h1>{{ getResult() }}</h1>

    </div>
</template>
<script>
export default {
    name: "tutComputd",
    data() {
        return {
            dollors: 100,
            rupeeval: 70,
            discount: 10
        }
    },
    computed: {
        getResu() {
            console.log("hy is call computed");
            return (this.dollors * this.rupeeval) - this.discount
        }
    },
    methods: {
        getResult() {
            console.log("hy is call methods");
            return (this.dollors * this.rupeeval) - this.discount
        }
    },
}
</script>