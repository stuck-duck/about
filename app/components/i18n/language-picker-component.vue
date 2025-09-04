<script lang="ts" setup>
import { useI18n } from '#imports';

const { locale: currentLocale, locales, setLocale } = useI18n();
</script>

<template>
  <div class="language-picker-buttons">
    <button
      v-for="locale in locales"
      :key="locale.code"
      class="button-no-border"
      :class="{ 'button-no-border-active': currentLocale === locale.code }"
      @click="setLocale(locale.code)"
    >
      {{ locale.name }}
    </button>
  </div>
</template>

<style lang="scss">
.language-picker-buttons {
  display: flex;
  gap: 8px;
}
</style>
