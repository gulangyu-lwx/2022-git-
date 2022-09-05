<template>
  <div class="container">
    <!-- 大屏头部 -->
    <Header></Header>
    <div class="content">
      <div class="left">
        <div class="section_one">
          <div class="top_title">
            <img src="../../static/image/line.png" alt="" />
            <div class="title">各地代表队人数分布统计</div>
          </div>
          <div class="pic">
              <FirstEchart></FirstEchart>
          </div>
        </div>
        <div class="section_two">
          <div class="top_title">
            <img src="../../static/image/line.png" alt="" />
            <div class="title">各地代表队年龄分布统计</div>
          </div>
           <div class="pic">
              <ThirdEchart></ThirdEchart>
          </div>
        </div>
      </div>
      <div class="middle">
        <div class="section">
          <div class="top_title">
            <img src="../../static/image/line.png" alt="" />
            <div class="title">各代表队参赛详情</div>
            <div class="other">参赛代表数：30</div>
            <div class="other">总人数：50</div>
          </div>
          <Table class="table" :talbeData="talbeData.talbeOne"></Table>
        </div>
      </div>
      <div class="right">
        <div class="section_one">
          <div class="top_title">
            <img src="../../static/image/line.png" alt="" />
            <div class="title">各代表队参赛人员性别分布详情</div>
          </div>
          <div class="pic">
                <SecondEchart></SecondEchart>
          </div>
        </div>
        <div class="section_two">
          <div class="top_title">
            <img src="../../static/image/line.png" alt="" />
            <div class="title">各项目参赛人数TOP10</div>
          </div>
          <div class="pic">
            <FourEchart></FourEchart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../../components/MyHeader.vue";
import Table from "./components/table.vue";
import FirstEchart from "./components/firstEchart.vue";
import ThirdEchart from "./components/thirdEchart.vue";
import SecondEchart from "./components/secondEchart.vue";
import FourEchart from "./components/fourEchart.vue";
const talbeData = {
  talbeOne: {
    header: ["队伍名称", "获奖情况", "队伍人数"],
    row: [
      ["9:35 - 10:35", "女子个人—2000米障碍", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", 30],
    ],
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 0.26rem;
  .content {
    display: flex;
    justify-content: space-between;
    padding: 0.26rem 0;
    > div {
      height: 9.16rem;
    }
    .left {
      width: 5.9rem;
      .section_one {
        width: 100%;
        height: 4.73rem;
        background: url(../../static/image/bgc1.png) no-repeat;
        background-size: 100% 100%;
        padding: 0.23rem 0.14rem;
        .top_title {
          display: flex;
          > img {
            height: 0.2rem;
            width: 3.33rem;
            position: absolute;
          }
          .title,
          .other {
            // border: 1px solid red;
            font-size: 0.18rem;
            font-family: Microsoft YaHei UI;
            font-weight: bold;
            color: #01deff;
            margin-left: 0.2rem;
            margin-top: -0.1rem;
          }
          .other {
            margin-left: 0.4rem;
          }
        }
        .pic {
          width: 100%;
          height: 100%;
        }
      }
      .section_two {
        width: 100%;
        height: calc(100% - 4.93rem);
        background: url(../../static/image/bgc2.png) no-repeat;
        background-size: 100% 100%;
        margin-top: 0.24rem;
        padding: 0.23rem 0.14rem;
        .top_title {
          display: flex;
          > img {
            height: 0.2rem;
            width: 3.33rem;
            position: absolute;
          }
          .title,
          .other {
            // border: 1px solid red;
            font-size: 0.18rem;
            font-family: Microsoft YaHei UI;
            font-weight: bold;
            color: #01deff;
            margin-left: 0.2rem;
            margin-top: -0.1rem;
          }
          .other {
            margin-left: 0.4rem;
          }
        }
         .pic {
          width: 100%;
          height: 100%;
        }
      }
    }
    .middle {
      width: calc(100% - 11.8rem);
      margin: 0 0.24rem;
      .section {
        width: 100%;
        height: 100%;
        background: url(../../static/image/bgc3.png) no-repeat;
        background-size: 100% 100%;
        padding: 0.23rem 0.14rem;
        .top_title {
          display: flex;
          > img {
            height: 0.2rem;
            width: 3.33rem;
            position: absolute;
          }
          .title,
          .other {
            // border: 1px solid red;
            font-size: 0.18rem;
            font-family: Microsoft YaHei UI;
            font-weight: bold;
            color: #01deff;
            margin-left: 0.2rem;
            margin-top: -0.1rem;
          }
          .other {
            margin-left: 0.4rem;
          }
        }
      }
    }
    .right {
      width: 5.9rem;
      .section_one {
        width: 100%;
        height: 4.73rem;
        background: url(../../static/image/bgc4.png) no-repeat;
        background-size: 100% 100%;
        padding: 0.23rem 0.14rem;
        .top_title {
          display: flex;
          > img {
            height: 0.2rem;
            width: 3.33rem;
            position: absolute;
          }
          .title,
          .other {
            // border: 1px solid red;
            font-size: 0.18rem;
            font-family: Microsoft YaHei UI;
            font-weight: bold;
            color: #01deff;
            margin-left: 0.2rem;
            margin-top: -0.1rem;
          }
          .other {
            margin-left: 0.4rem;
          }
        }
         .pic {
          width: 100%;
          height: 100%;
        }
      }
      .section_two {
        width: 100%;
        height: calc(100% - 4.93rem);
        background: url(../../static/image/bgc5.png) no-repeat;
        background-size: 100% 100%;
        margin-top: 0.24rem;
        padding: 0.23rem 0.14rem;
        .top_title {
          display: flex;
          > img {
            height: 0.2rem;
            width: 3.33rem;
            position: absolute;
          }
          .title,
          .other {
            // border: 1px solid red;
            font-size: 0.18rem;
            font-family: Microsoft YaHei UI;
            font-weight: bold;
            color: #01deff;
            margin-left: 0.2rem;
            margin-top: -0.1rem;
          }
          .other {
            margin-left: 0.4rem;
          }
        }
         .pic {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>