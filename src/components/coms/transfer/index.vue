<template>
  <div class="el-transfer--warapper">
    <el-transfer
      :data="props.source"
      v-bind="attrs"
      @left-check-change="handleLeftChange"
      @right-check-change="handleRightChange"
    />
  </div>
</template>
<script setup>
import { ref, useAttrs } from 'vue'
const props = defineProps({
  source: {
    type: Array,
    default: () => {
      return []
    },
  },
  sels: {
    type: Array,
    default: () => {
      return []
    }
  }
})

const attrs = useAttrs()

const emit = defineEmits(['update:modelValue'])

const handleLeftChange = val => {
  emitResult([...attrs.modelValue, ...val])
}

const handleRightChange = val => {
  const r = attrs.modelValue.filter(vk => !val.includes(vk))
  emitResult(r)
}

const emitResult = (data) => {
  emit('update:modelValue', data)
}

</script>
