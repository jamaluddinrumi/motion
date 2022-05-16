<template>
  <ul style="width: fit-content; text-align: left;list-style: none;margin-bottom: 5rem;">
    <li><router-link to="/benang">benang</router-link></li>
    <li><router-link to="/speedometer">speedometer</router-link></li>
    <li><router-link to="/kipas-mask">kipas-mask</router-link></li>
  </ul>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
