<template>
  <div class="card-form-wrapper">
    <p class="card-title">{{title}}</p>
    <div class="card-form" >
      <p class="add-number-text">card number</p>
      <input class="add-number" type="text" v-model="inputValues.number" />
      <p class="add-name-text">cardholder name</p>
      <input
        class="add-name"
        type="text"
        placeholder="firstname lastname"
        v-model="inputValues.name"
      />
      <p class="add-valid-text">valid thru</p>
      <input class="add-valid" type="text" v-model="inputValues.valid" />
      <p class="add-ccv-text">ccv</p>
      <input class="add-ccv" type="text" v-model="inputValues.ccv" />
      <p class="add-vendor-text">vendor</p>
      <select class="add-vendor" v-model="inputValues.vendor" @change="changeVendor">
        <option v-for="vendor in vendors" :key="vendor" :style="{background: vendor.color}" v-text="vendor.name"></option>
      </select>
      <button @click="toAddCard">Add Card</button>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    event: "change"
  },
  props: {
    card: Object
  },
  computed: {
    vendors() {
      return this.$store.getters.getListOfVendor;
    }
  },
  data() {
    return {
      inputValues: this.card,
    };
  },
  methods: {
    toAddCard() {
      const newCard = {
      valid : this.inputValues.valid,
      number : this.inputValues.number,
      name : this.inputValues.name,
      ccv : this.inputValues.ccv,
      vendor : this.inputValues.vendor
      }
      this.$store.state.cards.push(newCard);
      this.$router.push({ name: "Home" });
    },
    changeVendor() {
      console.log(this.inputValues.vendor)
      this.inputValues.vendor;
    }
  }
};
</script>

<style scoped>
p {
  text-transform: uppercase;
  font-size: 0.6em;
}

.card-form-wrapper {
  font-family: "Consolas";
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-form {
  margin-top: 1em;
  margin: 0.5em;
  display: grid;
  grid-gap: 0.7em;
  grid-template-columns: repeat(2, 120px);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    "number number"
    "name name"
    "valid ccv"
    "vendor vendor"
    "button button";
}

input,
select {
  font-family: "Consolas";
  text-transform: uppercase;
  width: 100%;
  margin-top: 1.1em;
  padding: 0.8em;
  border-radius: 5px;
  background: none;
  border: 1px solid black;
}

input[type="text"]:focus {
  background-color: indigo;
  color: white;
  border: none;
}

.add-number,
.add-number-text {
  grid-area: number;
}
.add-name,
.add-name-text {
  grid-area: name;
}
.add-valid,
.add-valid-text {
  grid-area: valid;
}
.add-ccv,
.add-ccv-text {
  grid-area: ccv;
}
.add-vendor,
.add-vendor-text {
  grid-area: vendor;
}
button {
  grid-area: button;
  max-width: 280px;
  text-transform: uppercase;
  background: black;
  font-weight: bolder;
  font-size: 1em;
  margin-top: 1em;
  border-radius: 6px;
  height: 3em;
  color: white;
}
</style>