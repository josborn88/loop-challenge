<template>
  <div>
    <div class="beer-list" v-for="beer in beers" :key="beer.id">
      <div class="beer">
        <div class="beer-description">
          <h4>Name: {{ beer.name }}</h4>
          <h4>Brief Description</h4>
          <p>{{ beer.description }}</p>
        </div>

        <div class="beer-img">
          <img :src="beer.image_url" />
        </div>

        <router-link
          class="beer-link"
          :to="{ name: 'beer', params: { id: beer.id } }"
          >Click to know more</router-link
        >
      </div>
    </div>

    <div class="page-buttons">
      <h3>Choose a page</h3>

      <button
        class="page-btn"
        v-for="n in 13"
        :key="n"
        v-on:click.prevent="getBeers(n)"
      >
        {{ n }}
      </button>
    </div>
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

<style scoped>
.beer {
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-areas: "beer-description beer-img";
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 200px;
  margin-right: 200px;
  border-style: solid;
}
.beer-description {
  padding-left: 100px;
}
.beer-img img {
  height: 200px;
  margin-top: 30px;
}

.beer-link {
  padding-bottom: 10px;
  padding-left: 100px;
}
.page-btn {
  background-color: #b5a19f;
  border-style: solid;
  border-width: 2px;
  padding-left: 2px;
  padding-right: 2px;
  margin-left: 2px;
  margin-right: 2px;
  height: 40px;
  width: 30px;
}
</style>
