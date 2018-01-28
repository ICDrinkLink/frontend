<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-6 is-offset-3">
          <h3 class="title is-3">Estimate Intake</h3>
          <p class="content">Choose a type of alcohol and select the amount consumed to estimate the number of units consumed.</p>

          <div class="columns is-multiline">
            <div class="column is-12-touch">
              <div class="field">
                <label class="label">Type</label>
                <div class="select">
                  <select title="Type" v-model="type" @change="subtype = ''">
                    <option disabled value="">Select an option</option>
                    <option :value="key" :key="key" v-for="(item, key) in drinks">{{ item.name }}</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="column is-12-touch">
              <div class="field">
                <label class="label">Subtype</label>
                <div class="select">
                  <select :disabled="!type" title="Subtype" v-model="subtype" @change="amount = ''">
                    <option disabled v-if="!type" value="">Select a type first</option>
                    <template v-else>
                      <option disabled value="">Select an option</option>
                      <option :value="key" :key="key" v-for="(item, key) in drinks[type].items">{{ item.name }}</option>
                    </template>
                  </select>
                </div>
              </div>
            </div>

            <div class="column is-12-touch">
              <div class="field">
                <label class="label">Amount</label>
                <div class="select">
                  <select :disabled="!subtype" title="Subtype" v-model="amount">
                    <option disabled v-if="!subtype" value="">Select a subtype first</option>
                    <template v-else>
                      <option disabled value="">Select an option</option>
                      <option :value="key" :key="key" v-for="(item, key) in amounts">{{ item.name }}</option>
                    </template>
                  </select>
                </div>
              </div>
            </div>

            <div class="column is-12-touch">
              <div v-if="units" class="content has-text-centered">
                <p><span class="title is-4">{{ units }}</span> units</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Data from '~/components/Data.vue'

  export default {
    data () {
      return {
        drinks: Data.data().drinks,
        amounts: Data.data().amounts,
        type: '',
        subtype: '',
        amount: ''
      }
    },
    computed: {
      abv () {
        if (this.type && this.subtype) {
          return this.drinks[this.type].items[this.subtype].abv
        } else {
          return null
        }
      },
      units () {
        if (this.abv && this.amount) {
          return (this.amounts[this.amount].amount * this.abv / 1000).toFixed(2)
        } else {
          return null
        }
      }
    }
  }
</script>

<style scoped>
  .button {
    font-size: 1.5rem;
    width: 100%;
    margin: 1rem 0;
  }

  select,
  .select {
    width: 100%;
  }
</style>
