<template>
  <ul style="width: fit-content; text-align: left;list-style: none;margin-bottom: 5rem;">
    <li><router-link to="/benang">Benang</router-link></li>
    <li><router-link to="/speedometer">Speedometer</router-link></li>
    <li><router-link to="/kipas-mask">Kipas & Masker</router-link></li>
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
