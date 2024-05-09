<template>
    <div>
        <h1>hello this Ref </h1>
        <input type="text" ref="input" />
        <button v-on:click="getData()">Click</button>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    name: 'twentyOneRef',
    methods: {
        getData() {
            // console.log("Hello imtiyaz Hussain");
            this.$refs.input.focus()
            let val = this.$refs.input.value;
            console.log(val);
            this.$refs.input.style.color = "red"
        }
    }

}
</script>