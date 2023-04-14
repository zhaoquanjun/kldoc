<template>
  <div class="menu-wrapper">
    <el-menu default-active="1" class="el-menu-vertical-demo" router :unique-opened="true" :collapse="isCollapse">
      <template v-for="menu in menus">
        <template v-if="!menu.children">
          <el-menu-item :index="menu.path" :key="menu.id">
            <template #title>
              <i class="iconfont" :class="menu.icon"></i>
              <span>{{ menu.name }}</span>
            </template>
          </el-menu-item>
        </template>
        <template v-else>
          <el-sub-menu :key="menu.id" :index="menu.path">
            <template #title>
              <i class="iconfont" :class="menu.icon"></i>
              <span>{{ menu.name }}</span>
            </template>
            <el-menu-item-group v-for="sub in menu.children" :key="sub.id">
              <el-menu-item :index="sub.path">{{ sub.name }}</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script setup>
import { ref } from 'vue'

let isCollapse = false

const menus = ref([
  {
    name: '可乐文档简介',
    id: 0,
    icon: 'icon-shiyongwendang',
    path: '/',
  },
  {
    name: 'VUE',
    id: 1,
    icon: 'icon-vuejs',
    path: '/vue',
    children: [
      {
        name: '右键菜单',
        id: 11,
        path: '/vue/context-menu',
      },
    ],
  },
  {
    name: 'JS',
    id: 2,
    icon: 'icon-js',
    path: '/js',
  },
  {
    name: 'CSS',
    id: 3,
    icon: 'icon-CSS1',
    path: '/css',
  },
])
</script>
<style lang="scss" scoped>
.menu-wrapper {
  .iconfont {
    margin-right: 14px;
    font-size: 18px;
    color: #1c1c28;
  }

  .name {
    font-size: 16px;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
