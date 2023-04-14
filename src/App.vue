<template>
  <div class="kl-page--wrapper">
    <kl-header />
    <div class="kl-container">
      <div class="kl-menu">
        <kl-menu />
      </div>
      <div class="kl-content">
        <div class="content-wrapper">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import KlHeader from '@/components/system/kl-header.vue'
import KlMenu from '@/components/system/kl-menu.vue'
// import Form from '@/components/form.vue'

</script>

<style lang="scss" scoped>
@import '//at.alicdn.com/t/c/font_4013247_fqdtp5z1mwv.css';
.kl-page--wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: rgba(246, 247, 251, 0.6);
  box-shadow: 0px 60px 90px 0px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(60px);

  .kl-container {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-grow: 1;
    padding-top: 50px;

    .kl-menu {
      padding: 0 24px 24px;
      width: 285px;
      height: 100%;
      min-height: 100vh;
    }
    .kl-content {
      padding: 16px;
      width: 100%;
      background-color: #f5f5f5;
      border-radius: 8px;
      .content-wrapper {
        padding: 24px;
        width: 100%;
        min-height: 100%;
        background-color: #ffffff;
        border-radius: 8px;
      }
    }
  }
}
</style>
