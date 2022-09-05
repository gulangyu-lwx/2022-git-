<template>
  <div class="table">
    <table width="100%" class="table">
      <thead v-if="talbeData && talbeData.header">
        <tr>
          <th
            v-for="(item, index) in talbeData && talbeData.header"
            :key="index"
          >
            {{ item }}
          </th>
        </tr>
      </thead>
      <tr v-for="(item, index) in talbeData && talbeData.row" :key="index">
        <td v-for="(v, i) in item" :key="i">{{ v }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    talbeData: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.table {
  margin-top: 0.2rem;
  overflow: hidden;
  //   height: 100%;
  table {
    border-collapse: collapse;
    margin: 0 auto;
    text-align: center;
    font-size: 0.18rem;
    // border: 0.02rem solid red;
  }
  table td,
  table th {
    color: #39e5ff;
    height: 0.3rem;
  }
  table tbody {
    overflow-x: visible;
    overflow-y: scroll;
  }
  table thead th {
    background-color: #cce8eb;
    width: 1rem;
    height: 0.53rem;
    background-color: rgba(138, 208, 252, 0.22);
  }
  table tr:nth-child(odd) {
    height: 0.46rem;
    background-color: rgba(138, 208, 252, 0.22);
  }
  table tr:nth-child(even) {
    height: 0.46rem;
  }
}
</style>