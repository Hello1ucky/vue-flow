<script lang="ts" setup>
import type { Elements } from '@vue-flow/core'
import { VueFlow, isNode, useVueFlow } from '@vue-flow/core'

import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'

const elements = ref<Elements>([
  { id: '1', type: 'input', label: 'Node 1', position: { x: 250, y: 5 }, class: 'light' },
  { id: '2', label: 'Node 2', position: { x: 100, y: 100 }, class: 'light' },
  { id: '3', label: 'Node 3', position: { x: 400, y: 100 }, class: 'light' },
  { id: '4', label: 'Node 4', position: { x: 400, y: 200 }, class: 'light' },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3' },
])

const { onConnect, addEdges, setTransform, toObject } = useVueFlow({
  minZoom: 0.2,
  maxZoom: 4,
})

onConnect((params) => addEdges([params]))

function updatePos() {
  return elements.value.forEach((el) => {
    if (isNode(el)) {
      el.position = {
        x: Math.random() * 400,
        y: Math.random() * 400,
      }
    }
  })
}

function logToObject() {
  return console.log(toObject())
}
function resetTransform() {
  return setTransform({ x: 0, y: 0, zoom: 1 })
}
function toggleclass() {
  return elements.value.forEach((el) => (el.class = el.class === 'light' ? 'dark' : 'light'))
}
</script>

<template>
  <VueFlow v-model="elements" fit-view-on-init class="vue-flow-basic-example">
    <Background />
    <MiniMap />
    <Controls />
    <div style="position: absolute; right: 10px; top: 10px; z-index: 4">
      <button style="margin-right: 5px" @click="resetTransform">reset transform</button>
      <button style="margin-right: 5px" @click="updatePos">change pos</button>
      <button style="margin-right: 5px" @click="toggleclass">toggle class</button>
      <button @click="logToObject">toObject</button>
    </div>
  </VueFlow>
</template>
