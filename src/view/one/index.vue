<template>
  <div class="container">
    <!-- 大屏头部 -->
    <Header></Header>
    <div class="section_one">
      <div class="msg">全部</div>
      <div class="main">
        <span v-for="(item, index) in 20" :key="index">场馆场馆1</span>
      </div>
    </div>
    <div class="section_two">
      <div class="msg">全部</div>
      <div class="main">
        <span v-for="(item, index) in 30" :key="index">监控</span>
        <span v-for="(item, index) in 2" :key="index">监控2</span>
      </div>
    </div>
    <div class="content">
      <div
        class="innder_content"
        v-for="(item, index) in 12"
        :key="index"
      ></div>
    </div>
  </div>
</template>

<script setup>
import Header from "../../components/MyHeader.vue";
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 0.26rem;
  .header {
    font-size: 1rem;
    height: 1rem;
    width: 100%;
    background: url(../../static/image/header.png) no-repeat;
    background-size: 100% 100%;
    .time {
      float: right;
      height: 0.3rem;
      font-family: FZZongYi-M05S;
      font-weight: bold;
      color: #39e5ff;
      text-shadow: 0.02rem 0.06rem 0.17rem rgba(255, 255, 255, 0.18);
      display: flex;
      align-items: center;
      margin-right: 1.35rem;
      margin-top: 0.4rem;
      span {
        margin: 0.15rem;
        font-size: 0.32rem;
      }
      div {
        height: 0.52rem;
        padding: 0 0.08rem;
        background: #084f7c;
        opacity: 0.82;
        margin: 0 0.095rem;
        font-size: 0.32rem;
        font-family: FZZongYi-M05S;
        font-weight: bold;
        color: #39e5ff;
        line-height: 0.52rem;
      }
    }
  }
  .section_one,
  .section_two {
    margin-top: 0.24rem;
    width: 100%;
    height: 0.57rem;
    background-color: rgba(138, 208, 252, 0.12);
    display: flex;
    justify-content: flex-start;
    .msg {
      font-size: 0.18rem;
      font-family: Microsoft YaHei UI;
      font-weight: bold;
      text-align: center;
      line-height: 0.57rem;
      overflow: hidden;
      width: 0.7rem;
      color: #01deff;
      background-color: rgba(138, 208, 252, 0.28);
    }
    .main {
      max-width: calc(100% - 0.7rem);
      line-height: 0.57rem;
      font-size: 0.18rem;
      color: #01deff;
      overflow-y: hidden;
      overflow-x: overlay;
      white-space: nowrap;
      transition: all 0.3s;
      &::-webkit-scrollbar {
        opacity: 0;
      }
      span {
        margin: 0 0.2rem;
      }
    }
  }
  .content {
    margin-top: 0.24rem;
    height: 7.96rem;
    width: 100%;
    padding: 0.2% 0.4%;
    background: url(../../static/image/1.png) no-repeat;
    background-size: 100% 100%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(4,1fr);
    gap: .1%;
    .innder_content {
      margin: 0.1rem 0.1rem;
      height: 2.4rem;
      background: #0f5b94;
      opacity: 0.68;
    }
  }
}
</style>