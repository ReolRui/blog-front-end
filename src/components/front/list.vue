<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <Row type="flex" justify="center" align="middle">
        <Col>
          <div class="box case-content">
            <div class="title">
              <h5 @click="topage" :id="item.title">{{item.title}}</h5>
            </div>

            <p @click="topage" :id="item.title" class="p">{{item.content}}</p>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  computed: {},
  watch: {
    async $route(to, from) {
      let res = await axios.post("/getlists", { id: this.$route.params.name });
      this.list = res.data.data;
    }
  },
  data() {
    return { list: "" };
  },
  async created() {
    let res = await axios.post("/getlists", { id: this.$route.params.name });
    this.list = res.data.data;
  },
  methods: {
    topage(e) {
      console.log(e);
      this.$router.push({
        name: "article",
        params: { name: e.target.id }
      });
    }
  }
};
</script>

<style scoped>
.p {
  margin: 15px;
  position: relative;
  line-height: 18px;
  height: 36px;
  overflow: hidden;
}
.p::after {
  content: "...";
  font-weight: bold;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0 20px 1px 45px;
  /*为了展示更好的效果*/
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(255, 255, 255, 0)),
    to(white),
    color-stop(50%, white)
  );
  background: -moz-linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    white 50%,
    white
  );
  background: -o-linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    white 50%,
    white
  );
  background: -ms-linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    white 50%,
    white
  );
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    white 50%,
    white
  );
}
.card {
  margin-top: 3rem;
  border-radius: 10px;
  border: 1px solid #03a9f4;
}
.title {
  padding: 10px;
  color: white;
  background-color: #03a9f4;
  font-size: 17px;
}
.box {
  cursor: pointer;
  width: 500px;
  height: 100px;
  margin: 50px auto;
  background-color: #fff;
}

.case-content {
  position: relative;
  -webkit-box-shadow: 0 1px 4px rgba(66, 66, 66, 0.3),
    0 0 40px rgba(121, 118, 118, 0.1) inset;
}

.case-content:before,
.case-content:after {
  z-index: -1;
  content: "";
  background-color: #bcbbc2;
  position: absolute;
  top: 50%;
  bottom: 0;
  left: 10px;
  right: 10px;
  -webkit-box-shadow: 0 0 20px #a8a8a8;

  border-radius: 100px/10px;
}
</style>