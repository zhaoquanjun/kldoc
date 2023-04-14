import { ref, onMounted, onUnmounted } from 'vue'
const vw = ref(document.documentElement.clientWidth)
const vh = ref(document.documentElement.clientHeight)

export default function () {
  onMounted(() => {
    window.addEventListener('resize', resize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resize)
  })

  const resize = () => {
    vw.value = document.documentElement.clientWidth
    vh.value = document.documentElement.clientHeight
  }

  return {
    vw,
    vh,
  }
}
