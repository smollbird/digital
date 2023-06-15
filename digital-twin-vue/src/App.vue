<script setup lang="ts">
// import UT from "@/three/index";
import Logo from "./components/logo.vue";
const canvas = ref<Element | null>(null);

onMounted(() => {
  // const ut = new UT(canvas.value, canvas.value.width, canvas.value.height);
  // ut.render();
  // ut.load();
});
</script>

<template>
  <div>
    <canvas ref="canvas" width="800" height="600"></canvas>
    <div class="info-panel">
      <Logo />
    </div>
  </div>
</template>

<style scoped lang="less">
.info-panel {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
