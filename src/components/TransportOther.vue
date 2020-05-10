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
        <Loader v-if="loader"></Loader>
        <TransportAnalise v-if="checkConnection" v-bind:transport="transport"></TransportAnalise>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import TransportAnalise from 'components/TransportAnalise'
import Loader from 'components/Loader'

export default {
  name: 'TransportOther',
  components: {
    TransportAnalise,
    Loader
  },
  data () {
    return {
      dateStart: '2020-03-01 15:44',
      checkConnection: false,
      loader: false,
      dateEnd: '2020-04-03 17:44',
      sds: '',
      sde: '',
      transport: {
        g1: null,
        g2: null,
        g3: null,
        g4: null,
        g5: null,
        g6: null,
        g7: null,
        g8: null,
        g9: null,
        g10: null,
        gOther: null,
        countlist: null
      }
    }
  },
  methods: {
    loadData () {
      fetch('http://localhost:9090/smartcity/transport/history/avg?dateFrom=' + this.sds + '&dateTo=' + this.sde)
        .then(response => response.json())
        .then(json => {
          this.transport = json
          console.log('transport', this.transport)
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
