<template>
  <SoundCloud playlist="1253863180" :mini="false" theme="dark" @ready="ready" />
</template>

<script>
import SoundCloud from 'vue-soundcloud-player';
export default {
  components: {
    SoundCloud
  },
  methods: {
    ready() {
      // fired when the player is loaded
    }
  }
}
</script>