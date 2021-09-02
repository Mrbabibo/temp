<template>
  <div id="app">
    <router-view class="app-router-view" />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style src="../src/assets/css/app.css"></style>
<style>
#app {
  width: 100%;
  height: calc(100% - 20px);
  overflow-y: scroll;
  font-family: Microsoft YaHei;
  font-family: "微软雅黑";
}
</style>
