<template>
  <div>
    <v-card elevation="4">
      <v-img
        :src="require('@/assets/hero2.jpg')"
        position="top"
        :height="height"
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

  data: () => ({ isMobile: false,
  height: "100vh" }),
  beforeDestroy() {
    if (typeof window === "undefined") return;

    window.removeEventListener("resize", this.onResize, { passive: true });
  },
  mounted() {
    this.onResize();
    console.log(this.$vuetify.breakpoint.width)

    window.addEventListener("resize", this.onResize, { passive: true });
  },
  props: {
    square: Boolean,
    text: String,
  },
  methods: {
    onClick(e) {
      e.stopPropagation();
      this.$vuetify.goTo("#about");
    },
    onResize() {
      this.isMobile = window.innerWidth < 600;
      if (this.isMobile) {
        this.height = "50vh"
      } else {
        this.height = "100vh"
      }
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