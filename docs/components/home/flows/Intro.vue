<script lang="ts" setup>
import { Handle, Position, VueFlow, useVueFlow } from '@vue-flow/core'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import confetti from 'canvas-confetti'
import colors from 'windicss/colors'
import { Background } from '@vue-flow/background'
import { cheer, fireworks } from './confetti'
import Heart from '~icons/mdi/heart'

const breakpoints = useBreakpoints(breakpointsTailwind)

const dark = ref(false)

const animatedBackground = ref(false)

onMounted(() => {
  const html = document.getElementsByTagName('html')![0]

  const observer = new MutationObserver(() => {
    dark.value = html.classList.contains('dark')
  })

  observer.observe(html, {
    attributes: true,
    attributeOldValue: true,
    attributeFilter: ['class'],
  })
})

const initialEdges = [
  {
    id: 'eintro-examples',
    sourceHandle: 'a',
    source: 'intro',
    target: 'examples',
    animated: true,
    style: { strokeWidth: 4, stroke: '#ef467e' },
  },
  {
    id: 'eintro-documentation',
    sourceHandle: 'a',
    source: 'intro',
    target: 'documentation',
    animated: true,
    style: { strokeWidth: 4, stroke: '#f97316' },
  },
  {
    id: 'eintro-acknowledgement',
    sourceHandle: 'a',
    source: 'intro',
    target: 'acknowledgement',
    animated: true,
    style: { strokeWidth: 4, stroke: '#0ea5e9' },
  },
]
const { onNodeClick, getNodes, findNode, setEdges, updateNodeInternals, dimensions, onNodesInitialized } = useVueFlow({
  nodes: [
    { id: 'intro', type: 'box', position: { x: 0, y: 0 } },
    { id: 'examples', type: 'box', position: { x: -50, y: 400 } },
    { id: 'documentation', type: 'box', position: { x: 300, y: 400 } },
    { id: 'acknowledgement', type: 'box', position: { x: 150, y: 500 } },
  ],
  edges: initialEdges,
  elementsSelectable: true,
  panOnDrag: false,
  zoomOnScroll: false,
  zoomOnDoubleClick: false,
  zoomOnPinch: false,
  preventScrolling: false,
  elevateEdgesOnSelect: true,
})

const clickInterval = ref()
const clicks = ref(0)
const disabled = ref(false)

const confettiColors = Object.values(colors).flatMap((color) => {
  if (typeof color === 'string') return color
  else return Object.values(color).flatMap((c) => c)
})

onNodeClick(async ({ node }) => {
  if (node.id === 'intro') {
    if (disabled.value) return

    animatedBackground.value = !animatedBackground.value

    if (clickInterval.value) {
      clearInterval(clickInterval.value)
    }

    clickInterval.value = setInterval(() => {
      clearInterval(clickInterval.value)
      clicks.value = 0
    }, 1000)

    clicks.value++
    if (clicks.value < 10) {
      confetti({
        startVelocity: 25,
        spread: 360,
        angle: 270,
        origin: { y: 0.1 },
        colors: confettiColors,
      })
    } else if (clicks.value < 20) {
      await cheer(['#10b981', dark.value ? '#ffffff' : '#000000'])
    } else if (clicks.value === 20) {
      disabled.value = true
      await fireworks(confettiColors)
      disabled.value = false
    } else {
      clicks.value = 0
    }
  }
})

onNodesInitialized(setElements)

const el = templateRef<HTMLDivElement>('el', null)

function setElements() {
  const offsetX = dimensions.value.width / 2
  const offsetY = dimensions.value.height / 4

  if (breakpoints.isSmaller('md')) {
    const mainNode = findNode('intro')!

    getNodes.value.forEach((node) => {
      switch (node.id) {
        case 'intro':
          if (node.dimensions.width >= dimensions.value.width) {
            node.width = dimensions.value.width - 50
          } else {
            node.width = node.dimensions.width
          }

          node.position = {
            x: offsetX - ((node.width as number) ?? node.dimensions.width) / 2,
            y: offsetY - node.dimensions.height / 2,
          }
          break
        case 'examples':
          node.position = {
            x: offsetX - node.dimensions.width / 2,
            y: mainNode.position.y + mainNode.dimensions.height * 1.5,
          }
          break
        case 'documentation':
          node.position = {
            x: offsetX - node.dimensions.width / 2,
            y: mainNode.position.y + mainNode.dimensions.height * 2 + 50,
          }
          break
        case 'acknowledgement':
          node.position = {
            x: offsetX - node.dimensions.width / 2,
            y: mainNode.position.y + mainNode.dimensions.height * 3,
          }
          break
      }
    })

    setEdges(() => {
      return [
        {
          id: 'eintro-examples',
          sourceHandle: 'a',
          source: 'intro',
          target: 'examples',
          animated: true,
          style: { strokeWidth: 4, stroke: '#ef467e' },
        },
        {
          id: 'eexamples-documentation',
          source: 'examples',
          target: 'documentation',
          animated: true,
          style: { strokeWidth: 4, stroke: '#f97316' },
        },
        {
          id: 'edocumentation-acknowledgement',
          source: 'documentation',
          target: 'acknowledgement',
          animated: true,
          style: { strokeWidth: 4, stroke: '#0ea5e9' },
        },
      ]
    })
  } else {
    getNodes.value.forEach((node) => {
      const mainNode = findNode('intro')!
      switch (node.id) {
        case 'intro':
          node.width = undefined
          node.position = { x: offsetX - node.dimensions.width / 2, y: offsetY - node.dimensions.height / 2 }
          break
        case 'examples':
          node.position = {
            x: mainNode.position.x - node.dimensions.width / 2,
            y: mainNode.position.y + mainNode.dimensions.height * 1.5,
          }
          break
        case 'documentation':
          node.position = {
            x: mainNode.position.x + mainNode.dimensions.width - node.dimensions.width / 2,
            y: mainNode.position.y + mainNode.dimensions.height * 1.5,
          }
          break
        case 'acknowledgement':
          node.position = {
            x: offsetX - node.dimensions.width / 2,
            y: mainNode.position.y + mainNode.dimensions.height * 2,
          }
          break
      }
    })

    setEdges(initialEdges)
  }

  nextTick(() => {
    updateNodeInternals()
  })
}
const { stop } = useResizeObserver(el, useDebounceFn(setElements, 5))
onBeforeUnmount(stop)

function scrollTo() {
  const el = document.getElementById('acknowledgement')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const animationClassNames = ['checker-gb', 'checker-op', 'checker-yg', 'checker-ss']

function shuffle(a: any[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function createAnimationDurations() {
  return animationClassNames.map((className) => {
    const duration = 5 + Math.random() * 5

    return {
      className,
      duration,
    }
  })
}

const animations = ref<{ className: string; duration: number }[]>(shuffle(createAnimationDurations()))
</script>

<template>
  <VueFlow ref="el">
    <XyzTransition xyz="fade down ease-out-back duration-10" mode="out-in">
      <Background v-if="animatedBackground">
        <template #pattern-container="{ id }">
          <pattern :id="id" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <rect
              :class="animations[0].className"
              :style="{ '--animation-duration': `${animations[0].duration}s` }"
              x="0"
              y="0"
              width="50"
              height="50"
            />
            <rect
              :class="animations[1].className"
              :style="{ '--animation-duration': `${animations[1].duration}s` }"
              x="0"
              y="100"
              width="50"
              height="50"
            />
            <rect
              :class="animations[2].className"
              :style="{ '--animation-duration': `${animations[2].duration}s` }"
              x="100"
              y="0"
              width="50"
              height="50"
            />
            <rect
              :class="animations[3].className"
              :style="{ '--animation-duration': `${animations[3].duration}s` }"
              x="100"
              y="100"
              width="50"
              height="50"
            />
          </pattern>
        </template>
      </Background>
    </XyzTransition>
    <XyzTransition xyz="fade down ease-out-back duration-20" mode="out-in">
      <Background
        v-if="!animatedBackground"
        variant="lines"
        :pattern-color="dark ? '#ffffff' : '#000000'"
        :size="0.7"
        :gap="100"
      />
    </XyzTransition>

    <template #node-box="props">
      <template v-if="props.id === 'intro'">
        <div class="box max-w-[500px]">
          <div class="intro px-4 py-2 shadow-lg rounded-md border-2 border-solid border-black">
            <div class="font-mono flex flex-col gap-4 p-4 items-center text-center">
              <h1 class="text-2xl lg:text-4xl !my-0 !pt-0 font-bold">Vue Flow</h1>
              <h2 class="text-lg lg:text-xl font-normal !border-0">
                The customizable Vue 3 component bringing interactivity to flowcharts and graphs.
              </h2>
            </div>
            <Handle id="a" type="source" :position="Position.Bottom" />
          </div>
        </div>
      </template>
      <template v-else-if="props.id === 'documentation'">
        <div class="flex">
          <a class="intro-link group bg-[#f15a16]" href="/guide/"> Read The Documentation </a>
        </div>
        <Handle type="target" :position="Position.Top" />
        <Handle class="block md:hidden" type="source" :position="Position.Bottom" />
      </template>
      <template v-else-if="props.id === 'examples'">
        <div class="flex">
          <a class="intro-link group bg-[#ef467e]" href="/examples/"> Check The Examples </a>
        </div>
        <Handle type="target" :position="Position.Top" />
        <Handle class="block md:hidden" type="source" :position="Position.Bottom" />
      </template>
      <template v-else-if="props.id === 'acknowledgement'">
        <div class="flex" @click="scrollTo">
          <button class="intro-link group bg-sky-500"><Heart class="text-red-500" /> Acknowledgement</button>
        </div>
        <Handle type="target" :position="Position.Top" />
      </template>
    </template>
  </VueFlow>
</template>

<style>
.checker-gb {
  animation: fill-green-blue var(--animation-duration) alternate infinite;
}

.checker-gb path {
  animation: fill-green-blue var(--animation-duration) alternate infinite;
}

.checker-op {
  animation: fill-orange-purple var(--animation-duration) alternate infinite;
}

.checker-op path {
  animation: fill-orange-purple var(--animation-duration) alternate infinite;
}

.checker-yg {
  animation: fill-yellow-green var(--animation-duration) alternate infinite;
}

.checker-yg path {
  animation: fill-yellow-green var(--animation-duration) alternate infinite;
}

.checker-ss {
  animation: fill-sky-red var(--animation-duration) alternate infinite;
}

.checker-ss path {
  animation: fill-sky-red var(--animation-duration) alternate infinite;
}

@keyframes fill-green-blue {
  0% {
    @apply fill-transparent;
  }
  35% {
    @apply fill-green-500/50;
  }
  65% {
    @apply fill-transparent;
  }
  100% {
    @apply fill-blue-500/50;
  }
}

@keyframes fill-orange-purple {
  0% {
    @apply fill-transparent;
  }
  35% {
    @apply fill-orange-500/50;
  }
  65% {
    @apply fill-transparent;
  }
  100% {
    @apply fill-purple-500/50;
  }
}

@keyframes fill-yellow-green {
  0% {
    @apply fill-transparent;
  }
  35% {
    @apply fill-yellow-500/50;
  }
  65% {
    @apply fill-transparent;
  }
  100% {
    @apply fill-green-500/50;
  }
}

@keyframes fill-sky-red {
  0% {
    @apply fill-transparent;
  }
  35% {
    @apply fill-sky-500/50;
  }
  65% {
    @apply fill-transparent;
  }
  100% {
    @apply fill-red-500/50;
  }
}

.intro {
  @apply cursor-pointer
  bg-green-500
  text-white
  transform
  transition-transform
  duration-300
  hover:(ring ring-white);
}

.intro-link {
  @apply flex
  gap-3
  items-center
  p-4
  shadow-lg
  transform
  transition-transform
  duration-300
  hover:(scale-102)
  transition-colors
  ease-in-out
  rounded-lg
  text-white
  font-semibold
  text-lg;
}
</style>
