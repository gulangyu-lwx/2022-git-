<template>
  <div class="container2">
    <table class="table">
      <thead v-if="talbeData?.header">
        <tr>
          <th v-for="(item, index) in talbeData?.header" :key="index">
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody style="height: 20px">
        <tr v-for="(item, index) in talbeData?.row" :key="index">
          <td v-for="(v, i) in item" :key="i">{{ v }}</td>
        </tr>
      </tbody>
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
.container2 {
  margin-top: 0.04rem;
  height: 100%;
  overflow-y: scroll;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  .table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
    text-align: center;
    font-size: 0.18rem;
    position: relative;
  }
  .table td,
  .table th {
    color: #39e5ff;
    height: 0.3rem;
  }

  .table tbody {
    // position: fixed;
  }
  .table thead {
    // position: fixed;
    // left: 0;
    // top: 0;
    // right: 0;
    // bottom: 0;
    // width: 100%;
  }
  .table thead tr {
    width: 100%;
  }

  .table thead th {
    background-color: #cce8eb;
    width: 1rem;
    height: 0.53rem;
    background-color: rgba(138, 208, 252, 0.22);
  }
  .table tr:nth-child(odd) {
    height: 0.46rem;
    background-color: rgba(138, 208, 252, 0.22);
  }
  .table tr:nth-child(even) {
    height: 0.46rem;
  }
}
</style>