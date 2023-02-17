<template>
  <div class="text-h2 align-center text-bold mt-xl">Section C</div>
  <div class="mt-xl ml-xl text-h2">Tasks</div>
    <ul class="text-h5"> 
      <li>Need to list total users from an API in a paginated list. 
         The list can be searched and filtered The user can search and filter the user list with all parameters Must use Vuex</li>
    </ul>
<div v-for="(block,index) in form" :key="index">
    <Form  :inputBlock="block" class="center-box border-a pa-md" />
    <div v-if="formErrorMessage&& issueBlock.includes(index)" class="text-caption text-red py-md text-center">{{ formErrorMessage }}</div>
    <div v-if="form.length-1===index">
    <button class="btn btn-primary align-center mt-xl" @click="onAddBlock">Add Block</button>
    <button class="btn btn-primary align-center mt-xl" @click="onSubmit">{{ !formSubmitted?'Submit':'Submitted' }}</button>
  </div>
  </div>

</template>
  
  
<script setup>
import {ref,watch} from 'vue'
import Form from '../../components/sectionc/Form.vue'


const form =ref([
  {
    name:'',
    isMinor:false,
    dob:''
  }, 
])

const formErrorMessage = ref('');
const formSubmitted =ref(false)

const issueBlock =ref([])

watch(
    () => form.value.length,
    val => {
      formErrorMessage.value = '';
    }
  );


function onSubmit(){

  form.value.forEach((val,index)=>{
  const {name,isMinor,dob} =val
  if(!name){
      formErrorMessage.value = 'Please fill the required field'
      issueBlock.value.push(index)
      return
    }

    if(name&&isMinor&&!dob){
      formErrorMessage.value = 'DOB is required in case isMinor CheckBox is Enable'
      issueBlock.value.push(index)
    return
    }

    issueBlock.value = issueBlock.value.filter(item => item !== index)
    if(!issueBlock.value.length){
      formErrorMessage.value = ''
      console.log('ALL GOOD')
      formSubmitted.value = true
    }

  
})}



function onAddBlock(){

  if(form.value.length){
form.value.forEach((val,index)=>{
  const {name,isMinor,dob} =val
  if(!name){
      formErrorMessage.value = 'Please fill the required field'
      issueBlock.value.push(index)
      return
    }

    if(name&&isMinor&&!dob){
      formErrorMessage.value = 'DOB is required in case isMinor CheckBox is Enable'
      issueBlock.value.push(index)
    return
    }

    issueBlock.value = issueBlock.value.filter(item => item !== index)
    if(!issueBlock.value.length){
    form.value.push(  {
    name:'',
    isMinor:false,
    dob:''
  },)}
})

  }

}
</script>
  
<style scoped>
.center-box {
    width:50% !important;
    margin: 0 auto
}

.border-red{
    border: 1px solid red;
}

</style>
  