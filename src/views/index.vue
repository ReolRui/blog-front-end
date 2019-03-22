<template class="ibody">
  <div>
    <div class="tou">
      <Row
        type="flex"
        justify="center"
      >
        <Col span="24">
        <Head></Head>
        </Col>
      </Row>
    </div>
    <Row>
      <Toutu></Toutu>
    </Row>
    <Row>
      <Col span="24">
      <router-view></router-view>
      </Col>
    </Row>
    <Row>
      <Foote></Foote>
    </Row>
  </div>
</template>

<script>
import Body from "../components/front/body";
import Foote from "../components/front/foote";
import Head from "../components/front/head";
import Toutu from "../components/front/toutu";
export default {
  components: {
    Head,
    Toutu,
    Foote,
    Body
  },

  data() {
    return {};
  }
};
</script>

<style scoped>
.ibody {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  position: relative;
}

.tou {
  position: fixed;
  top: 0px;
  z-index: 999;
  width: 100%;
}
</style>