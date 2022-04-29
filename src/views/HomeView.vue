<template>
  <div>测试i</div>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  ComponentInternalInstance,
} from "vue";

export default defineComponent({
  setup() {
    const cns: ComponentInternalInstance | null = getCurrentInstance();
    console.log(cns, "loaded");
  },
});
</script>
<style scoped></style>
