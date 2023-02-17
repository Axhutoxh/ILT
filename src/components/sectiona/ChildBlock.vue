<template>
<div class="child" 
:class="color==='yellow'?'bg-yellow text-blue':'bg-red text-yellow'"
@click="mode==1?emit('changeParentColor','blue'):emit('changeChildColor','red')"
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
    height: 100px;
    width: 100px;
    margin: 20px ;
    border-radius: 8px ;
}
</style>
    
    