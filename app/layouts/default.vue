<script setup lang="ts">
import {
  LayoutContentComponent,
  LayoutFooterComponent,
  LayoutHeaderComponent,
  NuxtPage,
} from '#components';
</script>

<template>
  <div class="container flex cross-center main-start column">
    <LayoutHeaderComponent class="header" />
    <LayoutContentComponent class="content flex-1">
      <NuxtPage />
    </LayoutContentComponent>
    <LayoutFooterComponent class="footer" />
  </div>
</template>

<style langg="scss">
.container {
  height: 100%;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
}

.header {
  min-height: 40px;
  position: sticky;
  top: 0;
  width: 100%;
}

.footer {
  min-height: 20px;
  width: 100%;
}
</style>
