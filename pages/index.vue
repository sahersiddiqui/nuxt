<template>
  <div>
    <el-button type="primary" icon="el-icon-search">{{title}}</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "dsad"
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
  fetch({ store, context }) {
    console.log(context);
    store.commit("test", "sad");
  }
};
</script>
