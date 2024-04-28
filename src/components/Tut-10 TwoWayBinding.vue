<template>
    <div>
        <h1>tut 10</h1>
        <input type="text" v-model="count" />
        <h1>{{ count }}</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count:0
        }
    },
    name: 'tutTen',
    methods: {

    },
}
</script>