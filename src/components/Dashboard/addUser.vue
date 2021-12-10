<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>First Name:</label>
                        <input type="text" class="form-control" v-model.trim="item.first_name"/>
                    </div>
                    <div class="form-group">
                        <label>Last Name:</label>
                        <input type="text" class="form-control" v-model.trim="item.last_name" />
                    </div>
                    <div class="form-group">
                        <label>age:</label>
                        <input type="text" class="form-control" v-model.trim="item.age" />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
      return {
          item: {}
      }
  },
  methods: {
      addItem() {
            let uri = 'http://localhost:4000/user/create';
            let data = {...this.item, user_id: Math.floor(Math.random() * 100)}
            console.log("data", data)
            this.axios.post(uri, data).then((response) => {
                console.log(response.data)
                this.$router.push({name: 'listUser'});
            });
        }
    }
}
</script>