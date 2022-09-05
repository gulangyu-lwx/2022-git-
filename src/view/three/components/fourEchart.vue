<template>
  <div class="box">
    <div id="bar4"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { onMounted } from '@vue/runtime-core';
export default {
    
  setup() {
    // 初始化 echarts
    const initChart = () => {
      let chartDom = document.getElementById("bar4");
      let myChart = echarts.init(chartDom);
      let option;
      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        // legend: {
        //   data: ["人数"],
        //   right: "5%",
        //   top: 0,
        //   textStyle:{
        //       color:'#F5AEAE'
        //   }
        // },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top:'5%',
          containLabel: true,
        },
        toolbox: {
          show: true,
        },
        yAxis: [
          {
            type: "category",
            data: ["乒乓球", "羽毛球", "篮球", "足球", "武术", "棒球", "游泳", "游泳"],
            axisTick: {
              alignWithLabel: true, //不显示刻度线
              show: false,
            },
            axisLine: {
              show: true, // 是否显示坐标轴轴线
              symbolSize: [10, 15], // 轴线两端箭头大小，数值一表示宽度，数值二表示高度
              lineStyle: {
                color: "#50C7E5", // 坐标轴线线的颜色
                width: "1", // 坐标轴线线宽
                type: "solid", // 坐标轴线线的类型（'solid'，实线类型；'dashed'，虚线类型；'dotted',点状类型）
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        xAxis: [
          {
            type: "value",
            axisLine: {
              show: true, // 是否显示坐标轴轴线
              symbolSize: [10, 15], // 轴线两端箭头大小，数值一表示宽度，数值二表示高度
              lineStyle: {
                color: "#50C7E5", // 坐标轴线线的颜色
                width: "1", // 坐标轴线线宽
                type: "solid", // 坐标轴线线的类型（'solid'，实线类型；'dashed'，虚线类型；'dotted',点状类型）
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "人数",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390,390, 330, 220],
            itemStyle: {
              color: "#23CDD4",
            },
          },
        ],
      };

      option && myChart.setOption(option);
    };
    onMounted(()=>{
        initChart()
    })
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
  #bar4 {
    width: 100%;
    height: 100%;
  }
}
</style>