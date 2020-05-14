<template>
  <div class="wrapper">
    <p class="title" v-if="title">{{title}}</p>
    <article class="card">
      <section class="top-card"></section>
      <section class="numbers">
        <p class="number">1234 5678 9101 1123</p>
      </section>
      <section class="personal-information">
        <p class="cardholder-name">cardholder name</p>
        <p class="name-text">christopher rönnberg</p>
        <p class="valid-thru">valid thru</p>
        <p class="date-text">12/22</p>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style style="scss">

.title {
  text-transform: uppercase;
  font-size: 0.7em;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 1em;
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.card {
  border-radius: 10px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  width: 16em;
  height: 9em;
  padding: 1em;
  background: yellow;
  box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-area: 
  "symbol" 
  "number" 
  "personal";
}
/* .top-card{
  grid-area: symbol;
} */
.number {
  grid-area: number;
  font-size: 1.1em;
  font-weight: 400;
}

.personal-information {
  grid-area: personal;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
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
</style>
