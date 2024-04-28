<template>
    <!-- Vue Js Get input filed value -->
    <div>
        <!-- <input type="text" placeholder="enter email" v-model="email"> <br> <br>
        <input type="Password" placeholder="enter Password" v-model="Password">
        <br><br>
        <button v-on:click="getData()" type="button">Get Values</button> -->
    </div>

    <!-- Vue Js Get checkbox & Radio btn value -->
    <div>
        <h3>checkbox</h3>
        <label for="java"> java </label>
       <input type="checkbox" value="java" id="java" v-model="technolage">

       <label for="php"> php </label>
       <input type="checkbox" value="php" id="php" v-model="technolage">

       <label for="Node"> Node </label>
       <input type="checkbox" value="Node" id="Node" v-model="technolage">

       <br>
       <br>
       <br>
       <h2>Who i am </h2>
       <label for="Student">Student</label>
       <input type="radio" name="who" id="Student" v-model="whot" value="Student"/>

       <label for="developer">developer</label>
       <input type="radio" name="who" id="developer" v-model="whot" value="developer"/>
       
       <label for="Hicker">Hicker</label>
       <input type="radio" name="who" id="Hicker" v-model="whot" value="Hicker"/>


       <h2>who i am : {{ whot }}</h2>
       <h3>Selected technolage : {{ technolage }}</h3>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: null,
            Password: null,
            technolage:[],
            whot:null
        }
    },
    name: 'tutEleven',
    methods: {
        getData() {
            console.log("value", this.email, this.Password);
        }
    },
}
</script>