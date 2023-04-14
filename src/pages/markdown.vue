<template>
  <div class="markdown-page">
    <v-md-editor v-model="text" height="400px" :disabled-menus="[]" placeholder="请输入markdown内容" @save="handleSave"></v-md-editor>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const text = ref('')
const preview = ref('')

const handleSave = (text, html) => {
  console.log(text, '========', html)
}
</script>
