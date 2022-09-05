<template>
  <div class="container" style="">
    <!-- 大屏头部 -->
    <Header></Header>
    <div class="content">
      <div class="left">
        <div class="section_one">
          <div class="top_title">
            <img src="../../static/image/line.png" alt="" />
            <div class="title">参赛代表数：30</div>
            <div class="other">总人数：50</div>
          </div>
          <Table :talbeData="talbeData.talbeOne"></Table>
        </div>
        <div class="section_two">
          <div class="top_title">
            <img src="../../static/image/line.png" alt="" />
            <div class="title">实时赛况</div>
          </div>
          <Table :talbeData="talbeData.talbeTwo"></Table>
        </div>
      </div>
      <div class="right">
        <div class="section_one">
          <div class="top_title">
            <img src="../../static/image/line.png" alt="" />
            <div class="title">参赛代表数：30</div>
            <div class="other">总人数：50</div>
          </div>
          <Table :talbeData="talbeData.talbeThree"></Table>
        </div>
        <div class="section_two">
          <div class="top_title">
            <img src="../../static/image/line.png" alt="" />
            <div class="title">赛事直播</div>
          </div>
          <div class="other">
            <img src="../../static/image/photo.jpg" alt="" />
            <div>
              <div class="text dian3">半决赛—女子个人2000米障碍现场直播</div>
              <div class="address">
                <img
                  src="../../static/image/adress.png"
                  alt=""
                />半决赛—女子个人2000米障碍现场直播
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../../components/MyHeader.vue";
import Table from "./components/table.vue";

const talbeData = {
  talbeOne: {
    header: ["比赛时间", "项目", "比赛场地", "状态"],
    row: [
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
    ],
  },
  talbeTwo: {
    row: [
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1", 30],
    ],
  },
  talbeThree: {
    header: ["比赛时间", "项目", "比赛场地"],
    row: [
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1"],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1"],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1"],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1"],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1"],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1"],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1"],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1"],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1"],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1"],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1"],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1"],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1"],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1"],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1"],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1"],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1"],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1"],
      ["9:35 - 10:35", "女子个人—2000米障碍", "场馆1"],
    ],
  },
};
</script>

<style lang="less" scoped>

.container {
  padding: 0.26rem;
  width: 100%;
  height: 100%;
  .content {
    margin-top: 0.22rem;
    display: flex;
    .left {
      width: 13.96rem;

      .section_one {
        width: 100%;
        height: 7rem;
        background: url(../../static/image/a.png) no-repeat;
        background-size: 100% 100%;
        margin-bottom: 0.22rem;
        padding: 0.23rem 0.14rem;
        overflow: hidden;

        .top_title {
          display: flex;
          > img {
            height: 0.2rem;
            width: 3.33rem;
            position: absolute;
          }
          .title,
          .other {
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
      .section_two {
        width: 100%;
        height: 2.24rem;
        background: url(../../static/image/c.png) no-repeat;
        background-size: 100% 100%;
        padding: 0.23rem 0.14rem;
        overflow: hidden;
        .top_title {
          display: flex;
          > img {
            height: 0.2rem;
            width: 3.33rem;
            position: absolute;
          }
          .title {
            // border: 1px solid red;
            font-size: 0.18rem;
            font-family: Microsoft YaHei UI;
            font-weight: bold;
            color: #01deff;
            margin-left: 0.2rem;
            margin-top: -0.1rem;
          }
        }
      }
    }
    .right {
      margin-left: 0.22rem;
      width: calc(100% - 11.96rem);
      .section_one {
        width: 100%;
        height: 7rem;
        background: url(../../static/image/b.png) no-repeat;
        background-size: 100% 100%;
        margin-bottom: 0.22rem;
        padding: 0.23rem 0.14rem;
        overflow: hidden;
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
      .section_two {
        width: 100%;
        height: 2.24rem;
        background: url(../../static/image/d.png) no-repeat;
        background-size: 100% 100%;
        padding: 0.23rem 0.14rem;
        .top_title {
          display: flex;
          > img {
            height: 0.2rem;
            width: 3.33rem;
            position: absolute;
          }
          .title {
            // border: 1px solid red;
            font-size: 0.18rem;
            font-family: Microsoft YaHei UI;
            font-weight: bold;
            color: #01deff;
            margin-left: 0.2rem;
            margin-top: -0.1rem;
          }
        }
        .other {
          height: 100%;
          width: 100%;
          padding: 0.26rem;
          display: flex;
          img {
            width: 1.98rem;
            height: 1.28rem;
            margin-right: 0.29rem;
          }
          > div {
            width: calc(100% - 1.98rem);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            font-size: 0.16rem;
            font-family: Microsoft YaHei UI;
            font-weight: 400;
            color: #01deff;
            line-height: 0.24prem;
            .text {
            }
            .address {
              img {
                width: 0.15rem;
                height: 0.2rem;
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
  }
}
</style>