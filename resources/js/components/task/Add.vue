<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Add Task</h4>
                </div>
                <div class="card-body">
                    <div class="table-reponsive">
                        <form @submit.prevent="create">
                            <div class="col-12 md-2">
                                <div class="form-group">
                                    <label>Title</label>
                                    <input type="text" class="form-control" v-model="task.title" />
                                </div>
                            </div>
                            <div class="col-12 md-2">
                                <div class="form-group">
                                    <label>Description</label>
                                    <input type="text" class="form-control" v-model="task.description" />
                                </div>
                            </div>
                            <div class="col-12 md-2">
                                <button type="submit" class="btn btn-primary"></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "add-task",
    data(){
        return {
            task: {
                title:"",
                description:"",
            }
        }
    },
    methods: {
        async create(){
            await this.axios.post('/api/task',this.category).then(response=>{
                this.$router.push({name:"taskList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    } 
}

</script>