<script setup lang="ts">
import {
  LayoutContentComponent,
  LayoutFooterComponent,
  LayoutHeaderComponent,
  NuxtPage,
} from '#components';
</script>

<template>
  <LayoutHeaderComponent class="header" />
  <LayoutContentComponent class="content">
    <NuxtPage />
  </LayoutContentComponent>
  <LayoutFooterComponent class="footer" />
</template>

<style langg="scss">
.header {
  min-height: 40px;
  position: sticky;
  top: 0;
}

.content {
  flex: 1;
}

.footer {
  min-height: 40px;
}
</style>
