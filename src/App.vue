<template>
  <NavbarComponent :logo="logoSrc" :alt="altName" />
  <main>
    <RouterView />
  </main>
  <FooterComponent :logo="logoSrc" :alt="altName" />
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: { NavbarComponent, FooterComponent },
  data() {
    return {
      logoSrc: '/img/logo.webp',
      altName: 'foodwagon',
    }
  },
}
</script>
