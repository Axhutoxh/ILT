<template>
<div class="main">

<div class="text-bold text-h1 align-center">InnovaLabs: Assignment</div>
<div class="mt-xl center-box border-a">
<ul class="py-xl align-center ">
    <li class="row text-semiBold text-h3" @click="()=>router.push('/section-a',()=>{})">Section A <div class="col px-md link">click here</div></li>
    <li class="row text-semiBold text-h3" @click="()=>router.push('/section-b',()=>{})">Section B <div class="col px-md link">click here</div></li>
    <li class="row text-semiBold text-h3" @click="()=>router.push('/section-c',()=>{})">Section C <div class="col px-md link">click here</div></li>
</ul>
</div>
</div>
<router-view />
</template>   

<script setup>

import { useRouter } from 'vue-router';

const router = useRouter()


</script>

<style scoped>

.main{
    width: 100%;
}
.center-box {
    width:50% !important;
    margin: 0 auto
}

</style>