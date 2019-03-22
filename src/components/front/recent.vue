
<template>
  <div class="recent">
    <h1 style="padding-bottom:2rem">最近文章</h1>
    <Timeline>
      <TimelineItem v-for="(item, index) in list" :key="index">
        <p class="time">{{ item.createdAt.split('T')[0] }}</p>
        <p :id="item.title" class="content" @click="toact">{{ item.title }}</p>
      </TimelineItem>
    </Timeline>
  </div>
</template>

<script>
import TweenMax from "gsap/TweenMax";
export default {
  data() {
    return {
      list: ""
    };
  },
  created() {
    axios.post("/recent").then(res => {
      //console.log(res.data.data);
      this.list = res.data.data;
    });
  },
  methods: {
    toact(e) {
      console.log(e);
      this.$router.push({ name: "article", params: { name: e.path[0].id } });
    }
  }
};
</script>
<style scoped>
.time {
  font-size: 18px;
  font-weight: bold;
}
.recent {
  padding-top: 5rem;
}
.content {
  cursor: pointer;
  padding-top: 10px;
  padding-left: 5px;
  font-size: 15px;
}
.content:hover {
  padding-top: 15px;

  color: #0288d1;
}
.content:active {
  color: #b3e5fc;
}
</style>
