import { ref, onMounted, onUnmounted } from 'vue'
export default function (cref) {
  let showMenu = ref(false)
  let x = ref(0),
    y = ref(0)

  const handleContextMenu = (e) => {
    e.preventDefault()
    e.stopPropagation();
    showMenu.value = true
    x.value = e.clientX
    y.value = e.clientY
  }

  const closeMenu = () => {
    showMenu.value = false
  }  

  onMounted(() => {
    cref.value?.addEventListener('contextmenu', handleContextMenu)
    window.addEventListener('click', closeMenu, true)
    window.addEventListener('contextmenu', closeMenu, true)
  })

  onUnmounted(() => {
    cref.value?.removeEventListener('contextmenu', handleContextMenu)
    window.removeEventListener('click', closeMenu, true)
    window.removeEventListener('contextmenu', closeMenu, true)
  })

  return {
    x,
    y,
    showMenu,
  }
}
