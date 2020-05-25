<template>
  <div class="card-wrapper">
    <p class="card-title">{{title}}</p>
    <article class="card" v-bind:class="[card.vendor]" v-on:click="switchCards">
      <section class="top-card">
        <div class="chip">
          <img v-bind:src="chipSymbol()" alt="card chip" />
        </div>
        <div class="symbol">
          <img :src="vendorLogo()" alt="corp symbol" />
        </div>
      </section>
      <section class="numbers">
        <p class="number">{{card.number}}</p>
      </section>
      <section class="personal-information">
        <p class="cardholder-name">cardholder name</p>
        <p class="name-text">{{card.name}}</p>
        <p class="valid-thru">valid thru</p>
        <p class="date-text">{{card.valid}}</p>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
    title: String
  },
  computed: {
    vendor() {
      return this.$store.state.vendors[this.card.vendor];
    }
  },
  methods: {
    vendorLogo() {
      return require("../assets/vendor-" + this.card.vendor + ".svg");
    },
    chipSymbol() {
      return require("../assets/chip-light.svg");
    },
    switchCards() {
      this.$store.dispatch("switchCard", {
        index: this.stackIndex,
        card: this.card
      });
    }
  }
};
</script>

<style style="scss" scoped>
.card-title {
  text-transform: uppercase;
  font-size: 0.7em;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 1em;
}

.card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* max-width: min-content; */
}
.card {
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  color: white;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  /* width: 90vw;
  max-width: 20rem;
  height: 56.75vw;
  max-height: 12.61rem; */
  width: 16em;
  height: 9em;
  padding: 0.7em;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "symbol"
    "number"
    "personal";

  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
}

.top-card {
  grid-area: symbol;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.card .top-card .chip img {
  width: 100%;
  height: 3em;
}

.card .top-card .symbol {
  grid-column: 4 / 5;
}

.card .top-card .symbol img {
  width: 100%;
  height: 2em;
}

.number {
  text-align: center;
  grid-area: number;
  font-size: 1.3em;
  font-weight: 400;
}

.personal-information {
  grid-area: personal;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 2fr;
  grid-template-areas:
    "card-holder valid"
    "name date";
}

.cardholder-name {
  text-align: left;
  font-size: 0.5em;
  text-transform: uppercase;
}

.valid-thru {
  grid-area: valid;
  text-align: right;
  font-size: 0.5em;
  text-transform: uppercase;
}

.name-text {
  font-size: 0.7em;
  text-transform: uppercase;
  text-align: left;
}

.date-text {
  text-align: right;
}

.ninja {
  background: #3d3d3d;
}

.blockchain {
  background: #7b53d9;
}

.evil {
  background: #d22f4d;
}

.bitcoin {
  background: #fdb455;
  color: black;
}

.novendor{
  background: lightblue;
}
</style>