<template>
  <div>
    <Row type="flex" justify="center">
      <Tabs>
        <TabPane label="登录" name="login">
          <Login></Login>sadadhuikhih
        </TabPane>
        <TabPane label="注册" name="register">
          <Register></Register>
        </TabPane>
      </Tabs>
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