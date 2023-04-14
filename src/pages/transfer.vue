<template>
  <div class="js-page">
    <transfer :source="source" v-model="sels" />
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import transfer from '@/components/coms/transfer/index.vue'
const setSource = () => {
  const r = []
  for(let i = 0; i < 16; i++) {
    r.push({
      key: i,
      label: `Option ${i}`,
    })
  }
  return r
}

const source = ref(setSource())

const sels = ref([0, 3, 5])

watch(
  () => sels.value,
  val => {
    console.log(val, 'resul ======')
  }
)
</script>
  