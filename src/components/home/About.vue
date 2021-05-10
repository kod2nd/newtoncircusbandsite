<template>
  <v-container id="about" tag="section">
    <base-card class="pa-3">
      <base-subheading class="text-center">ABOUT US</base-subheading>
      <v-row align-content="center">
        <v-col :cols="numCols" align-content="right">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 0"
                :class="{ 'on-hover': hover }"
                class="ml-auto"
              >
                <v-img
                  :src="require('@/assets/about_nc.jpg')"
                  class="fill-height ma-0 ml-auto"
                  align="center"
                  justify="center"
                >
                </v-img>
              </v-card>
            </v-hover>
        </v-col>
        <v-col :cols="numCols">
          <div class="c-font text-left">
            A symbiotic persona of four musicians - Kenneth Ong, Colin Ong,
            Jefri Chua, and David Tan.
          </div>
          <br />
          <div class="c-font text-left">
            We music for the careworn, for the lovelorn, for the sentimentalist,
            for the whispering paramours, for the wistful daydreamers.
          </div>
          <br />
          <div class="c-font text-left">
            Drop us a mail at
            <h5>newtoncircusband@gmail.com</h5>
          </div>
        </v-col>
      </v-row>
    </base-card>
  </v-container>
</template>
<style>
.c-font {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
<script>
export default {
  name: "HomeAbout",
data: () => ({ isMobile: false,
  numCols: "6" }),
  beforeDestroy() {
    if (typeof window === "undefined") return;

    window.removeEventListener("resize", this.onResize, { passive: true });
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  props: {
    square: Boolean,
    text: String,
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 700;
      if (this.isMobile) {
        this.numCols = "12"
      } else {
        this.numCols = "6"
      }
    },
  },
};
</script>
