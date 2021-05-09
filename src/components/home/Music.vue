<template>
  <v-container id="music" tag="section">
    <base-card class="pa-3">
      <base-subheading class="text-center">MUSIC</base-subheading>
      <v-row>
        <v-col>
          <v-list>
            <v-list-item-group>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click="goToLink(item.link)"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon" :color="item.color"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="item.text"
                    class="font-weight-medium text-left"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col>
          <v-responsive :aspect-ratio="16 / 9">
            <soundcloud />
          </v-responsive>
        </v-col>
      </v-row>
    </base-card>
    <hr class="style-one" />
  </v-container>
</template>
<style>
.style-one {
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.616);
  margin-top: 30px
}
</style>
<script>
export default {
  name: "Music",
  data: () => ({
    selectedItem: 1,
    items: [
      {
        text: "Spotify",
        icon: "mdi-spotify",
        color: "#1db954",
        link: "https://open.spotify.com/artist/4qnGfFs5LZPJj7oTYgevbs",
      },
      {
        text: "SoundCloud",
        icon: "mdi-soundcloud",
        color: "#ff5500",
        link: "https://soundcloud.com/newton-circus",
      },
      {
        text: "Apple Music",
        icon: "mdi-apple",
        color: "#333333",
        link: "https://music.apple.com/sg/artist/newton-circus/547561449",
      },
      {
        text: "Deezer",
        icon: "mdi-music-circle",
        color: "#9146ff",
        link: "https://www.deezer.com/en/artist/6413204",
      },
    ],
  }),
  components: {
    Soundcloud: () => import("@/components/Soundcloud"),
  },
  methods: {
    goToLink: function (link) {
      window.open(link, "_blank");
    },
  },
};
</script>
