<script lang="ts" setup>
import content from '../../../i18n/locales/en-us.json';

const { bulletsIndex = 0 } = defineProps({ bulletsIndex: Number });
</script>

<template>
  <div class="flex start row">
    <p class="flex flex-1 time-range">
      {{ $t(`cv.bullets.${bulletsIndex}.from`) }} -
      {{ $t(`cv.bullets.${bulletsIndex}.to`) }}
    </p>
    <div class="flex flex-1 start column">
      <b>{{ $t(`cv.bullets.${bulletsIndex}.heading`) }}</b>
      <ul>
        <li
          v-for="(_description, descriptionsIndex) in content.cv.bullets.at(
            bulletsIndex,
          )?.descriptions"
          :key="descriptionsIndex"
        >
          {{
            $t(`cv.bullets.${bulletsIndex}.descriptions.${descriptionsIndex}`)
          }}
        </li>
      </ul>
      <div class="flex start row">
        <div
          v-for="(_skill, skillIndex) in content.cv.bullets.at(bulletsIndex)
            ?.skills"
          :key="skillIndex"
          class="skills-item"
        >
          <div class="flex start row">
            <p class="secondary-font-color">
              {{ $t(`cv.bullets.${bulletsIndex}.skills.${skillIndex}`) }}
            </p>
            <p class="list-dot">&#x2022;</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.time-range {
  max-width: 150px;
  text-transform: uppercase;
}

.skills-item:last-child {
  .list-dot {
    display: none;
  }
}
</style>
