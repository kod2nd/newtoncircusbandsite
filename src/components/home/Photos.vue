<template>
  <v-container id="photos" tag="section">
    <base-subheading class="text-center"> PHOTOS </base-subheading>

    <CoolLightBox :items="images" :index="index" @close="index = null">
    </CoolLightBox>
    <v-container>
      <v-row>
        <v-col v-for="(image, imageIndex) in images"
        :key="imageIndex" cols="3">
          <div>
            <slot name="loading" :loading="loading" />
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 0"
                :class="{ 'on-hover': hover }"
                @click="index = imageIndex"
                :style="{ backgroundImage: `url(${image.thumb})` }"
              >
                <base-card :elevation="4 - 1">
                  <v-img
                    :src="`${image.thumb}`"
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                    :aspect-ratio="4 / 3"
                  />
                </base-card>
              </v-card>
            </v-hover>
            <slot name="error" :error="error" />
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!-- <div class="images-wrapper">
      <div
        class="image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: `url(${image.thumb})` }"
      ></div>
    </div> -->
    <hr class="style-one" />
  </v-container>
</template>

<style>
.style-one {
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.616);
}
</style>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
export default {
  components: {
    CoolLightBox,
  },
  data() {
    return {
      images: [
        {
          src: require("@/assets/photos/1.jpg"),
          thumb: require("@/assets/photos/1.jpg"),
        },
        {
          src: require("@/assets/photos/2.jpg"),
          thumb: require("@/assets/photos/2.jpg"),
        },
        {
          src: require("@/assets/photos/3.jpg"),
          thumb: require("@/assets/photos/3.jpg"),
        },
        {
          src: require("@/assets/photos/4.jpg"),
          thumb: require("@/assets/photos/4.jpg"),
        },
        {
          src: require("@/assets/photos/5.jpg"),
          thumb: require("@/assets/photos/5.jpg"),
        },
        {
          src: require("@/assets/photos/6.jpg"),
          thumb: require("@/assets/photos/6.jpg"),
        },
        {
          src: require("@/assets/photos/7.jpg"),
          thumb: require("@/assets/photos/7.jpg"),
        },
        {
          title: 'Jericho',
          description: "Filmed in Beep Studios",
          src: 'https://www.youtube.com/watch?v=HZqUWm_5JSs',
          thumb: require("@/assets/photos/8.jpg"),
        },
      ],
      index: null,
      loading: false,
      error: null,
    };
  },
};
</script>
