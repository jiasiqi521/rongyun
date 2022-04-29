<template>
  <div>测试i</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import useCurrentInstance from "@/utils/im";

export default defineComponent({
  setup() {
    const { proxy } = useCurrentInstance();
    console.log(proxy, "loaded");
  },
});
</script>
<style scoped></style>
