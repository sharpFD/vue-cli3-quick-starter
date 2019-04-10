<template>
    <div id="app" class="theme-bright">
        <el-switch
                v-model="theme"
                active-color="#13ce66"
                inactive-color="#ff4949">
        </el-switch>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                theme: false
            }
        },
        watch:{
            theme(theme){
                if (theme){
                    document.getElementById('app').className = 'theme-dark'
                } else{
                    document.getElementById('app').className = 'theme-bright'
                }
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>