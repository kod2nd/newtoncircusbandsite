<template>
  <div>
    <v-card elevation="4">
    <v-img
      :src="require('@/assets/hero2.jpg')"
      position="top"
      height="500"
      width="100%"
      :elevation="10"
    >
    </v-img>
    </v-card>
  </div>
</template>

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