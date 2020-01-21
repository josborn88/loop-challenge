<template>
  <div class="home">
    <img class="duff" alt="Drink Duff Responsibly" src="../assets/duff.webp" />
    <BeerByName />
  </div>
</template>

<script>
import BeerByName from "@/components/BeerByName.vue";
export default {
  name: "home",
  components: {
    BeerByName
  }
};
</script>

<style scoped>
.duff {
  width: 300px;
  border-radius: 15px;
}
</style>
