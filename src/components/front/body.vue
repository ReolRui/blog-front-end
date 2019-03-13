<template>
  <div>
    <Row class-name="title" type="flex" justify="center" align="middle">
      <Col>
        <h2>{{title}}</h2>
      </Col>
    </Row>
    <Row class-name="dateclass" type="flex" justify="center" align="middle">
      <Col>
        <h6>发表于：{{date}}</h6>
      </Col>
    </Row>
    <Row type="flex" justify="center" align="middle">
      <Col>
        <Card>
          <mavon-editor
            :boxShadow="yinying"
            class="md"
            :value="content"
            :subfield="prop.subfield"
            :defaultOpen="prop.defaultOpen"
            :toolbarsFlag="prop.toolbarsFlag"
            :editable="prop.editable"
            :scrollStyle="prop.scrollStyle"
          ></mavon-editor>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "",
  watch: {
    $route(to, from) {
      axios.post("/getarticle", { name: this.$route.params.name }).then(res => {
        this.$store.commit("changearticle", res.data.data);
      });
    }
  },
  data() {
    return {
      yinying: false
    };
  },
  created() {
    axios.post("/getarticle", { name: this.$route.params.name }).then(res => {
      this.$store.commit("changearticle", res.data.data);
    });
  },
  computed: {
    prop() {
      let data = {
        subfield: false, // 单双栏模式
        defaultOpen: "preview", //edit： 默认展示编辑区域 ， preview： 默认展示预览区域
        editable: false,
        toolbarsFlag: false,
        scrollStyle: true
      };
      return data;
    },
    date() {
      return this.$store.state.date;
    },
    title() {
      return this.$store.state.title;
    },
    content() {
      return this.$store.state.content;
    },
    date() {
      return this.$store.state.date;
    }
  }
};
</script>

<style scoped>
.title {
  padding-top: 5rem;
  font-size: 16px;
}
.article {
  max-width: 51rem;
  padding: 1rem;
  font-size: 17px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  letter-spacing: 3px;
  line-height: 1.8em;
  text-indent: 2em;
}
.dateclass {
  padding: 2rem;
  font-size: 20px;
}
.md {
  z-index: 1;
}
</style>