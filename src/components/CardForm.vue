
<template>
  <div class="card-form-wrapper">
    <form @submit.prevent="addNewCard" class="card-form">
      <p class="add-number-text">card number</p>
      <input class="add-number" type="text" v-model="addCardNumber" />
      <p class="add-name-text">cardholder name</p>
      <input
        class="add-name"
        type="text"
        placeholder="firstname lastname"
        v-model="addCardHolderName"
      />
      <p class="add-valid-text">valid thru</p>
      <input class="add-valid" type="text" v-model="addValidThru" />
      <p class="add-ccv-text">ccv</p>
      <input class="add-ccv" type="text" v-model="addCCV" />
      <p class="add-vendor-text">vendor</p>
      <!-- <input class="add-vendor" type="text" v-model="selectVendor" /> -->
      <select class="add-vendor" >
        <option v-for="vendor in vendorInfo" :key="vendor" >{{vendor.name}}</option>
        <!-- <option>bitcoin inc</option>
        <option>ninja bank</option>
        <option>block chain inc</option>
        <option>evil corp</option>-->
      </select>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    vendorInfo() {
      return this.$store.state.vendorTypes;
    }
  },
  methods: {
    addNewCard(newcard){
      this.$store.state.cards.push({id: addCCV, name: addCardHolderName, color: 'red', valid: addValidThru, number: addCardNumber, active : false})
      console.log(this.$store.state.cards)
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