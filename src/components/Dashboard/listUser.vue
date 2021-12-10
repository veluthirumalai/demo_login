<template>
  <div class="row align-items-end">
    <div class="col-10 text-end">
      <router-link :to="{name: 'addUser'}" class="btn btn btn-success">Create New</router-link>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Age</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item._id">
              <th scope="row">{{ item._id }}</th>
              <td>{{ item.first_name }}</td>
              <td>{{ item.last_name }}</td>
              <td>{{ item.age }}</td>
              <td colspan="2">
                <router-link :to="{name: 'editUser', params: { id: item._id }}" class="btn btn btn-success">Edit</router-link>
                <button class="btn btn-info"  v-on:click="deleteItem(item._id)">Delete</button>
                </td>
              </tr>
          </tbody>
        </table>
    </div>
  </div>


</template>

<script>
export default {
data(){
    return{
        items: []
    }
},
methods: {
    fetchItems()
    {
      let uri = 'http://localhost:4000/user/getAll';
      this.axios.get(uri).then((response) => {
          this.items = response.data;
      });
    },
    deleteItem(id)
    {
      let uri = 'http://localhost:4000/user/remove/' + id;
      this.items.splice(id, 1);
      this.axios.delete(uri);
    }
},
created: function()
{
    this.fetchItems();
},
}
</script>

<style>

</style>