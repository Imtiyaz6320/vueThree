<!-- <template> -->
    <!-- <div> -->
        <!-- <h1>tut 29 .2</h1> -->
        <!-- <h1>{{ data }}</h1> -->
    <!-- <slot></slot> -->
   
    <!-- <div>
        <slot name="check1"></slot>
    </div>
    <div>
        <slot name="check2"></slot>
    </div>
    <div>
        <slot name="check3"></slot>
    </div>
    </div> -->
<!-- </template> -->

<template>
    <div class="container ">
      <div class="card">
        <slot name="check1"></slot> <!-- Slot for the image -->
      </div>
      <div class="card">
        <slot name="check2"></slot> <!-- Slot for the heading -->
      </div>
      <div class="card">
        <slot name="check3"></slot> <!-- Slot for the paragraph -->
      </div>
    </div>
  </template>
<script>

export default {
    name: "childnineSlots",
    // props:{
    //     data:String
    // }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Spacing between cards */
  padding: 20px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: box-shadow 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
</style>