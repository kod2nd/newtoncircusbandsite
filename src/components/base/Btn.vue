<template>
  <v-btn
    :style="styles"
    fab
    :color="color"
    small
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </v-btn>
</template>

<script>
  export default {
    name: 'BaseBtn',

    props: {
      square: Boolean,
      color: String,
      fixed: Boolean,
      top: Boolean,
      right: Boolean,
      cssClass: String
    },

    computed: {
      styles () {
        return {
          borderRadius: this.square ? '0px' : undefined,
        }
      },
    },
  }
</script>
