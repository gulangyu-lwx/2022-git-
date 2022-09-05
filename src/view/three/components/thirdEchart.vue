<template>
  <div class="box">
    <div id="pie"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    // 初始化 echarts
    const initChart = () => {
      let chartDom = document.getElementById("pie");
      let myChart = echarts.init(chartDom);
      let option;
      option = {
        legend: {
          top: "2%",
          right: 0,
          textStyle:{
              color:'#01DEFF'
          }
        },
         grid: {
          left: "30%",
          right: "30%",
          bottom: "30%",
          containLabel: true,
        },
        toolbox: {
          show: true,
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: [25, 100],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 4, name: "20岁以上" },
              { value: 3, name: "25-30岁" },
              { value: 3, name: "30~35岁" },
              { value: 2, name: "30岁以上" },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    };
    onMounted(() => {
      initChart();
    });
    return {
      initChart,
    };
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  #pie {
    width: 100%;
    height: 100%;
  }
}
</style>