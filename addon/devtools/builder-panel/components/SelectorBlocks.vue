<template>
  <section class="container">
    <h4 class="title is-4">Selector blocks</h4>
    <section class="field is-grouped">
      <div class="control">
        <button class="button" @click="selectAll">Select All</button>
      </div>
      <div class="control">
        <button class="button" @click="selectNone">Select None</button>
      </div>
      <div class="control">
        <button class="button" @click="selectDefault">Reset to defaults</button>
      </div>
    </section>
    <section class="block">
      <div class="columns">
        <div class="column">
          <label class="label">Tag name</label>
          <div class="field">
            <div class="control is-family-monospace">
              <label class="checkbox">
                <input type="checkbox" :checked="Boolean(activeNodeData.tag)" @change="toggleTag" />
                {{ fullNodeData.tag }}
              </label>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field" v-if="fullNodeData.id">
            <label class="label">ID</label>
            <div class="control is-family-monospace">
              <label class="checkbox">
                <input type="checkbox" :checked="Boolean(activeNodeData.id)" @change="toggleId" />
                #{{ fullNodeData.id }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="block" v-if="Object.keys(fullNodeData.extras).length > 0">
      <label class="label">State</label>
      <div class="field" v-if="'isChecked' in fullNodeData.extras">
        <div class="control">
          <label class="radio">
            <input
              type="radio" name="checkedState"
              :checked="activeNodeData.extras.isChecked === true"
              @change="changeExtras('isChecked', true)"
            >
            :checked
          </label>
          <label class="radio">
            <input
              type="radio" name="checkedState"
              :checked="activeNodeData.extras.isChecked === false"
              @change="changeExtras('isChecked', false)"
            >
            :not(:checked)
          </label>
          <label class="radio">
            <input
              type="radio" name="checkedState"
              :checked="!('isChecked' in activeNodeData.extras)"
              @change="changeExtras('isChecked', undefined)"
            >
            any
          </label>
        </div>
      </div>
      <div class="field" v-if="'isDisabled' in fullNodeData.extras">
        <div class="control">
          <label class="radio">
            <input
              type="radio" name="disabledState"
              :checked="activeNodeData.extras.isDisabled === true"
              @change="changeExtras('isDisabled', true)"
            >
            :disabled
          </label>
          <label class="radio">
            <input
              type="radio" name="disabledState"
              :checked="activeNodeData.extras.isDisabled === false"
              @change="changeExtras('isDisabled', false)"
            >
            :not(:disabled)
          </label>
          <label class="radio">
            <input
              type="radio" name="disabledState"
              :checked="!('isDisabled' in activeNodeData.extras)"
              @change="changeExtras('isDisabled', undefined)"
            >
            any
          </label>
        </div>
      </div>
    </section>

    <section class="block" v-if="fullNodeData.classes.length > 0">
      <label class="label">Classes</label>
      <div class="control is-family-monospace" v-for="className in fullNodeData.classes">
        <label class="checkbox">
          <input type="checkbox"
            :checked="activeNodeData.classes.includes(className)"
            @change="changeActiveClasses(className)"
          />
          .{{ className }}
        </label>
      </div>
    </section>

    <section class="block" v-if="Object.keys(fullNodeData.attributes).length > 0">
      <label class="label">Attributes</label>
      <div class="control is-family-monospace" v-for="(attributeValue, attributeName) in fullNodeData.attributes">
        <label class="checkbox">
          <input type="checkbox"
            :checked="typeof activeNodeData.attributes[attributeName] === 'string'"
            @change="changeAttributes(attributeName)"
          />
          [{{ attributeName }}="{{ attributeValue }}"]
        </label>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent, toRaw } from 'vue'
import type { PropType } from 'vue'

import { ActiveSelectorBlocksItem, SelectedElementData } from '../types';
import { defaultSelectorBlocks } from '../utils';

export default defineComponent({
  name: 'SelectorBlocks',

  data() {
    return {};
  },

  props: {
    fullNodeData: Object as PropType<SelectedElementData>,
    activeNodeData: Object as PropType<ActiveSelectorBlocksItem>,
  },

  emits: ['change'],

  methods: {
    emitChange(changedNodeData: Partial<ActiveSelectorBlocksItem>) {
      this.$emit('change', {
        ...this.activeNodeData,
        ...changedNodeData,
      });
    },

    toggleTag() {
      this.emitChange({
        tag: this.activeNodeData.tag ? '' : this.fullNodeData.tag,
      });
    },

    toggleId() {
      this.emitChange({
        id: this.activeNodeData.id ? '' : this.fullNodeData.id,
      });
    },

    changeExtras(extraName: string, value: boolean) {
      const newExtras = {
        ...this.activeNodeData.extras,
      };
      if (typeof value !== 'undefined') {
        newExtras[extraName] = value;
      } else {
        delete newExtras[extraName];
      }
      this.emitChange({
        extras: newExtras,
      });
    },

    changeActiveClasses(className: string) {
      this.emitChange({
        classes: this.activeNodeData.classes.includes(className)
          ? this.activeNodeData.classes.filter((c: string) => c !== className)
          : [...this.activeNodeData.classes, className],
      });
    },

    changeAttributes(attributeName: string | number) {
      const newAttributes = {
        ...this.activeNodeData.attributes
      };
      if (attributeName in this.activeNodeData.attributes) {
        delete newAttributes[attributeName];
      } else {
        newAttributes[attributeName] = this.fullNodeData.attributes[attributeName];
      }
      this.emitChange({
        attributes: newAttributes,
      });
    },

    selectAll() {
      this.emitChange({
        tag: this.fullNodeData.tag,
        id: this.fullNodeData.id,
        classes: [ ...this.fullNodeData.classes ],
        attributes: { ...this.fullNodeData.attributes },
        extras: { ...this.fullNodeData.extras },
      } as ActiveSelectorBlocksItem);
    },

    selectNone() {
      this.emitChange({
        tag: '',
        id: '',
        classes: [],
        attributes: {},
        extras: {},
      } as ActiveSelectorBlocksItem);
    },

    selectDefault() {
      this.emitChange(defaultSelectorBlocks(toRaw(this.fullNodeData)));
    },
  },
});
</script>

<style scoped>
</style>
