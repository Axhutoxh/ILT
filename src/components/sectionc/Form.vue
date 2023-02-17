<template>
<div class="row align-center mt-xl">
    <div >
        <div >
          <label for="name">Enter your Name</label>
          <input class="pa-sm ml-xl"   type="text" v-model="inputBlock.name" required placeholder="e.g John Doe"> 
        </div><!-- /form-group -->
        
        <div class="mt-md">
          <input class="ml-xl"   type="checkbox" v-model="inputBlock.isMinor">
          <label class="ml-xl">Is the current person minor ?</label>
        </div><!-- /form-group -->

        <div class="mt-md">
          <label for="name">Enter your BOD</label>
          <input class="pa-sm ml-xl" type="date" v-model="inputBlock.dob" :required="!inputBlock.isMinor" placeholder="e.g 01/01/2000"> 
        </div><!-- /form-group -->
        
      </div>
</div>
</template>

<script setup>
import { computed,ref } from 'vue';


const props = defineProps({
  inputBlock:{
    type:Object,
    required:true
  },
})





</script>