<template>
  <div>
    <Row type="flex" justify="center"><Loing></Loing></Row>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Loing from './components/Loing.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,Loing
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
