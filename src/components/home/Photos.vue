<template>
  <v-container id="photos" tag="section">
    <base-subheading class="text-center"> PHOTOS </base-subheading>

    <insta-feed
      :token="token"
      fields="media_url,media_type,caption,permalink"
      container-class="image-container"
      :mediatypes="['IMAGE']"
    >
      <template v-slot:loading="props">
        <h1 v-if="props.loading" class="fancy-loading">
          Loading, please wait...
        </h1>
      </template>

      <template v-slot:feeds="props">
        <a :href="props.feed.permalink" rel="noopener" target="_blank">
          <div class="instagram-image">
            <img :src="props.feed.media_url" alt="Instagram post" />
            <div :text="props.feed.caption" />
          </div>
        </a>
      </template>

      <template v-slot:error="props">
        <div class="fancy-alert">
          {{ props.error }}
        </div>
      </template>
    </insta-feed>
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
export default {
  name: "Photos",
  data() {
    return {
      token: process.env.VUE_APP_INSTAGRAM_TOKEN,
    };
  },
  components: {
    InstaFeed: () => import("@/components/InstaFeed"),
  },
};
</script>
