<template>
  <div>
    <Row type="flex" justify="center"><div class="loing"><Loing></Loing></div></Row>
    
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
.loing{
  padding-top: 1rem
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
