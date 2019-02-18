
<template>
  <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
    <FormItem label="用" prop="name">
      <Input v-model="formCustom.passwd"></Input>
    </FormItem>
    <FormItem label="邮箱" prop="email">
      <Input v-model="formCustom.name"></Input>
    </FormItem>
    <FormItem label="密码" prop="passwd">
      <Input type="password" v-model="formCustom.passwd"></Input>
    </FormItem>
    <FormItem label="重复密码" prop="passwdCheck">
      <Input type="password" v-model="formCustom.passwdCheck"></Input>
    </FormItem>
    <FormItem label="验证码" prop="code">
      <Input type="text" v-model="formCustom.age" number></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formCustom')">Submit</Button>
      <Button @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please 企鹅额ur password"));
      } else {
        if (this.formCustom.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value !== this.formCustom.passwd) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };
    const validateAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Age cannot be empty"));
      }
      // 模拟异步验证效果
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("Please enter a numeric value"));
        } else {
          if (value < 18) {
            callback(new Error("Must be over 18 years of age"));
          } else {
            callback();
          }
        }
      }, 1000);
    };

    return {
      formCustom: {
        name: "",
        passwd: "",
        passwdCheck: "",
        mail: "",
        code: ""
      },
      ruleCustom: {
        passwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
        passwdCheck: [
          { required: true, message: "请重复输入密码", trigger: "blur" },
          { validator: validatePassCheck, trigger: "blur" }
        ],
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        mail: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入邮箱验证码", trigger: "blur" },
          { validator: validateCode, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>
