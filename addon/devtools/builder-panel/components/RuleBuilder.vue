<template>
  <div>
    rule builder
    {{ currentRule }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AutoConsentCMPRule } from '../../../../lib/rules';
import { ruleTemplate } from './mock-builder-data';

export default defineComponent({
  name: 'RuleBuilder',

  data() {
    return {
      currentRule: structuredClone(ruleTemplate) as AutoConsentCMPRule,
    };
  },

  methods: {},
});
</script>

<style scoped lang="css">
/* Your component's styles go here */
</style>
