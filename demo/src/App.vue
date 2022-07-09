<script setup lang="ts">
import { ref } from 'vue';

import { randomColor, isEmail, generateID } from 'quick-utils-js';

const hexColor = ref<string> ( randomColor () );

const idStr = ref<string> ( generateID () );

const generateColor = () => {

  hexColor.value = randomColor ();

};

const randomID = () => {

  idStr.value = generateID ();

};


console.log ( isEmail ( '2770723534@qq.com' ) );

console.log ( isEmail ( '2770723534@stacs.cn' ) );


</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <p>随机颜色：{{ hexColor }}</p>

  <p>随机ID：{{ idStr }}</p>

  <button type="button" @click="generateColor">生成颜色</button>

  <button type="button" @click="randomID">生成id</button>

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
