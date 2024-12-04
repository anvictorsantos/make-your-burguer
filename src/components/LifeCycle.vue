<template>
  <div>Meu nome é {{ nome }}</div>
  <div>Meu nome email é {{ email }}</div>
  <div>
    <button @click="$emit('changeImage')">Mudar imagem</button>
  </div>
  <ul>
    <li v-for="(item, i) in items" :key="i">{{ item }}</li>
  </ul>
  <br />
  <ul>
    <li v-for="course in courses" :key="course.id">{{ course.name }}</li>
  </ul>
</template>

<script>
export default {
  name: 'LifeCycle',
  data() {
    return {
      nome: 'loading…',
      items: ['1', '2', '3'],
      courses: [
        { id: 1, name: 'x' },
        { id: 2, name: 'y' },
        { id: 3, name: 'z' },
      ],
    }
  },
  props: ['email'],
  emits: ['changeImage'],
  created() {
    setTimeout(() => {
      this.nome = 'componente criado'
    }, 1000)
  },
  mounted() {
    setTimeout(() => {
      this.nome = 'component montado'
    }, 2000)
  },
}
</script>
