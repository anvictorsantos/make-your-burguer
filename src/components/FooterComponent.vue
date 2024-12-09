<template>
  <footer class="bg-veryDarkBlue">
    <img :src="logo" :alt="alt" />
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  props: ['logo', 'alt'],
}
</script>
