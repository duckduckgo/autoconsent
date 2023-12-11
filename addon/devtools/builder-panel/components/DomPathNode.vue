<template>
  <div class="field">
    <div class="control">
      <button class="dom-path-node button is-fullwidth" :class="{'has-background-primary': isSelected}">
        <input type="checkbox" v-model="usedToggle" @click.stop>
        &nbsp;
        <span>
          {{ nodeData.tag }}{{ nodeData.id ? `#${nodeData.id.substring(0, 15)}${nodeData.id.length > 15 ? '...' : ''}` : '' }}
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { SelectedElementData } from "../types";

export default defineComponent({
  name: 'DomPathNode',
  data() {
    return {
      usedToggle: this.isUsed,
    };
  },

  watch: {
    usedToggle(newValue: boolean) {
      this.$emit('change', newValue);
    },
  },

  props: {
    nodeData: Object as PropType<SelectedElementData>,
    isSelected: Boolean,
    isUsed: Boolean,
  },

  emits: ['change'],
});
</script>

<style scoped>
.dom-path-node {
  cursor: pointer;
}
input[type=checkbox] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
