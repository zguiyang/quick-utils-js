<script setup lang="ts">
import { ref } from 'vue';

import { randomColor, isEmail } from 'quick-utils-js';

const hexColor = ref<string> ( randomColor () );

const generateColor = () => {

  hexColor.value = randomColor ();

};


console.log ( isEmail ( '2770723534@qq.com' ) );

console.log ( isEmail ( '2770723534@stacs.cn' ) );


</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <p>{{ hexColor }}</p>

  <button type="button" @click="generateColor">生成颜色</button>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
