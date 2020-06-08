<template>
  <div class="row">
    <q-card class="tripCard">
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">{{ trips.carrier }}</div>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ trips.fullPrice }} грн.</div>
          <div class="text-caption text-grey">
            В дорозі {{ trips.wayTimeH }} годин {{ trips.wayTimeM }} хвилин
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        Відпралення
        <q-btn flat>
          {{ trips.dateDep | formatDate }}
        </q-btn>
        Прибуття
        <q-btn flat>
          {{ trips.dateArr | formatDate }}
        </q-btn>
        <q-btn flat color="primary">
          Резервувати
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'Trip',
  props: {
    trips: {
      type: Object,
      default: () => {}
    }
  },
  filters: {
    formatDate: (value) => {
      if (!value) return ''
      value = value.toString()
      return date.formatDate(value, 'YYYY-MM-DD')
    }
  }
}
</script>

<style lang="sass">
.tripCard
  width: 100%
  margin-bottom: 20px;
</style>
