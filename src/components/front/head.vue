<template>
  <div class="toplan" :class="iscl?'tou1':'tou2'">
    <Row type="flex" justify="center" align="middle">
      <Col>
        <Row class-name="top" type="flex" justify="space-around" align="middle" :gutter="200">
          <Col>
            <Row type="flex" justify="center" align="middle">
              <div class="home" @click="tohome">
                <Col span="12">
                  <h1 style="color:#0288D1">CREAT VALUE</h1>
                </Col>
              </div>
            </Row>
          </Col>
          <Col>
            <Row type="flex" align="middle" :gutter="32">
              <div v-for="(item, index) in list" :key="index">
                <Col>
                  <h2 @click="tolist" :id="item._id" class="tap">{{item.name}}</h2>
                </Col>
              </div>
            </Row>
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
  computed: {
    list() {
      return this.$store.state.list;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  created() {
    axios.post("/getlist").then(res => {
      this.$store.commit("updatelist", res.data.data);
    });
  },
  methods: {
    atlist() {
      //console.log("adwsd");
    },
    tohome() {
      this.$router.push("/");
    },
    tolist(e) {
      this.$router.push({ name: "list", params: { name: e.target.id } });
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
  min-width: 1350px;
}

.home {
  cursor: pointer;
}
.tap {
  font-size: 17px;
  color: #212121;
  cursor: pointer;
}

.tap:hover {
  color: #0288d1;
}
.tap:active {
  color: #88d8fd;
}
</style>