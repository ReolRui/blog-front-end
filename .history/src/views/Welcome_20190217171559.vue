<template>
  <div>as
  adwsd
  <Row type="flex" justify="center"><div class="loing"><Loing></Loing></div></Row>
    <Loing></Loing>
     <router-view></router-view>
  </div>
</template>
<script>

import Login from '../components/Login.vue'

export default {
  name: 'app',
  components: {
     Login
  }
}
</script>