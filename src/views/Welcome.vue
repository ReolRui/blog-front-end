<template>
  <div>
    <Row
      type="flex"
      justify="center"
    >
      <Col
        class-name="loing"
        span="4"
      >
      <Tabs value="login">
        <TabPane
          label="登录"
          name="login"
        >
          <Login></Login>
        </TabPane>
        <TabPane
          label="注册"
          name="register"
        >
          <Register></Register>
        </TabPane>
      </Tabs>
      </Col>
    </Row>
  </div>
</template>
<script>
import Login from "../components/back/Login";
import Register from "../components/back/Register";

export default {
  components: {
    Login,
    Register
  }
};
</script>