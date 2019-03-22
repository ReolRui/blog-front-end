<template>
  <div>
    <Row>
      <Col span="3">
      <Sidebar></Sidebar>
      </Col>
      <Col span="21">
      <Row>
        <Col>
        <Head></Head>
        </Col>
      </Row>
      <Row>
        <Col
          offset="5"
          span="14"
        >
        <Card class="edit">
          <Edit></Edit>
        </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        <Foote></Foote>
        </Col>
      </Row>
      </Col>
    </Row>
  </div>
</template>

<script>
import Head from "../components/back/Head";
import Sidebar from "../components/back/Sidebar";
import Foote from "../components/back/Foote";
import Edit from "../components/back/Edit";

export default {
  name: "",
  components: {
    Head,
    Sidebar,
    Foote,
    Edit
  },
  data() {
    return {};
  },
  created() {
    axios.post("/index").then(res => {
      this.$store.commit("setUserId", res.data.data.userid);
    });
  }
};
</script>

<style scoped>
.ibody {
  padding: 2rem;
  padding-bottom: 10rem;
}

.edit {
  margin-top: 2rem;
  min-width: 500px;
  max-width: 1000px;
}
</style>