<template>
    <div>
        <h1>Reued Component</h1>
        <ul>
            <li v-for="item in users " :key="item.name">

                <UsersOne :data="item" :getData="getData" />

                <!-- {{ item.name }} <br><br><br>
                {{ item.email }} -->
            </li>
        </ul>
        <!-- <UsersOne /> -->
    </div>
</template>

<script>
import UsersOne from "./tut-16 User.vue";
export default {
    name: "HomeOne",
    components: {
        UsersOne
    },
    data() {
        return {
            users: [
                { name: 'imtiyazHus', email: 'imtiyaz@gmail.com' },
                { name: 'imtiyazH', email: 'imtiyazhu@gmail.com' },
                { name: 'imli', email: 'imli@gmail.com' },
                { name: 'imo', email: 'imo@gmail.com' },
                { name: 'koi', email: 'koi@gmail.com' },
            ]
        }
    },
    methods: {
        getData( name,email){
            alert(`Name: ${name}, Email: ${email}`);
        }
    },
   
}
</script>

<style scoped>
h1 {
    color: orange;
}
</style>