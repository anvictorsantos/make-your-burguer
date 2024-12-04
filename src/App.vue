<template>
  <div>
    <HelloWorldComponent />
    <LifeCycle email="meuemail@email.com" @change-image="changeImage(1)" />
  </div>
</template>

<script>
import HelloWorldComponent from './components/HelloWorldComponent.vue'
import LifeCycle from './components/LifeCycle.vue'

export default {
  name: 'App',
  components: { HelloWorldComponent, LifeCycle },
  methods: {
    changeImage(i) {
      alert(`clicked ${i++} times`)
    },
  },
}
</script>
