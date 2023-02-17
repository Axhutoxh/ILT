<template>
<div class="child text-sm" 
:class="color==='yellow'?'bg-yellow text-blue':'bg-red text-yellow'"
@click="emit('changeParentColor','blue')"
>
    Child Color <br> {{ color }}
</div>    
</template>
    
    
<script setup>

const emit = defineEmits(['changeParentColor'])

const props = defineProps({
    color:{
        type:String
    },
    mode:{
        type:Number
    }
})

</script>
  
<style scoped>
.child{
    height: 50px;
    width: 50px;
    margin: 10px ;
    border-radius: 4px ;
}
</style>
    
    