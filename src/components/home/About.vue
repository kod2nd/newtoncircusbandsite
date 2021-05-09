<template>
  <v-container id="about" tag="section">
    <base-card class="pa-3">
      <base-subheading class="text-center">ABOUT US</base-subheading>
      <v-row align-content="center">
        <v-col cols="6" align-content="right">
          <v-hover v-slot="{ hover }">
            <v-card max-width="500" :elevation="hover ? 12 : 0" :class="{ 'on-hover': hover }" class="ml-auto">
              <v-img
                :src="require('@/assets/about_nc.jpg')"
                class="fill-height ma-0 ml-auto"
                max-width="60vw"
                align="center"
                justify="center"
                aspect-ratio="1"
              >
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="6">
          <div class="c-font text-left">
            A symbiotic persona of four musicians - Kenneth
            Ong, Colin Ong, Jefri Chua, and David Tan.
          </div>
          <br />
          <div class="c-font text-left">
            We music for the careworn, for the lovelorn, for
            the sentimentalist, for the whispering paramours, for the wistful
            daydreamers.
          </div>
          <br />
          <div class="c-font text-left">
            Drop us a mail at <h5>newtoncircusband@gmail.com</h5>
          </div>

        </v-col>
      </v-row>
    </base-card>
  </v-container>
</template>
<style>
.c-font {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}
.max-width{
  max-width: 500;
}
</style>
<script>
export default {
  name: "HomeAbout",
};
</script>
