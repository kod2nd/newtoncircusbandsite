<template>
  <div>
    <v-card elevation="4">
    <v-img
      :src="require('@/assets/hero2.jpg')"
      position="top"
      height="100vh"
      width="100%"
      :elevation="10"
      class="nc-hero"
    >
    </v-img>
    </v-card>
  </div>
</template>
<style>
.nc-hero {
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
export default {
  name: "Hero",

  props: {
    square: Boolean,
    text: String,
  },
  methods: {
    onClick(e) {
      e.stopPropagation();
      this.$vuetify.goTo("#about");
    },
  },

  computed: {
    styles() {
      return {
        borderRadius: this.square ? "2px" : undefined,
      };
    },
  },
};
</script>