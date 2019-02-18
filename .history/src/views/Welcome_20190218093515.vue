<template>
  <div>
    <Row type="flex" justify="center">
      <Col class-name="loing">
        <Tabs value="register">
          <TabPane label="登录" name="login">
            <Login></Login>
          </TabPane>
          <TabPane label="注册" name="register">标签二的内容</TabPane>
        </Tabs>
      </Col>
    </Row>
  </div>
</template>
<script>
import Login from "../components/Login";

export default {
  name: "app",
  components: {
    Login
  }
};
</script>