<template>
  <div id="app">
    <router-view class="app-router-view" />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
<style src="../../assets/css/app.css"></style>
<style>
#app {
  width: 100%;
  height: 100%;
}
/* #app .app-router-view{
  width: 100%;
  height: 100%;
} */
/* #app .app-router-view{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3d;
  visibility: visible;
} */
 .tag {
      box-shadow: 0 0 2px #00ffff inset;
      background: linear-gradient(#00ffff, #00ffff) left top,
        linear-gradient(#00ffff, #00ffff) left top,
        linear-gradient(#00ffff, #00ffff) right bottom,
        linear-gradient(#00ffff, #00ffff) right bottom;
      background-repeat: no-repeat;
      background-size: 1px 6px, 6px 1px;
      background-color: rgba(0, 0, 0, 0.4);
      color: #ffffff;
      font-size:16px;
      padding:4px 10px;     
    }
   .progressBox .el-progress-bar__outer {
        border-radius: 0px !important;
    }
    .progressBox .el-progress-bar__inner {
        border-radius: 0px !important;
    }
    .el-radio__inner {
      border: 1px solid #4599D5;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #FFF;
      cursor: pointer;
      box-sizing: border-box;
  }
</style>
