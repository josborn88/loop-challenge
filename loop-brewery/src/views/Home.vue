<template>
  <div class="home">
    <img class="duff" alt="Drink Duff Responsibly" src="../assets/duff.webp" />
    <form>
      <label>Look for a beer by name</label>
      <input type="text" v-model="beerName" />
    </form>
    <router-link
      class="beer-link"
      :to="{ name: 'beername', params: { beername: beerName } }"
      >Find That Beer!</router-link
    >
    <ViewBeers />
  </div>
</template>

<script>
import ViewBeers from "@/components/ViewBeers.vue";
export default {
  name: "home",
  components: {
    ViewBeers
  },
  data() {
    return {
      beerName: ""
    };
  }
};
</script>
<style scoped>
.duff {
  width: 300px;
  border-radius: 15px;
  margin-bottom: 40px;
}
</style>
