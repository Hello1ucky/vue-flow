<script lang="ts" setup>
import type { Elements } from '@vue-flow/core'
import { VueFlow } from '@vue-flow/core'

const initialElements: Elements = [
  { id: '1', label: '-', position: { x: 100, y: 100 } },
  { id: '2', label: 'Node 2', position: { x: 100, y: 200 } },
  { id: 'e1-2', source: '1', target: '2' },
]

const elements = ref<Elements>(initialElements)
const opts = reactive({
  bg: '#eeeeee',
  name: 'Node 1',
  hidden: false,
})

function updateNode() {
  elements.value.forEach((el) => {
    if (el.id === '1') {
      // it's important that you create a new object here in order to notify react flow about the change
      el.label = opts.name
      el.style = { backgroundColor: opts.bg }
      el.hidden = opts.hidden
    }
  })
}

onMounted(updateNode)
</script>

<template>
  <VueFlow v-model="elements" :default-zoom="1.5" :min-zoom="0.2" :max-zoom="4">
    <div class="updatenode__controls">
      <label>label:</label>
      <input v-model="opts.name" @input="updateNode" />

      <label class="updatenode__bglabel">background:</label>
      <input v-model="opts.bg" type="color" @input="updateNode" />

      <div class="updatenode__checkboxwrapper">
        <label>hidden:</label>
        <input v-model="opts.hidden" type="checkbox" @change="updateNode" />
      </div>
    </div>
  </VueFlow>
</template>

<style>
@import 'updatenode.css';
</style>
