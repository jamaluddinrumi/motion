<template>
  <ul
    style="width: fit-content; text-align: left;list-style: none;margin-bottom: 5rem; padding-left:1rem;"
  >
    <li>
      <router-link to="/"><b>Halaman Depan</b></router-link>
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
    <li>
      <router-link to="/css/benang"><b>Benang with CSS</b></router-link>
    </li>
    <li>
      <router-link to="/css/speedometer"
        ><b>Speedometer with CSS</b></router-link
      >
    </li>
    <li>
      <router-link to="/css/kipas-mask"
        ><b>Kipas & Masker with CSS</b></router-link
      >
    </li>
  </ul>
  <div id="container" class="center">
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#container.center {
  display: grid;
  place-content: center;
}
</style>
