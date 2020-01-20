<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ViewBeers />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ViewBeers from "@/components/ViewBeers.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
    ViewBeers
  }
};
</script>
