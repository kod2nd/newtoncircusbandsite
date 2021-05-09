<script>
// import VueInstagram from "vue-instagram";

export default {
  name: "App",

};
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="(feed, index) in feeds" :key="index" cols="3">
        <div>
          <slot name="loading" :loading="loading" />
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 12 : 0"
              :class="{ 'on-hover': hover }"
              @click="selectPhoto(feed.media_url)"
              @click.stop="dialog = true"
            >
              <base-card :href="feed.href" tag="a" :elevation="4 - 1">
                <v-img
                  :src="feed.media_url"
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
      <v-dialog v-model="dialog" max-width="600">
        <v-card>
          <v-img
            :src="this.selectedPhotoLink"
            class="fill-height ma-0"
            align="center"
            justify="center"
            contain
            @click="dialog = false"
          />
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  props: {
    /*
     * Instagram access token.
     */
    token: {
      type: String,
      required: true,
    },
    /*
     * Media Fields (see https://developers.facebook.com/docs/instagram-basic-display-api/reference/media#fields)
     */
    fields: {
      type: String,
      required: true,
    },
    /*
     * Number of posts rendered.
     */
    count: {
      type: Number,
      default: 8,
    },
    /*
     * Kinds of media to filter (Can be IMAGE, VIDEO, or CAROUSEL_ALBUM.).
     */
    mediatypes: {
      type: Array,
      required: true,
    },
    // Class for container div
    containerClass: {
      type: String,
      default: "",
      required: false,
    },
  },
  data: () => ({
    error: null,
    loading: false,
    feeds: [],
    dialog: false,
    selectedPhotoLink: "",
  }),
  mounted() {
    this.getUserFeed();
  },
  methods: {
    selectPhoto: function (link) {
      this.selectedPhotoLink = link
    },
    getUserFeed() {
      this.loading = true;
      axios
        .get("https://graph.instagram.com/me/media", {
          params: { access_token: this.token, fields: this.fields },
        })
        .then((response) => {
          this.loading = false;
          if (response.status === 400) {
            this.error = response.error.message;
          }
          if (response.status === 200) {
            for (const n in response.data.data) {
              if (this.mediatypes.includes(response.data.data[n].media_type)) {
                this.feeds.push(response.data.data[n]);
                if (this.feeds.length >= this.count) {
                  return;
                }
              }
            }
          }
        })
        .catch((error) => {
          throw error;
        });
    },
  },
};
</script>