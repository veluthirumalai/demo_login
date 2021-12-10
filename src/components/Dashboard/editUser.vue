<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Edit Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateItem">
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
                        <input type="submit" class="btn btn-primary" value="Update Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default{
        data(){
            return{
                item:{}
            }
        },

        created: function(){
            this.getItem();
        },

        methods: {
            getItem()
            {
              
              let uri = 'http://localhost:4000/user/findOne/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.item = response.data;
                });
            },

            updateItem()
            {
              let uri = 'http://localhost:4000/user/update/' + this.$route.params.id;
                this.axios.put(uri, this.item).then((response) => {
                console.log("response", response)
                  this.$router.push({name: 'listUser'});
                });
            }
        }
    }
</script>