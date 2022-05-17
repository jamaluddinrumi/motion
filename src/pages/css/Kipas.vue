<template>
  <img id="trex" src="/svg/kipas-mask1.svg" />
</template>

<style>
@keyframes levitate {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}
#trex {
  transform: translatey(0px);
  animation: levitate 6s ease-in-out infinite;
}
</style>
