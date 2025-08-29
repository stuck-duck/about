<script setup lang="ts">
import {
  LayoutContentComponent,
  LayoutFooterComponent,
  LayoutHeaderComponent,
  NuxtPage,
} from '#components';
</script>

<template>
  <LayoutHeaderComponent />
  <LayoutContentComponent>
    <NuxtPage />
  </LayoutContentComponent>
  <LayoutFooterComponent />
</template>
