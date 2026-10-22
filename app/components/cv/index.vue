<script lang="ts" setup>
const bullets = computed(() => [
  {
    heading: $t('cv.bullets.0.heading'),
    from: $t('cv.bullets.0.from'),
    to: $t('cv.bullets.0.to'),
    descriptions: [$t('cv.bullets.0.descriptions.0')],
    skills: [
      $t('cv.bullets.0.skills.0'),
      $t('cv.bullets.0.skills.1'),
      $t('cv.bullets.0.skills.2'),
    ],
  },
]);
</script>

<template>
  <div class="flex start column">
    <h1>{{ $t('cv.timeline') }}</h1>
    <CvBullets
      v-for="(
        { heading, from, to, descriptions, skills }, bulletIndex
      ) in bullets"
      :key="bulletIndex"
      :heading
      :from
      :to
      :descriptions
      :skills
    />
  </div>
</template>
