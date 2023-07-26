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
        <div class="flex flex-col items-start">
          <p
            class="text-[32px] leading-[32px] text-[#1d2129] font-[500] mb-[11px]"
          >
            登录 Arco
          </p>
          <p class="text-[19px] leading-[24px] text-[#86909c]">
            内部项目管理系统
          </p>
        </div>
        <a-form-item
          name="username"
          :rules="[
            {
              pattern: /^[a-zA-Z0-9_-]{4,16}$/, //验证一个字符串是否由4到16个字符组成，且只包含小写字母、大写字母、数字、下划线和短横线。
              required: true,
              message: '请输入4到16个字符的用户名',
            },
          ]"
        >
          <a-input
            allow-clear
            v-model:value="formState.username"
            placeholder="请输入4到16个字符的用户名"
            class="mt-[40px] h-[46px] text-[16px]"
          >
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
          name="password"
          :rules="[
            {
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, //至少包含 8 个字符，其中至少包含一个字母和一个数字。
              required: true,
              message: '请输入至少8字符密码,包含数字和字母',
            },
          ]"
        >
          <a-input-password
            allow-clear
            v-model:value="formState.password"
            placeholder="请输入密码"
            class="h-[46px] text-[16px]"
          >
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
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
        <a-button
          type="primary"
          style="background-color: #409eff"
          class="h-[46px] mt-[8px] text-[18px]"
          >登录</a-button
        >
        <a-button href="/RegisterView" class="h-[46px] mt-[8px] text-[18px]"
          >注册</a-button
        >
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
import type { SizeType } from "ant-design-vue/es/config-provider";
// const value = ref<string>("");
// const size = ref<SizeType>("large");
// const userName = ref<string>("");
// const checked = ref(true);
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
const formState = reactive<FormState>({
  username: "",
  password: "",
  remember: true,
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
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
  margin-top: -7px;
}
.ant-input-password-icon {
  margin-top: 6px !important;
}
</style>
