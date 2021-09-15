<template>
  <div id="app">
    <header>
      <p class="title">Neal.fun</p>
    </header>

    <div class="container">
      <!-- Bill Gates'moneybar -->
      <navBar :money="this.$store.getters.money"/>
      <!-- Items components -->
      <item></item>
    </div>
  </div>
</template>

<script>
import navBar from "./components/navBar.vue";
import item from "./components/item.vue";

export default {
  name: "App",
  components: {
    navBar,
    item
  },
  
};
</script>

<style src="./components/style.scss" lang="scss" scoped/>
