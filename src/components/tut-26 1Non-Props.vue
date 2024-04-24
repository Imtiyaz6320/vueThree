<template>
    <div>
        <h3 v-bind="$attrs">immtiyaz</h3>
        <h3>imo</h3>
        <h3>deflat</h3>
        <h3>jij</h3>
        <h1>{{ data }}</h1>

    </div>
</template>
<script>
export default {
    name: "UserData",
    inheritAttrs:false,
    props: {
        data: String
    }
}
</script>