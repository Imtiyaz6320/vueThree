<template>
    <div>
        <h1>tut 29</h1>
    </div>
    <!-- <childnineSlots  data = "imtiyaz" />
    <childnineSlots  data = "Hussain" />
    <childnineSlots  data = "hello " />
    <childnineSlots  data = "thanks" /> -->

    <!-- woking good but i want 1 componen send taxt one send image other send p then i am using slot -->

    <!-- <ChildnineSlots><h1>imtiyaz</h1></ChildnineSlots>
    <ChildnineSlots><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, possimus.</p></ChildnineSlots>
    <ChildnineSlots>
    <img src="../../../pexels-porapak-apichodilok-346885.jpg" alt="Placeholder Image" class="styled-image"/>
    </ChildnineSlots> -->

    <ChildnineSlots>
    <template v-slot:check1>
      <img src="../assets/pexels-nurseryart-346885.jpg" alt="Placeholder Image" class="styled-image"/>
    </template>
    <template v-slot:check2>
      <h1>imtiyaz</h1>
    </template>
    <template v-slot:check3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, possimus.</p>
    </template>
  </ChildnineSlots>

</template>
<script>
import ChildnineSlots from "./tut29 2slots.vue";

export default {
    name: "nineSlots",
    components: {
        ChildnineSlots
    }
}
</script>
<style>
.styled-image {
    width: 90%;
    /* Use 100% width to fill the container */
    height: auto;
    /* Maintain aspect ratio */
    border: 1px solid #ccc;
    /* Light grey border */
    padding: 9px;
    /* Padding around the image */
    display: block;
    /* Ensures no extra space below the image */
    margin: 0 auto;
    /* Center the image if container is wider */
}
</style>