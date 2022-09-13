<script setup lang="ts">
import { ref } from 'vue';

import { randomColor, generalEmailReg, generateID, resetObjectValue } from 'quick-utils-js';

const hexColor = ref<string> ( randomColor () );

const idStr = ref<string> ( generateID () );

const generateColor = () => {

  hexColor.value = randomColor ();

};

const randomID = () => {

  idStr.value = generateID ();

};


console.log ( generalEmailReg ( '2770723534@qq.com' ) );

console.log ( generalEmailReg ( '2770723534@stacs.cn' ) );

console.log ( resetObjectValue ( { a: 1, b: 2, c: 3 } )  );
console.log ( resetObjectValue ( { a: 1, b: 2, c: 3 }, { ignore: [ 'c' ] } )  );

console.log ( resetObjectValue ( {
  a: 'describe',
  b: {
    c: [ 'describe' ],
    d: {
      e: 123,
    },
  },
  d: 123,
}, { ignore: [ 'd' ] } )  );

console.log ( resetObjectValue ( { a: 1, b: 2, c: 3 }, { ignore: [ 'c' ], resetKeyValues: { 'b': '55555~~~~' } } )  );
console.log ( resetObjectValue ( { a: 1, b: 2, c: 3 }, { ignore: [ 'c' ], resetKeyValues: { 'b': '55555~~~~' } } )  );

console.log ( JSON.stringify(resetObjectValue ( { a: 1, b: { d: { f: '123' } }, c: 3 }, { ignore: [ 'c' ], resetKeyValues: { 'f': '55555~~~~' } } ) ) );


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
