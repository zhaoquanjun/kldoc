<template>
  <div class="menu-wrapper">
    <el-menu default-active="1" class="el-menu-vertical-demo" router :unique-opened="true" :collapse="isCollapse">
      <template v-for="menu in menu">
        <template v-if="!menu.children">
          <el-menu-item :index="menu.path" :key="menu.id">
            <template #title>
              <i class="iconfont" :class="menu.icon"></i>
              <span>{{ menu.meta.pname }}</span>
            </template>
          </el-menu-item>
        </template>
        <template v-else>
          <el-sub-menu :key="menu.id" :index="menu.path">
            <template #title>
              <i class="iconfont" :class="menu.icon"></i>
              <span>{{ menu.meta.pname }}</span>
            </template>
            <el-menu-item-group v-for="sub in menu.children" :key="sub.id">
              <el-menu-item :index="sub.path">{{ sub.meta.pname }}</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { routes } from '@/router'

let isCollapse = false

const menu = routes.filter(vk => vk.path !== '/markdown')

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
