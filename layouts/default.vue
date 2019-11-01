<template>
  <div>
    <el-container>
      <el-header>
        <el-menu mode="horizontal" class="menu-nav">
          <el-menu-item index="1">Home</el-menu-item>
          <el-menu-item index="3">About</el-menu-item>
          <el-menu-item index="4">Contact Us</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <nuxt />
      </el-main>
      <el-footer>Copyright @ 2019</el-footer>
    </el-container>
  </div>
</template>
<style lang="scss" src="~/assets/css/main.scss"></style>