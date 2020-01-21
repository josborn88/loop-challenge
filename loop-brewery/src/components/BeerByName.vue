<template>
  <div>
    <div class="beer-list">
      <div class="beer">
        <div class="beer-description">
          <h3>Name: {{ beer[0].name }}</h3>
          <p>{{ beer[0].description }}</p>
          <p>{{ beer[0].tagline }}</p>
          <p>First brewed: {{ beer[0].first_brewed }}</p>
          <p>{{ beer[0].abv }} percent alcohol by volume</p>
          <h3>{{ beer[0].name }} pairs amazingly with:</h3>
          <div class="food" v-for="food in foodPairs" :key="food">
            <p>{{ food }}</p>
          </div>
        </div>

        <div class="beer-img">
          <img :src="beer[0].image_url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "beer",
  data() {
    return {
      beer: [],
      beerName: "Buzz"
    };
  },
  computed: {
    foodPairs(vm) {
      return vm.beer[0].food_pairing;
    }
  },
  methods: {
    getBeer(name) {
      fetch(`https://api.punkapi.com/v2/beers?beer_name=${name}`, {
        headers: {}
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.beer = data;
        })
        .catch(err => console.error(err));
    }
  },
  created() {
    this.getBeer(window.location.href.split("/")[4]);
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
  width: 100px;
  text-align: left;
}
</style>
