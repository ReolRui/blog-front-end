<template>
  <div class="toplan" :class="iscl?'tou1':'tou2'">
    <Row type="flex" justify="center" align="middle">
      <Col span="12">
        <Row class-name="top" type="flex" align="middle">
          <Col span="12">
            <Row type="flex" justify="center" align="middle">
              <div class="home" @click="tohome">
                <Col span="12">
                  <h1 style="color:#0288D1">CREAT VALUE</h1>
                </Col>
              </div>
            </Row>
          </Col>
          <Col span="12">
            <Menu mode="horizontal" @on-select="changepage">
              <div v-for="(item, index) in list" :key="index">
                <Submenu :name="index">
                  <template slot="title">{{item.name}}</template>
                  <div>
                    <MenuItem v-for="(ite, index) in item.list" :key="index" :name="ite">{{ite}}</MenuItem>
                  </div>
                </Submenu>
              </div>
            </Menu>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
</template>

<script>
import TweenMax from "gsap/TweenMax";
export default {
  data() {
    return { iscl: true };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  created() {
    axios.post("/getlist").then(res => {
      this.$store.commit("updatelist", res.data.data);
    });
  },
  computed: {
    list() {
      return this.$store.state.list;
    }
  },
  methods: {
    tohome() {
      this.$router.push("/");
    },
    changepage(e) {
      this.$router.push({ name: "article", params: { name: e } });
    },
    handleScroll() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 300) {
        this.iscl = false;
      } else {
        this.iscl = true;
      }
    }
  }
};
</script>


<style  scoped>
.toplan {
  padding: 1rem;
  background-color: white;
  width: 100%;

  box-shadow: 0px 1px 5px #cecaca;
}
.tou1 {
  opacity: 0.7;
}
.tou2 {
  opacity: 1;
}
.top {
  max-width: 80rem;
}
.home {
  cursor: pointer;
}
</style>