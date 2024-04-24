<template>
    <div>
        <h1>post api</h1>
        <input type="text" name="email" v-model="email"><input>
        <input type="text" name="password" v-model="password" />
        <button v-on:click="addUser()">Add User</button>
    </div>
</template>

<script>
export default {
    name:'fakepostApi',
    data() {
        return {
            email:'',
            password:''
        }
    },
    methods: {
        addUser(){
            console.log(this.email, this.password);
        }
    },
}
</script>