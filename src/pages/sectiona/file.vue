<template>
  <div>
    <div class="text-h2 mt-xl text-center">Section A</div>

    <div class="mt-2xl ml-xl text-h2">Tasks</div>
    <ul class="text-h5"> 
      <li>Parent-child communication</li>
      <li>Child Parent Communication</li>
      <li>Child Child Communication</li>
    </ul>
  </div>

  <div class="flex-row">
    <div class="parent bg-blue ml-xl">
      <ChildBlock :color="childColor" />
    </div>
    
    <div class="text-h3 ml-2xl">

      <div class="text-h2">
        Parent - Child Communication
         <span v-if="childColor==='red'"
          class="text-bold text-h4 link ml-2xl"
          @click="childColor='yellow'">
          Reset color
        </span>
      </div> 
      <br>

      Initially child think her nature is yellow. <br>
      but when we
       <span class="link" @click="childColor='red'">
        click here
      </span>
      .
      parent block tell child block that her nature is red. <br>
      and child block color changes to red
    </div>
      
  </div>

  <div class="flex-row mt-xl">
    <div class="parent ml-xl" :class="parentColor==='blue'?'bg-blue':'bg-yellow '">
      <ChildBlock 
      :color="childColor2" 
      class="link" 
      :mode="1" 
      @change-parent-color="val=> parentColor=val" />
    </div>
    
    <div class="text-h3 ml-2xl">

      <div class="text-h2">
        Child-Parent Communication
         <span v-if="parentColor==='blue'"
          class="text-bold text-h4 link ml-2xl"
          @click="parentColor='yellow'">
          Reset color
        </span>
      </div> 
      <br>
      
      Initially Parent think her nature is yellow. <br>
      but when we click <span class="text-red"> Child Block</span>
      .
      child block tell parent block that her nature is blue. <br>
      and parent block color changes to blue
    </div>
      
  </div>


  <div class="flex-row mt-xl">
    <div class="parent bg-blue ml-xl" >
      <ChildBlock 
      :color="childColor2" 
      class="link" 
      :mode="2" 
      @change-child-color="val=> childColor3=val" />

      <ChildBlock2 
      :color="childColor3" 
      class="link" 
      :mode="2" 
      @change-parent-color="val=> parentColor=val" />
    </div>
    
    <div class="text-h3 ml-2xl">

      <div class="text-h2">
        Child-Child Communication
         <span v-if="childColor3==='red'"
          class="text-bold text-h4 link ml-2xl"
          @click="childColor3='yellow'">
          Reset color
        </span>
      </div> 
      <br>
      
      here parent color is blue <br>
      has two child big one is red and small one is yellow <br>
     when we click <span class="text-red"> BiG Child Block</span>
      .
      big child block tell small child block that her nature is also red. <br>
      and child block color changes to red
    </div>
      
  </div>
</template>
  
  
<script setup>
import ChildBlock from '../../components/sectiona/ChildBlock.vue';
import ChildBlock2 from '../../components/sectiona/ChildBlock2.vue';
import {ref} from 'vue'

const childColor= ref('yellow')
const childColor2= ref('red') 
const childColor3 =ref('yellow')

const parentColor =ref('yellow')

</script>

<style scoped>
.parent{
  height:200px;
  width: 200px;
  border-radius: 12px ;
}
</style>