<template>
  <div class="text-white">
    <div class="toggle-position"></div>
    <SampleAppBar /><SampleNavBar />

    <slot />
  </div>
</template>

<style>
  @import '~/assets/css/tailwind.css';
  .toggle-position {
    position: fixed;
    right: 40px;
    top: 100px;
    z-index: 1;
  }
</style>
