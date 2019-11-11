<template>
  <div>
    <div style="height: 500px;width: 100%;background-color: #42b983">
      <h3>Counter.vue</h3>
      <span class="num">{{ count }}</span>
      <button @click="increment">hahah</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {getData} from './viewApi.js'
export default {
  name: 'Home',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++
    },
    getData () {
      getData().then(res => {
        this.data = res.data.value
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
