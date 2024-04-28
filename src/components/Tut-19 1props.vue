<template>
    <h1>
        hello imtiyaz how are you
    </h1>
    <!-- <Studentttt name = "imo"/>
    <TeacherTest name = "imtiyaz"/> -->

    <!-- i wnt same name -->
    <Studentttt :name = "name"/>
    <TeacherTest :name = "name"/>
</template>

<script>
import Studentttt from './Tut-19 2props.vue'
import TeacherTest from './Tut-19 3props.vue'

export default {
    name: "propsOne",
    components :{
        Studentttt,
        TeacherTest
    },
    data() {
        return {
            name:"imtiyaz Hussain "
        }
    },
}
</script>