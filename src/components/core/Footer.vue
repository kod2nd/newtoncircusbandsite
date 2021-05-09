<template>
  <v-footer
    class="py-4"
    height="auto"
    color="white"
  >
    <v-container class="mx-auto">
      <!-- <h6 class="text-center">Newton Circus 2021</h6> -->
    </v-container>
  </v-footer>
</template>

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
