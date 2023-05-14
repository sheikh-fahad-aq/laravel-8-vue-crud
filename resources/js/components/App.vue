<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand" href="#">Fahad Ahmed Qureshi Developer</router-link>
                <div class="collapse navbar-collapse">
                    <router-link exact-active-class="active" to="/" class="nav-item nav-link">Home</router-link>
                    <router-link exact-active-class="active" to="/task" class="nav-item nav-link">Task</router-link>
                </div>
            </div>
        </nav>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>
<script>
    export default {
        
    }
</script>