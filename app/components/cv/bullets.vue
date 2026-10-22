<script lang="ts" setup>
defineProps<{
  heading: string;
  from: string;
  to: string;
  descriptions: string[];
  skills: string[];
}>();
</script>

<template>
  <div class="flex start row">
    <p class="flex flex-1 time-range">
      {{ from }} -
      {{ to }}
    </p>
    <div class="flex flex-1 start column">
      <b>{{ heading }}</b>
      <ul>
        <li
          v-for="(description, descriptionIndex) in descriptions"
          :key="descriptionIndex"
        >
          {{ description }}
        </li>
      </ul>
      <div class="flex start row">
        <div
          v-for="(skill, skillIndex) in skills"
          :key="skillIndex"
          class="skills-item"
        >
          <div class="flex start row">
            <p class="secondary-font-color">
              {{ skill }}
            </p>
            <p class="list-dot">&#x2022;</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
