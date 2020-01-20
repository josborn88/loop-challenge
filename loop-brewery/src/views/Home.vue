<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ViewBeers />
  </div>
</template>

<script>
import ViewBeers from "@/components/ViewBeers.vue";
export default {
  name: "home",
  components: {
    ViewBeers
  }
};
</script>
