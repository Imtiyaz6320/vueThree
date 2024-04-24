<template>
    <div>
        <h1 ref="counter">{{ count }}</h1>
        <button @click="incrementCount">Update Count</button>
    </div>
</template>

<script>
export default {
    name: "TutThirtysix",
    data() {
        return {
            count: 0
        }
    },
    methods: {
        incrementCount() {
            this.count++;
        }
    },
    beforeUpdate() {
        console.log("beforeUpdate", this.$refs.counter ? this.$refs.counter.textContent : 'Ref not yet updated');
    },
    updated() {
        console.log("Updated", this.$refs.counter.textContent);
    },
}
</script>
