<template>
  <div id="home">
    <hero />
    <music />
    <photos />

    <about />

  </div>
</template>


<script>
  export default {
    name: 'Home',

    components: {
      About: () => import('@/components/home/About'),
      Photos: () => import('@/components/home/Photos'),
      Hero: () => import('@/components/home/Hero'),
      Music: () => import('@/components/home/Music'),
    },
  }
</script>
