<template>
  <SelectorBuilder v-if="isBuilderPanelActive || true" />
  <RuleBuilder v-else />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SelectorBuilder from "./components/SelectorBuilder.vue";
import RuleBuilder from "./components/RuleBuilder.vue";

export default defineComponent({
  name: "Autoconsent Builder Devtools Panel",
  components: {
    SelectorBuilder,
    RuleBuilder,
  },

  data() {
    return {
      isBuilderPanelActive: false,
    };
  },
});
</script>

<style lang="css" scoped>

</style>
