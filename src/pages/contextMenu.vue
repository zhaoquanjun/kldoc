<template>
  <div class="ctxmenu-page">
    <div class="kl-section">
      <h4 class="title">DEMO</h4>
      <div class="content">
        <div class="menu-demo--wrapper" ref="wrapper">
          <div class="left">
            <ctx-menu :menu="menu1" @select="handleSelect"></ctx-menu>
          </div>
          <div class="right">
            <ctx-menu :menu="menu2" @select="handleSelect"></ctx-menu>
            <div class="top">
              <ctx-menu :menu="menu3" @select="handleSelect"></ctx-menu>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="kl-section">
      
    </div>
  </div>
</template>
<script setup>
import CtxMenu from '@/components/coms/ctxMenu/index.vue'
const menu1 = [
  {
    name: '粘贴',
    id: 'paste',
  },
  {
    name: '复制',
    id: 'copy',
  },
  {
    name: '增加',
    id: 'add',
  },
  {
    name: '删除',
    id: 'delete',
  },
]
const menu2 = [
  {
    name: '一点点',
    id: '1',
  },
  {
    name: '2点点',
    id: '2',
  },
  {
    name: '三点点',
    id: '3',
  },
  {
    name: '四点点',
    id: '4',
  },
]
const menu3 = [
  {
    name: '花花',
    id: 'huahua',
  },
  {
    name: '啦啦啦',
    id: 'lala',
  },
  {
    name: '嘎嘎嘎',
    id: 'gaga',
  },
  {
    name: '啧啧啧',
    id: 'zeze',
  },
]


const handleSelect = item => {
  console.log(item, 11111)
}
</script>
<style lang="scss" scoped>
.ctxmenu-page {
  .menu-demo--wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 4px;
    .left,
    .right {
      width: 50%;
      height: 500px;
    }
    .left {
      background-color: aquamarine;
    }
    .right {
      position: relative;
      .top {
        position: absolute;
        top: 100px;
        left: 30px;
        width: 80%;
        height: 250px;
        background-color: bisque;
      }
    }
  }
}
</style>
