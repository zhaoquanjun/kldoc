<template>
  <div class="contextmenu-wrapper" ref="block">
    <slot></slot>
    <Teleport to="body">
      <Transition @beforeEnter="handleBeforeEnter" @enter="handleEnter" @afterEnter="handleAfterEnter">
        <div class="context-menu" :style="{ left: x + 'px', top: y + 'px' }" v-if="showMenu">
          <ul class="cm-list">
            <li class="cm-item" v-for="item in props.menu" :key="item.id" @click="handleClick(item)">{{ item.name }}</li>
          </ul>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import useContextMenu from './useContextMenu'

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

const handleClick = item => {
  showMenu.value = false
  emit('select', item)
}

const handleBeforeEnter = (el) => {
  el.style.height = 0
}

const handleEnter = (el) => {
  el.style.height = 'auto'
  const h = el.clientHeight
  el.style.height = 0
  console.log(h)
  requestAnimationFrame(() => {
    el.style.height = h + 'px'
    el.style.transition = '.25s'
  })
}

const handleAfterEnter = (el) => {
  el.style.transition = 'none'
}
</script>
<style lang="scss" scoped>
.contextmenu-wrapper {
  width: 100%;
  height: 100%;
}
</style>
