<template>
    <div>
        <h1>I am calling before Create and Create component: {{ name }}</h1>
    </div>
</template>

<script>
export default {
    name: "thirtyFive",
    data() {
        return {
            name: 'Imtiyaz Hussain'
        }
    },
    created() {
        console.log("Component is created, but not mounted yet.");
    },
    beforeMount() {
        alert("beforeMount")
        console.log("beforeMount", this.$el);
    },
    mounted() {
        alert("mounted")
        console.log("mounted", this.$el);
    }
}
</script>
