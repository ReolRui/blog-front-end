<template>
  <div>
    <Row type="flex" justify="center">
      <Col class-name="loing">
        <Login></Login>
      </Col>
    </Row>
  </div>
</template>
<script>
import Login from "../components/Login";
import Register from "../components/Register";

export default {
  name: "app",
  components: {
    Login,
    Register
  }
};
</script>