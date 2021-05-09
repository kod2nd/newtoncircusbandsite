<template>
  <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
    <div class="c-font">
      <h6>Copyright &copy; {{ new Date().getFullYear() }} Newton Circus - All Rights Reserved</h6>
    </div>
    </v-col>
  </v-footer>
</template>
<style>
.c-font {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}
</style>

<script>
  export default {
    name: 'CoreFooter',

    data: () => ({
      items: [
        {
          href: '#!',
          icon: 'mdi-instagram',
        },
        {
          href: '#!',
          icon: 'mdi-facebook',
        },
        {
          href: '#!',
          icon: 'mdi-youtube',
        },
      ],
    }),
  }
</script>
