<template>
    <div>
        <h1>tut28 Watchers.vue</h1>
        <h1>{{ count }}</h1>
        <button v-on:click="increment"> + </button>
        <button v-on:click="decrement"> - </button>
    </div>
</template>

<script>
export default {
    name: "watchssEight",
    data() {
        return {
            count: 0
        };
    },
    methods: {
        increment() {
            this.count += 1;
        },
        decrement() {
            this.count -= 1;
        }
    },
    watch: {
        count(newValue, oldValue) {
            if (newValue > 10) {
                console.log(`Count exceeded 10, resetting from ${newValue} to 10`);
                this.count = 0; // Set to max limit if it exceeds 10
            } else if (newValue < 0) {
                console.log(`Count dropped below 0, resetting from ${newValue} to 0`);
                this.count = 10; // Set to min limit if it goes below 0
            } else {
                // Example usage of oldValue, for demonstration
                console.log(`Count changed from ${oldValue} to ${newValue}`);
            }
        }
    }
}
</script>
