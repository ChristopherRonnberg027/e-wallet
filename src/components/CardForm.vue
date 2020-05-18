
<template>
  <div class="card-form-wrapper">
    <form @submit.prevent="addNewCard" class="card-form">
      <p class="add-number-text">card number</p>
      <input class="add-number" type="text" v-model="addCard.cardNumber" />
      <p class="add-name-text">cardholder name</p>
      <input
        class="add-name"
        type="text"
        placeholder="firstname lastname"
        v-model="addCard.cardName"
      />
      <p class="add-valid-text">valid thru</p>
      <input class="add-valid" type="text" v-model="addCard.cardValid" />
      <p class="add-ccv-text">ccv</p>
      <input class="add-ccv" type="text" v-model="addCard.cardCCV" />
      <p class="add-vendor-text">vendor</p>
      <!-- <input class="add-vendor" type="text" v-model="selectVendor" /> -->
      <select class="add-vendor" v-model="addVendor">
        <option v-for="(vendor, index) in vendorInfo" :key="index">{{vendor.name}}</option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    addCard: Object
  },
  computed: {
    vendorInfo() {
      return this.$store.state.vendors;
    }
  },
  data() {
    return {
      addValidThru: "",
      addCCV: "",
      addCardHolderName: ""
    };
  },
  methods: {
    addNewCard(newcard) {
      this.$store.state.cards.push({
        id: this.addCCV,
        name: this.addCardHolderName,
        color: "red",
        valid: this.addValidThru,
        number: this.addCardNumber,
        active: false
      });
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
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "number number"
    "name name"
    "valid ccv"
    "vendor vendor";
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
</style>