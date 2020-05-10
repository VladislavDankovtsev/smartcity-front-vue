<template>
  <div>
    <q-card class="my-card" style="min-width: 300px;margin: 10px">
      <q-card-section>
        <div class="text-h6">Аналитические данные</div>
      </q-card-section>
      <q-separator />
      <q-card-actions vertical style="display: flex;
           flex-direction: column;
           align-items: center;">
        <h7>Введите даты начала и окончание периода</h7>
        <div style="display: flex">
          <div class="q-pa-md" style="max-width: 300px">
            <q-input filled v-model="dateStart">
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-date v-model="dateStart" mask="YYYY-MM-DD HH:mm" />
                  </q-popup-proxy>
                </q-icon>
              </template>

              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-time v-model="dateStart" mask="YYYY-MM-DD HH:mm" format24h />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>

          <div class="q-pa-md" style="max-width: 300px">
            <q-input filled v-model="dateEnd">
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-date v-model="dateEnd" mask="YYYY-MM-DD HH:mm" />
                  </q-popup-proxy>
                </q-icon>
              </template>

              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-time v-model="dateEnd" mask="YYYY-MM-DD HH:mm" format24h />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>
        <div style="padding-bottom: 10px">
          <q-btn color="primary" label="Анализ" @click="analysis"/>
        </div>
        <Loader  v-if="loader"></Loader>
        <ProductionAnalise v-if="checkConnection" v-bind:production="production"></ProductionAnalise>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import ProductionAnalise from 'components/ProductionAnalise'
import Loader from 'components/Loader'

export default {
  name: 'ProductionOther',
  components: {
    ProductionAnalise,
    Loader
  },
  data () {
    return {
      dateStart: '2020-03-01 15:44',
      dateEnd: '2020-04-03 17:44',
      loader: false,
      checkConnection: false,
      sds: '',
      sde: '',
      production: {
        count: null,
        countlist: null
      }
    }
  },
  methods: {
    loadData () {
      fetch('http://localhost:9090/smartcity/production/history/avg?dateFrom=' + this.sds + '&dateTo=' + this.sde)
        .then(response => response.json())
        .then(json => {
          this.production = json
          console.log('production', this.production)
          this.checkConnection = true
        })
      this.loader = false
    },
    analysis () {
      this.loader = true
      var tzoffset = (new Date()).getTimezoneOffset() * 60000
      var sss = (new Date(this.dateStart))
      const ds = (new Date(sss - tzoffset))
      var eee = (new Date(this.dateEnd))
      const de = new Date(eee - tzoffset)
      console.log('sds', ds)
      this.sds = ds.toISOString().slice(0, -1)
      this.sde = de.toISOString().slice(0, -1)
      console.log('sds', this.sds)
      console.log('sde', this.sde)
      this.loadData()
    }
  }
}
</script>

<style scoped>

</style>
