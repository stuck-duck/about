<script lang="ts" setup>
import { useI18n } from '#imports';

const { locale: currentLocale, locales, setLocale } = useI18n();
</script>

<template>
  <div class="flex start row">
    <button
      v-for="locale in locales"
      :key="locale.code"
      class="button-no-border"
      :class="{ 'button-no-border-active': currentLocale === locale.code }"
      @click="setLocale(locale.code)"
    >
      {{ $t(`locales.${locale.code}`) }}
    </button>
  </div>
</template>
