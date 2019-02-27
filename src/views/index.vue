<template>
  <div>
    <Row type="flex" justify="center">
      <Col class-name span="4">{{x}}</Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      x: 0
    };
  },
  created: function() {
    // `this` 指向 vm 实例
    axios.post("/test").then(res => {
      this.x = res.data.data.x;
    });
  }
};
</script>

<style>
</style>