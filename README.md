# Introduction

This tool provides us with a quick and common tool method functions in the front-end project business. Most of the code of the tool library comes from the network and the community, and uses part of
[outils](https://github.com/proYang/outils) sound code, All projects are developed using`Typescript`,
The current tool library contains`Array`,`Blob`,`Cookie`,`Date`,`Device`,`Dom`,`Number`,`Object`,`Random`,`Regex`,`String`
related operation methods and some tool methods. At present, some tool functions in the tool library are not very many, and will be gradually increased later.

In addition, the library differs from [lodash](https://lodash.com/) in that the tool functions in this tool are tool methods that are isolated from the project business (business direction tool functions) rather than pure tool methods.
We also welcome suggestions to optimize, or directly raise`PR`, any questions, can be asked in the issue

# repo
[gitee](https://gitee.com/zhaoguiyang/quick-utils-js)

# Compatibility

## Browser

Internet Explorer is not supported.
The latest 2 versions of modern browsers such as`Edge`,`Firefox`,`Chrome`,`Safari`.
Other versions of these browsers have not been rigorously tested due to development resource constraints. But `quick-utils-js` is expected to work well on less old versions of these browsers(for example, within 2 years). Feel free to [issue](https://github.com/zguiyang/quick-utils-js/issues) if you find any problems

## Typescript

Need to release > 3.9.10

# Quick start

## Install

`npm i quick-utils-js ` or `yarn add quick-utils-js`

## Usage

```js
import { generateUUID } from "quick-utils-js";

console.log ( generateUUID () );

```