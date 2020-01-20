<template>
  <div>
    <h1>Beer goes here</h1>
    <div class="beer-list" v-for="beer in beers" :key="beer.id">
      <div class="beer">
        <div class="beer-description">
          <p>{{ beer.name }}</p>
          <p>{{ beer.description }}</p>
        </div>
        <div class="beer-img">
          <img :src="beer.image_url" />
        </div>
      </div>
    </div>
    <p v-on:click.prevent="getBeers(2)">Page 2</p>
    <p v-on:click.prevent="getBeers(3)">Page 3</p>
  </div>
</template>

<script>
export default {
  name: "view-beers",
  data() {
    return {
      num: 1,
      beers: [],
      apiURL: "https://api.punkapi.com/v2/beers?page=1&per_page=25"
    };
  },
  methods: {
    getBeers(num) {
      fetch(`https://api.punkapi.com/v2/beers?page=${num}&per_page=25`, {
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
    this.getBeers(this.num);
  }
};
</script>

<style></style>
