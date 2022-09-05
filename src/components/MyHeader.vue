<template>
    <div class="header">
      <div class="time">
        <span>倒计时</span>
        <div>1</div>
        <div>0</div>
        <div>0</div>
        <span>天</span>
      </div>
    </div>
</template>

<script>
export default {
    setup () {

        return {}
    }
}
</script>

<style lang="less" scoped>
.header {
    font-size: 1rem;
    height: 1rem;
    width: 100%;
    background: url(../static/image/header.png) no-repeat;
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
</style>