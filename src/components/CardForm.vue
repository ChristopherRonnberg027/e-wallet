<template>
  <div class="card-form-wrapper">
    <p class="card-title">{{title}}</p>
    <div class="card-form">
      <p class="add-number-text">card number</p>
      <input class="add-number" type="text" placeholder="XXXX XXXX XXXX XXXX" v-model="card.number" />
      <p class="add-name-text">cardholder name</p>
      <input class="add-name" type="text" placeholder="firstname lastname" v-model="card.name" />
      <p class="add-valid-text">valid thru</p>
      <input class="add-valid" type="text" placeholder="MM/YY" v-model="card.valid" />
      <p class="add-ccv-text">ccv</p>
      <input class="add-ccv" type="text" placeholder="XXX" v-model="card.ccv" />
      <p class="add-vendor-text">vendor</p>
      <select class="add-vendor" v-model="card.vendor" @change="changeVendor">
        <option
          v-for="(vendor, index) in vendors"
          :key="index"
          :style="{background: vendor.color}"
          v-text="vendor.name"
        ></option>
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
    // vendor() {
    //   return this.$store.state.vendors[this.card.vendor];
    // }
  },
  data() {
    return {
      // inputValues: this.card,
      // valid : '',
      // number : '',
      // name : '',
      // ccv : '',
      // vendor : ''
    };
  },
  methods: {
    toAddCard() {
      const newCard = {
        valid: this.card.valid,
        number: this.card.number,
        name: this.card.name,
        ccv: this.card.ccv,
        vendor: this.card.vendor
      };
      this.$store.state.cards.push(newCard);
      this.$router.push({ name: "Home" });
    },
    changeVendor() {
      console.log(this.card.vendor);
      this.card.vendor;
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