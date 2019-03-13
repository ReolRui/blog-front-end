<template>
  <div>
    <Row type="flex" justify="center" class-name="edit-title">
      <Col span="12">
        <Input v-model="title" size="large" placeholder="请输入标题"></Input>
      </Col>
    </Row>
    <Row>
      <Col span>
        <div class="edit_container">
          <mavon-editor
            ref="md"
            @imgAdd="$imgAdd"
            @imgDel="$imgDel"
            :toolbars="toolbars"
            v-model="content"
          />
        </div>
      </Col>
    </Row>
    <Row type="flex" justify="space-around" :gutter="24" class-name="edit-foote" align="middle">
      <Col span="5">
        <Poptip trigger="hover" content="切换选择模式">
          <Icon @click="addlei" type="ios-swap" size="25" class="add"/>
        </Poptip>
      </Col>
      <Col span="10">
        <Input v-if="!switchs" v-model="lei" placeholder="请输入新建类别" style="width: 200px"/>
        <Select @on-open-change="refresh" v-else v-model="lei" clearable style="width:200px">
          <Option v-for="item in leiList" :value="item.name" :key="item._id">{{item.name}}</Option>
        </Select>
      </Col>
      <Col span="5">
        <Button type="primary" @click="uploadimg">{{btntext}}</Button>
      </Col>
    </Row>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
const Axios = require("axios");
export default {
  components: {
    quillEditor
  },
  computed: {
    atid() {
      return this.$store.state.atid;
    },
    content: {
      get() {
        return this.$store.state.content;
      },
      set(value) {
        this.$store.commit("updatectt", value);
      }
    },
    title: {
      get() {
        return this.$store.state.title;
      },
      set(value) {
        this.$store.commit("updatettl", value);
      }
    },
    lei: {
      get() {
        return this.$store.state.lei;
      },
      set(value) {
        this.$store.commit("updatelei", value);
      }
    },
    userId() {
      return this.$store.state.userid;
    },
    btntext() {
      return this.switchs ? "发表" : "添加";
    },

    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  data() {
    return {
      img_file: [],
      toolbars: {
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code

        htmlcode: true, // 展示html源码

        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */

        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true // 右对齐
      },

      switchs: true,
      leiList: ""
    };
  },
  created() {},
  methods: {
    $imgAdd(pos, $file) {
      this.img_file[pos] = $file;
    },
    $imgDel(pos) {
      delete this.img_file[pos];
    },
    uploadimg($e) {
      const instance = Axios.create();
      let formdata = new FormData();
      for (var _img in this.img_file) {
        formdata.append(_img, this.img_file[_img]);
        console.log(this.img_file[_img]);
      }
      instance({
        url: "http://localhost:3000/addimg",
        method: "post",
        data: formdata
      }).then(res => {
        /**
         * 例如：返回数据为 res = [[pos, url], [pos, url]...]
         * pos 为原图片标志（0）
         * url 为上传后图片的url地址
         */
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        for (var img in res) {
          // $vm.$img2Url 详情见本页末尾
          //$vm.$img2Url(img[0], img[1]);
        }
      });
    },
    refresh() {
      axios.post("/getlei", { userid: this.userId }).then(res => {
        this.leiList = res.data.data;
        console.log(this.lei);
      });
    },

    addlei() {
      this.switchs = !this.switchs;
      this.lei = "";
    },
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    commit() {
      if (!this.switchs) {
        if (!this.lei) {
          this.$Message.error("麻烦输入类别");
        } else {
          axios
            .post("/addlei", { lei: this.lei, userid: this.userId })
            .then(res => {
              if (res.data.code == 200) {
                this.switchs = !this.switchs;
                this.$Message.success("类别添加好了");
                this.refuselist();
              } else {
                this.$Message.error(res.data.msg);
              }
            })
            .catch(res => {
              this.$Message.error("网络错误");
            });
        }
      } else {
        if (!this.content) {
          this.$Message.error("麻烦写个字");
        } else if (!this.lei) {
          this.$Message.error("麻烦选个类");
        } else if (!this.title) {
          this.$Message.error("麻烦写标题");
        } else {
          let data = {
            lei: this.lei,
            content: this.content,
            title: this.title,
            userid: this.userId,
            atid: this.atid
          };
          //判断更新还是新建
          if (this.$store.state.ishas) {
            axios.post("/updatearticle", data).then(res => {
              this.$Message.success(res.data.msg);
              this.refuselist();
            });
          } else {
            axios.post("/newarticle", data).then(res => {
              if (res.data.code == 201) {
                this.$Message.error(res.data.msg);
                return;
              }
              this.refuselist();
              this.$Message.success(res.data.msg);
            });
          }
        }
      }
    },
    refuselist() {
      setTimeout(() => {
        axios.post("/getlist").then(res => {
          this.$store.commit("updatelist", res.data.data);
        });
      }, 500);
    }
  }
};
</script>
<style>
.edit-title {
  padding: 2rem;
}
.edit-foote {
  padding-top: 2rem;
}

.add {
  color: #0288d1;
  cursor: pointer;
}
.add:hover {
  color: #b3e5fc;
}
.add:active {
  color: #05a7ff;
}
</style>
