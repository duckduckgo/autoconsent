<template>
  <section id="builder-content" class="columns section">
    <section id="dom-path" class="column is-one-fifth container">
      <h4 class="title is-4">Selected DOM branch</h4>
      <DomPathNode
        v-for="(node, idx) in domPath"
        :nodeData="node"
        :isSelected="idx === selectedNode"
        :isUsed="activeSelectorBlocks[idx].isUsed"
        @click="selectNode(idx)"
        @change="changeNodeUsage(idx, $event)"
      />
    </section>
    <SelectorBlocks
      id="selector-blocks"
      class="column is-three-fifths"
      :fullNodeData="domPath[selectedNode]"
      :activeNodeData="activeSelectorBlocks[selectedNode]"
      @change="selectorBlockChange"
    />
    <section id="final-selector" class="column is-one-fifth container">
      <div class="field">
        <div class="control">
          <button v-if="!selectModeEnabled" class="button" @click="selectButtonClick">👆 Element picker</button>
          <button v-else class="button is-danger" @click="cancelSelectButtonClick">✋ Cancel picker</button>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <textarea id="final-selector-text" class="textarea is-family-monospace" v-model="finalSelector"></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control is-size-5">
          <span class="has-text-weight-bold">{{ matchedElements }}</span> element(s) match this selector
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button" @click="copyToClipboard">Copy to clipboard</button>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-small" @click="resetHighlight">↩️ Reset highlights</button>
        </div>
      </div>
      <form @submit.stop.prevent="debugEval">
        <label class="label">Debug zone</label>
        <div class="field is-grouped">
          <div class="control">
            <input class="input is-small" type="text" placeholder="eval expr" v-model="debugEvalExpr">
          </div>
          <div class="control">
            <button class="button is-small" type="submit">Eval</button>
          </div>
        </div>
        <pre class="help is-family-monospace">{{ debugOutput }}</pre>
      </form>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BuilderSelectedElementMessage } from "../../../../lib/messages";
import DomPathNode from "./DomPathNode.vue";
import SelectorBlocks from "./SelectorBlocks.vue";
import { ActiveSelectorBlocksItem, SelectedElementData } from "../types";
import { mockDomPath } from "./mock-builder-data";
import { unsafeEscapeSelector, initialSelectorBlocks } from "../utils";

let backgroundPageConnection: chrome.runtime.Port;

export default defineComponent({
  name: "SelectorBuilder",
  components: {
    DomPathNode,
    SelectorBlocks,
  },

  data() {
    const mockActiveSelectorBlocks = initialSelectorBlocks(mockDomPath);

    return {
      domPath: mockDomPath, // contains all the data from the dom path
      debugOutput: "",
      selectedNode: 0, // node whose details are currently shown in the builder pane
      activeSelectorBlocks: mockActiveSelectorBlocks, // items contain only the data used in the final selector
      matchedElements: 0, // number of elements that match the final selector
      finalSelector: "", // the final selector (could be computed or user-modified)
      debugEvalExpr: '', // expression to evaluate in the inspected window
      selectModeEnabled: false,
      isShuttingDown: false,
    };
  },

  computed: {
    computedSelector() {
      let selector = '';
      for (const selectorBlocks of this.activeSelectorBlocks as ActiveSelectorBlocksItem[]) {
        if (selectorBlocks.isUsed) {
          const { tag, id, classes, attributes, extras } = selectorBlocks;
          const tagSelector = tag?.toLowerCase() || "";
          const idSelector = id ? `#${id}` : "";
          const classSelector = classes?.length ? `.${classes.join(".")}` : "";
          const attributeSelector = Object.entries(attributes || {})
            .map(([key, value]) => `[${key}="${unsafeEscapeSelector(value)}"]`)
            .join("");
          const checkedStateSelector = typeof extras.isChecked === 'undefined' ? '' : extras.isChecked ? ':checked' : ':not(:checked)';
          const disabledStateSelector = typeof extras.isDisabled === 'undefined' ? '' : extras.isDisabled ? ':disabled' : ':not(:disabled)';
          selector = `${tagSelector}${idSelector}${classSelector}${attributeSelector}${checkedStateSelector}${disabledStateSelector} ${selector}`;
        }
      }
      return selector;
    },
  },

  watch: {
    computedSelector(newValue) {
      this.finalSelector = newValue;
    },
    finalSelector(newValue) {
      this.requestMatchedElements(newValue);
    },
  },

  methods: {
    reconnect() {
      // Create a connection to the background page
      backgroundPageConnection = chrome.runtime?.connect({
        name: "builder-panel",
      });
      backgroundPageConnection?.postMessage({
        type: "init",
        tabId: chrome.devtools?.inspectedWindow.tabId,
      });

      backgroundPageConnection?.onMessage.addListener(this.messageHandler);
      backgroundPageConnection?.onDisconnect.addListener(() => {
        if (!this.isShuttingDown) {
          this.reconnect();
        }
      });
    },

    messageHandler(message: BuilderSelectedElementMessage) {
      console.log("builder panel received message", message);
      this.domPath = message.nodes;
      this.activeSelectorBlocks = initialSelectorBlocks(message.nodes);
      this.selectModeEnabled = false;
    },

    evaluateScript(script: string) {
      return new Promise((resolve, reject) => {
        chrome.devtools?.inspectedWindow.eval(
          script,
          { useContentScriptContext: true },
          (result, isException) => {
            let msg = `Eval request: ${JSON.stringify(script)}\n`;
            if (isException) {
              msg += `Error: ${JSON.stringify(isException)}`;
              console.error(msg);
            } else {
              msg += `Result: ${JSON.stringify(result)}`;
              console.log(msg);
            }
            this.debugOutput = msg;
            isException ? reject(isException) : resolve(result);
          }
        );
      });
    },

    async requestMatchedElements(selector: string) {
      this.matchedElements = await this.evaluateScript(`checkSelector(${JSON.stringify(selector)})`);
    },

    async selectButtonClick() {
      console.log('enabling select mode in', chrome.devtools?.inspectedWindow.tabId);
      await this.evaluateScript('enableSelectMode()');
      this.selectModeEnabled = true;
    },

    async cancelSelectButtonClick() {
      console.log('disabling select mode in', chrome.devtools?.inspectedWindow.tabId);
      await this.evaluateScript('disableSelectMode()');
      this.selectModeEnabled = false;
    },

    resetHighlight() {
      console.log('resetting highlight in', chrome.devtools?.inspectedWindow.tabId);
      this.evaluateScript('unhighlightAll()');
    },

    selectNode(nodeIdx: number) {
      console.log("select node", nodeIdx);
      this.selectedNode = nodeIdx;
    },

    changeNodeUsage(nodeIdx: number, event: any) {
      console.log("changed node usage", nodeIdx, event);
      this.activeSelectorBlocks[nodeIdx].isUsed = !!event;
    },

    selectorBlockChange(data: Partial<SelectedElementData>) {
      console.log("selector blocks changed");
      this.activeSelectorBlocks[this.selectedNode] = data;
    },

    copyToClipboard() {
      console.log("copy to clipboard", this.finalSelector);
      navigator.clipboard.writeText(this.finalSelector);
    },

    debugEval() {
      console.log("debug eval", this.debugEvalExpr);
      this.evaluateScript(this.debugEvalExpr);
    },
  },

  mounted() {
    this.reconnect();
    this.finalSelector = this.computedSelector;
    console.log("builder panel mounted", backgroundPageConnection);
  },

  beforeUnmount() {
    this.isShuttingDown = true;
    backgroundPageConnection?.onMessage.removeListener(this.messageHandler);
    backgroundPageConnection?.disconnect();
    console.log("builder panel unmounted");
  },
});
</script>

<style lang="css" scoped>
#builder-content {
  max-height: 100dvh;
}
#dom-path,#selector-blocks,#final-selector {
  overflow: auto;
}
</style>
