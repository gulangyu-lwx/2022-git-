<template>
  <div class="box">
    <div id="pie2"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    // 初始化 echarts
    const initChart = () => {
      let chartDom = document.getElementById("pie2");
      let myChart = echarts.init(chartDom);
      let option;
      option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "2%",
          right: 0,
          textStyle: {
            color: "#01DEFF",
          },
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "男" },
              { value: 735, name: "女" },
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
  #pie2 {
    width: 100%;
    height: 100%;
  }
}
</style>