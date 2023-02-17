
export async function getUsers({commit},value){

  await fetch(`https://jsonplaceholder.typicode.com/${value}`)
  .then(response => response.json())
  .then(json => commit('setUsers',json))

}
