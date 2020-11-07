<template>
  <div id="tab-bar">
   <slot></slot>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style scoped>
#tab-bar{
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 55px;
  display: flex;
  text-align: center;
  background-color: #5CC3E6;
}

</style>
