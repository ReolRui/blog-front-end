<template>
  <div>
    adwsd
    <Row type="flex" justify="center">
      <Col class-name="loing">
      <Login></Login>
      </Col>
    </Row>
  </div>
</template>
<script>
  import Login from '../components/Login'

  export default {
    name: 'app',
    components: {
      Login
    }
  }
</script>