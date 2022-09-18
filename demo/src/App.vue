<script setup lang="ts">
import { ref } from 'vue';

import { randomColor, arrayRecursionMap, arrayDeepFilter, generateID } from 'quick-utils-js';

const hexColor = ref<string> ( randomColor () );

const idStr = ref<string> ( generateID () );

const arr = [
    {
      pid: null,
      id: '1',
      name: '节点1',
      children: [
        {
          pid: '1',
          id: '1-1',
          name: '节点1-1',
        },
        {
          pid: '1',
          id: '1-2',
          name: '节点1-2',
          children: [
            {
              pid: '1-2',
              id: '1-2-1',
              name: '节点1-2-1'
            }
          ],
        }
      ],
    },
  {
    pid: null,
    id: '2',
    name: '节点2'
  },
  {
    pid: null,
    id: '3',
    name: '节点3',
    children: [
      {
        pid: '3',
        id: '3-1',
        name: '节点3-1',
      }
    ],
  }
];

const result = arrayRecursionMap( arr, ( item ) => {

  if ( item.id === '1-2-1') {

    return null;
  }

  return item;

}, 'children');

console.log ('result arr:', result);


const  result2 = arrayDeepFilter( arr, ( item ) => item.id )

console.log ( 'result2:',result2 );

const generateColor = () => {

  hexColor.value = randomColor ();

};

const randomID = () => {

  idStr.value = generateID ();

};




</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <p>随机颜色：{{ hexColor }}</p>

  <p>随机ID：{{ idStr }}, {{ idStr.length }}</p>

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
