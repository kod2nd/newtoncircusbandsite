<template>
  <div>
    <h2
      class="nc-font subheading text-uppercase font-weight-medium mb-3"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot />
    </h2>
  </div>
</template>

<style>
.nc-font {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif */
}
</style>

<script>
export default {
  name: "BaseSubheading",
};
</script>
