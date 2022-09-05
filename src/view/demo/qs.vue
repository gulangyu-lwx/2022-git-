<template>
  <div>123</div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getQsData();
  },
  methods: {
    getQsData() {
      let str = 'a=1&b=lwx&c=true'
      let data = qs.parse(str); // {a: '1', b: 'lwx', c: 'true'}
      console.log(data);

      let obj = {a: '1', b: 'lwx', c: 'true'}
      let data2 = qs.stringify(obj)
      console.log(data2); // 'a=1&b=lwx&c=true'
    },
  },
};
</script>

<style>
</style>