<template>
  <q-page
    class="fit col wrap justify-start items-start content-start"
    padding
  >
    <h3>Квитки на автобус</h3>
    <div class="row">
      <q-input
        rounded
        outlined
        v-model="from"
        label="Звідки"
      />
      <div class="q-pa-md">
        <q-icon
          name="mdi-twitter-retweet"
          style="font-size: 4em;"
        />
      </div>
      <q-input
        rounded
        outlined
        v-model="to"
        label="Куди"
      />
      <div class="q-pa-md">
        <q-input rounded outlined v-model="date">
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-date v-model="date" mask="YYYY-MM-DD HH:mm" />
              </q-popup-proxy>
            </q-icon>
          </template>

          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <q-input rounded outlined
        v-model.number="passengers"
        type="number"
        style="max-width: 100px">
        <template v-slot:prepend>
          <q-icon name="mdi-seat-passenger" />
        </template>
      </q-input>
      <div class="q-pa-md" style="width: 200px;">
        <q-btn outlined
          :loading="findBtnLoading"
          color="secondary"
          class="fit"
          @click="getTrips()"
        >
          Знайти
          <template v-slot:loading>
            <q-spinner-hourglass class="on-left" />
              Loading...
          </template>
        </q-btn>
      </div>
    </div>
    <Trip v-for="(trip, i) in trip.data"
      :key="i"
      :trips="trip"
    />
  </q-page>
</template>

<script>
import { date } from 'quasar'
import { mapState } from 'vuex'

import Trip from 'src/components/trip'

const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD  HH:mm')

export default {
  name: 'PageIndex',
  components: {
    Trip
  },
  data () {
    return {
      date: formattedString,
      passengers: 1,
      findBtnLoading: false,
      from: '',
      to: ''
    }
  },
  methods: {
    async getTrips () {
      // we set loading state
      this.findBtnLoading = true
      await this.$store.dispatch('trip/getTrips', { self: this })
      this.findBtnLoading = false
    }
  },
  computed: {
    ...mapState(['trip'])
  }
}
</script>
