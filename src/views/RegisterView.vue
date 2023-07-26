<template>
  <div class="container">
    <header class="flex items-center fixed top-[24px] left-[24px]">
      <svg
        data-v-37dfd6fc=""
        viewBox="0 0 24 24"
        fill="none"
        style="font-size: 30px; height: 40px"
      >
        <path
          data-v-37dfd6fc=""
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-4.737a4.263 4.263 0 100-8.526 4.263 4.263 0 000 8.526z"
          fill="#165DFF"
        ></path>
        <path
          data-v-37dfd6fc=""
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.263 7.737H21v4.353l-.013.384h-4.75c.024-.237.026-.41.026-.41V7.737zM11.526 3.013c.207-.01.402-.013.402-.013h4.335v4.737h-4.35s-.202.004-.387.025v-4.75z"
          fill="#165DFF"
        ></path>
        <path data-v-37dfd6fc="" fill="#16D2AC" d="M15 3h6v6h-6z"></path>
      </svg>
      <span class="text-[26px]">Arco</span>
    </header>
    <div
      class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    >
      <a-form
        :model="formState"
        name="normal_login"
        class="login-form flex flex-col w-[380px] relative overflow-hidden"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <!-- 用户名 -->
        <a-form-item
          name="username"
          :rules="[
            {
              pattern: /^[a-zA-Z0-9_-]{4,16}$/, //验证一个字符串是否由4到16个字符组成，且只包含小写字母、大写字母、数字、下划线和短横线。
              required: true,
              message: '请输入用户名',
            },
          ]"
        >
          <a-input
            allow-clear
            v-model:value="formState.username"
            placeholder="请输入用户名"
            class="mt-[40px] h-[46px] text-[16px]"
          >
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>
        <!-- 邮箱 -->
        <a-form-item
          name="email"
          :rules="[
            {
              type: 'email',
              message: '邮箱输入不正确',
            },
          ]"
        >
          <a-input
            allow-clear
            placeholder="请输入邮箱"
            class="h-[46px] text-[16px]"
            v-model:value="formState.email"
          >
            <template #prefix>
              <Icon type="mail" icon="tabler:mail" />
            </template>
          </a-input>
        </a-form-item>
        <!-- 验证码 -->
        <a-form-item
          class="flex items-center justify-between w-[100%] mb-[15px]"
        >
          <a-input
            placeholder="验证码"
            class="h-[46px] text-[16px] w-[66%]"
            v-model:value="formState.code"
          />
          <a-button
            type="primary"
            style="background-color: #409eff"
            class="h-[46px] text-[18px] w-[32%]"
            >获取验证码</a-button
          >
        </a-form-item>
        <!-- 输入密码 -->
        <a-form-item
          name="pass"
          :rules="[
            {
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, //至少包含 8 个字符，其中至少包含一个字母和一个数字。
              required: true,
              message: '设置密码',
            },
          ]"
        >
          <a-input-password
            allow-clear
            v-model:value="formState.pass"
            placeholder="设置密码"
            class="h-[46px] text-[16px]"
            autocomplete="off"
          >
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>
        <!-- 确认密码 -->
        <a-form-item
          name="checkPass"
          :rules="[
            {
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              required: true,
              message: '密码输入不一致',
            },
          ]"
        >
          <a-input-password
            allow-clear
            v-model:value="formState.checkPass"
            placeholder="确认密码"
            class="h-[46px] text-[16px]"
            autocomplete="off"
          >
            <template #prefix>
              <Icon icon="iconamoon:lock-off-bold" />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item
          class="w-[100%] px-[10px] flex justify-between items-center text-[#409EFF]"
        >
          <a-checkbox
            v-model:checked="formState.remember"
            style="color: #409eff; font-size: 18px"
            >记住密码</a-checkbox
          >
          <a href="" class="login-form-forgot text-[18px]">忘记密码</a>
        </a-form-item>
        <div class="flex items-center justify-between w-[100%]">
          <a-button
            type="primary"
            style="background-color: #409eff"
            class="h-[46px] mt-[8px] text-[18px] w-[48%]"
            >注册</a-button
          >
          <a-button
            href="/LoginView"
            class="h-[46px] w-[48%] mt-[8px] text-[18px] leading-[38px]"
            >去登录</a-button
          >
        </div>
      </a-form>
    </div>
  </div>
</template>
<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  UserOutlined,
  InfoCircleOutlined,
  LockOutlined,
} from "@ant-design/icons-vue";
import type { Rule } from "ant-design-vue/es/form";
import type { FormInstance } from "ant-design-vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface FormState {
  username: string;
  pass: string;
  checkPass: string;
  remember: boolean;
  email: string;
  code: string;
}
const formRef = ref<FormInstance>();
// eslint-disable-next-line no-undef
const formState = reactive({
  username: "",
  pass: "",
  checkPass: "",
  remember: true,
  email: "",
  code: "",
});
const validateMessages = {
  types: {
    email: "邮箱输入错误",
  },
};
//验证密码
let validatePass = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("Please input the password");
  } else {
    if (formState.checkPass !== "") {
      // formRef.value.validateFields("checkPass");
    }
    return Promise.resolve();
  }
};
let validatePass2 = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("Please input the password again");
  } else if (value !== formState.pass) {
    return Promise.reject("Two inputs don't match!");
  } else {
    return Promise.resolve();
  }
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const rules: Record<string, Rule[]> = {
  pass: [{ required: true, validator: validatePass, trigger: "change" }],
  checkPass: [{ validator: validatePass2, trigger: "change" }],
};
const onFinish = (values: any) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const disabled = computed(() => {
  return !(formState.username && formState.pass);
});
</script>
<style>
.container {
  display: flex;
  height: 100vh;
  background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
}
.ant-form-item-explain-error {
  text-align: left;
  padding-left: 3px;
}
.ant-form-item-control-input-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.ant-row {
  width: 100%;
}
.ant-input-prefix {
  color: rgb(174 168 168 / 80%);
}
.ant-input-suffix {
  margin-top: -6px;
}
。ant-input-password-icon {
  margin-top: 10px !important;
}
</style>
