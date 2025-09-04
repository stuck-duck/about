<script lang="ts" setup>
import { I18nLanguagePickerComponent, LayoutLogoComponent } from '#components';
</script>

<template>
  <div class="header content-space-between">
    <LayoutLogoComponent />
    <I18nLanguagePickerComponent />
  </div>
</template>

<style lang="scss">
.header {
  background-color: rgba($color: var(--background-color), $alpha: 0.95);
}
</style>
