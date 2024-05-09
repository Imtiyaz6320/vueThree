<template>
    <div>
        <br><br>
        <form>
            <label>Email :</label>
            <input type="text" placeholder="Enter Email" v-model="form.email">
            <br><br>
            <label>Password :</label>
            <input type="password" placeholder="Enter Password" v-model="form.password">
            <br><br>

            <select v-model="form.country">
                <option>India</option>
                <option>China</option>
                <option>Usa</option>
            </select>
            <br><br>
            <h3>Technolgy</h3>
            <label>java :</label>
            <input type="checkbox" value="java" v-model="form.technolgy">
            <label>javaScript :</label>
            <input type="checkbox" value="javaScript" v-model="form.technolgy">
            <label>nodejs :</label>
            <input type="checkbox" value="nodejs" v-model="form.technolgy">
            <br><br>

            <h3>Gender</h3>
            <label>Male :</label>
            <input type="radio" value="Male" name="Gender" v-model="form.gender">
            <label>Female :</label>
            <input type="radio" value="Female" v-model="form.gender" name="Gender">
            <label>Other :</label>
            <input type="radio" value="Other" v-model="form.gender" name="Gender">
            <br><br>
            <button v-on:click="login" type="button">Login</button>
        </form>
    </div>
    <p>{{ form }}</p>
</template>

<script>
export default {
    name: "LoginForm",
    data() {
        return {
            form: {
                email: '',
                password: '',
                country: '',
                technolgy: [],
                gender: ''
            }
        }
    },
    methods: {
        login() {
            console.log("Login data", this.form);
        }
    },
}
</script>
