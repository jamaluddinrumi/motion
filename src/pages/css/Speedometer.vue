<template>
  <img id="trex2" src="/svg/speedometer1.svg" />
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
#trex2 {
  width: 200px;
  transform: translatey(0px);
  animation: levitate 6s ease-in-out infinite;
}
</style>
