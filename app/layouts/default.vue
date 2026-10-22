<template>
  <div class="container flex cross-center main-start column">
    <LayoutHeader class="header" />
    <LayoutContent class="content flex-1">
      <NuxtPage />
    </LayoutContent>
    <LayoutFooter class="footer" />
  </div>
</template>

<style langg="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;

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
}
</style>
