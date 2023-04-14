<template>
  <div class="kl-header">
    <div class="font">
      <i class="iconfont icon-html5"></i>
      <div class="name">
        <h3 class="text">前端知识末节</h3>
        <p class="en">Front-end knowledge end section</p>
      </div>
    </div>
    <div class="user">
      <div class="avatar">{{ user.name?.slice(0, 1) }}</div>
    </div>
  </div>
</template>
<script setup>
const user = {
  name: '可乐',
  en: 'Coke',
}
</script>
<style lang="scss" scoped>
.kl-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  width: 100%;
  height: 72px;
  line-height: 1;
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  .font {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .iconfont {
      margin-top: 4px;
      margin-right: 8px;
      font-size: 42px;
      color: #3E7BFA;
    }

    .name {
      .text {
        font-size: 28px;
        font-weight: bold;
        line-height: 1;
        background-image: linear-gradient(60deg, #3e7bfa, #ffb8b8);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
      }

      .en {
        padding-top: 4px;
        font-size: 12px;
        color: #1c1c28;
      }
    }
  }

  .user {
    .avatar {
      font-size: 18px;
      color: #ffffff;
      width: 48px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      border-radius: 50%;
      background-image: linear-gradient(60deg, #3e7bfa, #ffb8b8);
    }
  }
}
</style>
