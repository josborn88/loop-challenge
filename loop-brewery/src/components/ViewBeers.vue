<template>
  <div>
    <h1>Beer goes here</h1>
    <div class="beer-list" v-for="beer in beers" :key="beer.id">
      <p>{{ beer.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "view-beers",
  data() {
    return {
      beers: [],
      apiURL: "https://api.punkapi.com/v2/beers?page=1&per_page=25"
    };
  },
  methods: {
    getBeers() {
      fetch(this.apiURL, {
        headers: {}
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.beers = data;
        })
        .catch(err => console.error(err));
    }
  },
  created() {
    this.getBeers();
  }
};
</script>

<style></style>
