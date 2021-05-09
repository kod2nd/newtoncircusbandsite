<template>
  <div>
    <v-layout :style="styles" column class="fab-container">
      <base-btn
        v-for="(item, i) in items"
        :key="i"
        square
        fab
        dark
        small
        :color="item.color"
      >
        <v-icon v-text="item.icon" @click="goToLink(item.link)"></v-icon>
      </base-btn>
    </v-layout>
    <v-btn
      small
      class="mr-0"
      circle
      fab
      fixed
      right
      bottom
      title="Go to top"
      @click="$vuetify.goTo(0)"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </div>
</template>

<style>
.btn_name {
  margin-top: 10px;
}
</style>


<script>
export default {
  name: "CoreCta",
  data: () => ({
    fab: false,
    items: [
      {
        text: "Facebook",
        icon: "mdi-facebook",
        color: "#5d5d5d",
        link: "https://www.facebook.com/newtoncircusofficial",
      },
      {
        text: "Instagram",
        icon: "mdi-instagram",
        color: "#5d5d5d",
        link: "https://www.instagram.com/newtoncircusmusic/",
      },
      {
        text: "YouYube",
        icon: "mdi-youtube",
        color: "#5d5d5d",
        link:
          "https://www.youtube.com/channel/UCy-G5CHTq-vh7yneBVOASPg/featured",
      },
      {
        text: "Email",
        icon: "mdi-email",
        color: "#5d5d5d",
        link: "mailto: newtoncircusband@gmail.com",
      },
    ],
  }),

  computed: {
    styles() {
      return {
        marginTop: `${this.$vuetify.application.top + 40}px`,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 3
      };
    },
  },
  methods: {
    goToLink: function (link) {
      window.open(link, "_blank");
    },
  },
};
</script>
