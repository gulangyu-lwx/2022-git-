<template>
  <div class="container">
    <Header></Header>
    <!-- 大屏主体 -->
    <div class="content">
      <div class="left">
        <div class="oneSection">
          <div class="topTitle">
            <img src="../../static/image/line.png" alt="" />
            <div class="title">
              <div>半决赛—女子个人2000米障碍现场直播</div>
            </div>
            <div class="other">
              <img src="../../static/image/adress.png" alt="" />
              <span>场馆</span>
            </div>
          </div>
          <div class="box"></div>
        </div>
        <div class="twoSection">
          <div class="topTitle">
            <img src="../../static/image/line.png" alt="" />
            <div class="title">实时赛况</div>
          </div>
          <div class="box">
            <div
              class="innerBox dian1"
              v-for="(item, index) in 10"
              :key="index"
            >
              <span
                >步小花在女子个人2000米障碍赛中获得第一名，创个人记步小花在女子个人2000步小花在女子个人2000米障碍赛中获得第一名，创个人记步小花在女子个人2000米障碍赛中获得第一名，创个人记录录米障碍赛中获得第一名，创个人记录录</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="section">
          <div class="topTitle">
            <img src="../../static/image/line.png" alt="" />
            <div class="title">实时赛况</div>
          </div>
          <div class="box">
            <div
              class="innerBox dian1"
              v-for="(item, index) in 35"
              :key="index"
            >
              <span
                >步小花在女子个人2000米障碍赛中获得第一名，创个人记录步小花在女子个人2000米障碍赛中获得第一名，创个人记录步小花在女子个人2000米障碍赛中获得第一名，创个人记录</span
              >
            </div>
          </div>
        </div>
      </div>
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
  padding: 0.25rem 0.19rem;
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
  .content {
    display: flex;
    margin-top: 0.22rem;
    .left {
      width: 11.8rem;
      .oneSection {
        width: 100%;
        height: 6.45rem;
        margin-bottom: 0.22rem;
        background: url(../../static/image/sectionOne.png) no-repeat;
        background-size: 100% 100%;
        padding: 0.23rem 0.14rem;
        .topTitle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          > img {
            height: 0.2rem;
            width: 3.33rem;
            position: absolute;
          }
          .title {
            // border: 1px solid red;

            font-weight: bold;
            color: #01deff;
            margin-left: 0.2rem;
            margin-top: -0.1rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
            > div:nth-child(1) {
              font-size: 0.18rem;
              font-family: Microsoft YaHei UI;
            }
          }
          .other {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: absolute;
            right: 0.74rem;
            img {
              width: 0.25rem;
              height: 0.36rem;
              margin-right: 0.2rem;
            }
            span {
              display: inline-block;
              font-size: 0.18rem;
              font-family: Microsoft YaHei UI;
              font-weight: bold;
              color: #01deff;
            }
          }
        }
        .box {
          background: #0f5b94;
          opacity: 0.68;
          width: stretch;
          height: 90%;
          margin: 0.2rem;
        }
      }
      .twoSection {
        height: 2.9rem;
        width: 100%;
        background: url(../../static/image/sectionTwo.png) no-repeat;
        background-size: 100% 100%;
        padding: 0.23rem 0.14rem;
        .topTitle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          > img {
            height: 0.2rem;
            width: 3.33rem;
            position: absolute;
          }
          .title {
            font-size: 0.18rem;
            font-family: Microsoft YaHei UI;
            font-weight: bold;
            color: #01deff;
            margin-left: 0.2rem;
            margin-top: -0.1rem;
          }
        }
        .box {
          max-height: 95%;
          overflow-y: scroll;
          margin-top: 0.08rem;
          &::-webkit-scrollbar {
            display: none;
          }
          .innerBox {
            text-align: left;
            padding: 0 0.15rem;
            height: 0.46rem;
            line-height: 0.46rem;
            width: 100%;
            background-color: rgba(138, 208, 252, 0.28);
            font-size: 0.16rem;
            font-family: Microsoft YaHei;
            font-weight: 400;
            z-index: 0;
            color: #39e5ff;
            > span {
              z-index: 99;
              font-size: 0.16rem;
            }
            &:nth-child(even) {
              background: transparent;
            }
          }
        }
      }
    }
    .right {
      margin-left: 0.22rem;
      height: 9.6rem;
      width: calc(100% - 11.8rem);
      .section {
        width: stretch;
        height: 100%;
        background: url(../../static/image/sectionThree.png) no-repeat;
        background-size: 100% 100%;
        padding: 0.23rem 0.14rem;
        .topTitle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          > img {
            height: 0.2rem;
            width: 3.33rem;
            position: absolute;
          }
          .title {
            font-size: 0.18rem;
            font-family: Microsoft YaHei UI;
            font-weight: bold;
            color: #01deff;
            margin-left: 0.2rem;
            margin-top: -0.1rem;
          }
        }
      }
      .box {
        margin-top: 0.08rem;
        max-height: 97%;
        &::-webkit-scrollbar {
          display: none;
        }
        overflow-y: scroll;
        .innerBox {
          text-align: left;
          padding: 0 0.15rem;
          height: 0.46rem;
          line-height: 0.46rem;
          width: 100%;
          font-size: 0.16rem;
          font-family: Microsoft YaHei;
          font-weight: 400;
          z-index: 0;
          color: #39e5ff;
          background-color: rgba(138, 208, 252, 0.28);
          > span {
            z-index: 99;
            font-size: 0.16rem;
          }
          &:nth-child(even) {
            background: transparent;
          }
        }
      }
    }
  }
}
</style>