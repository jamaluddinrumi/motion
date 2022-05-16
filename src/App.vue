<template>
  <ul
    style="width: fit-content; text-align: left;list-style: none;margin-bottom: 5rem;"
  >
    <li>
      <router-link to="/"><b>Home</b></router-link>
    </li>
    <li>
      <router-link to="/benang"><b>Benang</b></router-link>
    </li>
    <li>
      <router-link to="/speedometer"><b>Speedometer</b></router-link>
    </li>
    <li>
      <router-link to="/kipas-mask"><b>Kipas & Masker</b></router-link>
    </li>
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
