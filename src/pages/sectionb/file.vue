<template>
  <div class="text-h2 align-center text-bold mt-xl">Section B </div>
  <div>
  

    <div class="mt-xl ml-xl text-h2">Tasks</div>
    <ul class="text-h5"> 
      <li>Need to list total users from an API in a paginated list. 
         The list can be searched and filtered The user can search and filter the user list with all parameters Must use Vuex</li>
    </ul>

 
    <form class="form-inline">
    <input type="text" class="form-control " placeholder="Search" v-model="search_filter">

   
  </form>
    <table id="secondTable">
  <thead>
    <tr>
      <th v-for="col in columns">{{(col)}}</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="row in rows">
      <td v-for="col in columns">{{row[col]}}</td>
    </tr>
  </tbody>
</table>
  <div class="flex-row mb-2xl">
				<div class="py-md">
					<button type="button" class="page-link" v-if="pagination.page != 1" @click="pagination.page?pagination.page--:0"> Previous </button>
				</div>
				
				<div class="py-md ml-2xl">
					<button type="button" @click="pagination.page++" v-if="pagination.page < totalPages" class="page-link"> Next </button>
				</div>
			</div>
  </div>
</template>
  
  
<script setup>
import {computed,onBeforeMount,onBeforeUnmount,ref} from 'vue'
import {useStore} from 'vuex'


const store = useStore()

const pagination = ref({
    perPage: 5,
    page: 1
  });

const search_filter =ref('')

const users = computed(()=>{
  return store.state.user?.usersData.map(user=>{
    return{
      id:user.id,
      name:user.name,
      username:user.username,
      email:user.email,
      address:getAddress(user.address).address,
      phone:getPhoneNumber(user.phone),
      website:user.website,
      company:user.company.name
    }
  })
})


const searchFilter =computed(()=>{
  return users?.value.filter(post=>{
    const {id,name,username,email,address,phone,website,company} = post
    var searchTerm = name+id+username+email+address+phone+website+company
    return searchTerm.toLowerCase().includes(search_filter.value.toLowerCase())
    
  })
})


const rows = computed(()=>{
  return paginate(searchFilter?.value)
})

const totalPages = computed(() => {
    return Math.ceil(
      store.state.user?.usersData?.length / pagination.value.perPage
    );
  });

const columns = computed(()=>{
  return store.state.user.usersData[0] ?Object.keys(store.state.user.usersData[0]):''
})




onBeforeMount(()=>{
store.dispatch('getUsers','users')
})




onBeforeUnmount(()=>{
  store.state.user.usersData=[]

})


function getPhoneNumber(no){
  no = no.split('x')
  return no[0]
}

function getAddress(address) {

    if (!!address) {
      const { street, city, suite, zipcode,geo } = address;
      return { 
        address:`${street}, ${suite}, ${city}, ${zipcode}`,
        geo
    };
    }
    return '-';
  }



  function paginate(posts) {
    if (posts) {
      let { page, perPage } = pagination.value;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
    }
  }

</script>
  
  
<style scoped>
table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #f5f6ff;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #29c715;
}

button.page-link {
	display: inline-block;
}

</style>  