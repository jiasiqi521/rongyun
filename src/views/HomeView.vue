<template>
  <div>测试i</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import im from "@/utils/RongIMLis";
export default defineComponent({
  setup() {
    console.log(im, "loaded");
  },
});
</script>
<style scoped></style>
