<template>
  <div class="contextmenu-wrapper" ref="block">
    <slot></slot>
    <Teleport to="body">
      <Transition @beforeEnter="handleBeforeEnter" @enter="handleEnter" @afterEnter="handleAfterEnter">
        <div class="context-menu" :style="{ left: pos.px + 'px', top: pos.py + 'px' }" v-if="showMenu">
          <ul class="cm-list" v-size-ob="handleSize">
            <li class="cm-item" v-for="item in props.menu" :key="item.id" @click="handleClick(item)">{{ item.name }}</li>
          </ul>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import useContextMenu from './useContextMenu'
import useViewport from '@/utils/useViewport'

const props = defineProps({
  menu: {
    type: Array,
    default: () => {
      return []
    },
  },
})

const emit = defineEmits(['select'])

const block = ref(null)
const { x, y, showMenu } = useContextMenu(block)

// cm-list size
const ww = ref()
const wh = ref()
// viewport size
const { vw, vh } = useViewport()
const handleSize = ({ width, height }) => {
  ww.value = width
  wh.value = height
}

const ctxm = ref(null)
const pos = computed(() => {
  let px = x.value,
    py = y.value

  if (x.value > vw.value - ww.value) {
    px -= ww.value
  }

  if (y.value > vh.value - wh.value) {
    py = vh.value - wh.value
  }

  return {
    px,
    py,
  }
})

const handleClick = item => {
  showMenu.value = false
  emit('select', item)
}

const handleBeforeEnter = el => {
  el.style.height = 0
}

const handleEnter = el => {
  el.style.height = 'auto'
  const h = el.clientHeight
  el.style.height = 0
  requestAnimationFrame(() => {
    el.style.height = h + 'px'
    el.style.transition = '.25s'
  })
}

const handleAfterEnter = el => {
  el.style.transition = 'none'
}
</script>
<style lang="scss" scoped>
.contextmenu-wrapper {
  width: 100%;
  height: 100%;
}
</style>
