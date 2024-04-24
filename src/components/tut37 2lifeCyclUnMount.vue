<template>
    <div>
        <h1 ref="user">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, cumque odit sint ut quas at doloribus soluta ducimus voluptatem ipsa, accusantium corporis consequuntur, ad libero error architecto ab veniam blanditiis.</h1>
    </div>
</template>
<script>
export default {
    name:'onethirtySeven',
    beforeUnmount() {
        console.log("beforeUnmount", this.$refs['user']);
    },
    unmounted() {
        console.log("unmounted",this.$refs['user'])
    },
 
}
</script>