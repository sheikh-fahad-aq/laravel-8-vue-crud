<template>
    <div class="row">
        <div class="col-12 md-2 text-end">
            <router-link :to='{name:"taskAdd"}' class="btn btn-primary">Create</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Task</h4>
                </div>
                <div class="card-body">
                    <div class="table-reponsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody v-if="tasks.length > 0">
                                <tr v-for="(task,key) in tasks" :key="key"> 
                                    <td>{{ task.id }}</td>
                                    <td>{{ task.title }}</td>
                                    <td>{{ task.description }}</td>
                                    <td>
                                        <router-link :to='{name:"taskEdit",params:{id:task.id}}' class="btn btn-warning">Edit</router-link>
                                        <button type="button" @click="deleteTask(task.id)" class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-if="tasks.length > 0">
                                <tr>
                                    <td col-span="4" align="center">No Tasks Found.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "tasks",
    data(){
        return {
            tasks : []
        }
    },
    mounted(){
        this.getTasks()
    },
    methods: {
        async getTasks(){
            await this.axios.get('/api/task').then(response=>{
                this.tasks = response.data
            }).catch(error=>{
                console.log(error)
                this.tasks = []
            })
        },
        deleteTasks(id){
            if(confirm("Are you sure you want to delete this task?")){
                this.axios.get(`/api/task/${id}`).then(response=>{
                    this.getTasks()
                }).catch(error=>{
                    console.log(error)
                });
            }
        }
    } 
}

</script>