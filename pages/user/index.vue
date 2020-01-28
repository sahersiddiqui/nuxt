<template>
  <div>
    <el-row>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "hello"
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          title: "new",
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  },
  methods: {
    asyncData({
      isDev,
      route,
      store,
      env,
      params,
      query,
      req,
      res,
      redirect,
      error
    }) {
      console.log("das");
    }
  }
};
</script>