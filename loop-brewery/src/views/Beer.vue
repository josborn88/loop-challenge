<template>
  <div class="home">
    <img class="duff" alt="Drink Duff Responsibly" src="../assets/duff.webp" />
    <Beer />
  </div>
</template>

<script>
import Beer from "@/components/Beer.vue";
export default {
  name: "home",
  components: {
    Beer
  }
};
</script>

<style scoped>
.duff {
  width: 300px;
  border-radius: 15px;
}
</style>
