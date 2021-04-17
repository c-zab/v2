<template>
  <picture>
    <source
      media="(max-width: 550px)"
      type="image/webp"
      srcset="@/images/coverBg-300w.webp"
    />
    <source
      media="(max-width: 550px)"
      type="image/png"
      srcset="@/images/coverBg-300w.png"
    />
    <source
      media="(max-width: 800px)"
      type="image/webp"
      srcset="@/images/coverBg-800w.webp"
    />
    <source
      media="(max-width: 800px)"
      type="image/png"
      srcset="@/images/coverBg-800w.png"
    />
    <source
      media="(min-width: 1300px)"
      type="image/webp"
      srcset="@/images/coverBg-1300w.webp"
    />
    <source
      media="(min-width: 1300px)"
      type="image/png"
      srcset="@/images/coverBg-1300w.png"
    />
    <img
      src="@/images/coverBg-1300w.png"
      type="image/png"
      alt="placeholder"
      class="img-fluid cover-image"
    />
  </picture>
</template>
<script>
export default {
};
</script>
<style lang="scss">
</style>