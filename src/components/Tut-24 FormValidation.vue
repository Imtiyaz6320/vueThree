<template>
    <div class="form-container">
        <form>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="text" id="email" placeholder="Enter Email" v-model="form.email">
            </div>

            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" placeholder="Enter Password" v-model="form.password">
            </div>

            <div class="form-group">
                <label for="country">Country:</label>
                <select id="country" v-model="form.country">
                    <option disabled value="">Please select one</option>
                    <option>India</option>
                    <option>China</option>
                    <option>USA</option>
                </select>
            </div>

            <div class="form-group">
                <h3>Technology</h3>
                <label><input type="checkbox" value="Java" v-model="form.technology"> Java</label>
                <label><input type="checkbox" value="JavaScript" v-model="form.technology"> JavaScript</label>
                <label><input type="checkbox" value="NodeJS" v-model="form.technology"> NodeJS</label>
            </div>

            <div class="form-group">
                <h3>Gender</h3>
                <label><input type="radio" value="Male" name="gender" v-model="form.gender"> Male</label>
                <label><input type="radio" value="Female" name="gender" v-model="form.gender"> Female</label>
                <label><input type="radio" value="Other" name="gender" v-model="form.gender"> Other</label>
            </div>

            <button v-on:click="login" type="button">Login</button>
        </form>
        <p>{{ form }}</p>
        <ul>
            <li v-for="item in error" v-bind:key="item">{{ item }} not valid</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "twentyFourValid",
    data() {
        return {
            form: {
                email: '',
                password: '',
                country: '',
                technology: [], // Ensure this matches your template
                gender: ''
            },
            error: []
        }
    },
    methods: {
        login() {
            this.error = []
            for (const item in this.form) {
                if (this.form[item] === "" || (item === "technology" && this.form[item].length === 0)) {
                    this.error.push(item)
                }
            }
            if (this.error.length === 0) {
                alert("data has been sammita")
            }
            console.log("Login data", this.form, this.error);
            console.log("error data", this.error);
        }
    },
}

</script>

<style scoped>
body {
    background-color: #f5f5f5;
    /* Light gray background for the entire page */
}

.form-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #e7f0fd;
    /* Light blue background for the form */
}

.form-group {
    margin-bottom: 20px;
}

form h3 {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="password"],
select {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
