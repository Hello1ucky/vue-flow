<script setup>
import { Panel, PanelPosition, VueFlow, isNode, useVueFlow } from '@vue-flow/core'
import { nextTick, ref } from 'vue'
import { Background } from '@vue-flow/background'
import { getElements } from './utils'

const { nodes, edges } = getElements(15, 15)
const elements = ref([...nodes, ...edges])

const { onPaneReady, dimensions, fitView } = useVueFlow()

onPaneReady((i) => {
  i.fitView({
    padding: 0.2,
  })

  console.log(i.getElements.value)
})

function toggleClass() {
  return elements.value.forEach((el) => (el.class = el.class === 'light' ? 'dark' : 'light'))
}

function updatePos() {
  elements.value.forEach((el) => {
    if (isNode(el)) {
      el.position = {
        x: Math.random() * 10 * dimensions.value.width,
        y: Math.random() * 10 * dimensions.value.height,
      }
    }
  })

  nextTick(() => {
    fitView({ duration: 1000, padding: 0.5 })
  })
}
</script>

<template>
  <VueFlow v-model="elements" :min-zoom="0.1">
    <Background />

    <Panel :position="PanelPosition.TopRight">
      <button style="margin-right: 5px" @click="updatePos">update positions</button>
      <button @click="toggleClass">toggle class</button>
    </Panel>
  </VueFlow>
</template>
