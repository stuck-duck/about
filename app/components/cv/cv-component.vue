<script lang="ts" setup>
import content from '../../../i18n/locales/en-us.json';
</script>

<template>
  <div class="flex start column">
    <h1>{{ $t('cv.timeline') }}</h1>
    <CvBulletComponent
      v-for="(_bullet, index) in content.cv.bullets"
      :key="_bullet.heading"
      :bullets-index="index"
    />
  </div>
</template>
