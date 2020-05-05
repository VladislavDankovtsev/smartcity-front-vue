<template>
  <q-page>
    <div>
      <q-card class="my-card" style="min-width: 600px">
        <q-card-section>
          <div class="text-h6">Сельское хозяйство</div>
        </q-card-section>
        <q-separator />
        <q-card-actions vertical>
          <div style="display: flex">
           <AgricultureSoilMoisture
              v-bind:soilMoisture="soilMoisture"
           ></AgricultureSoilMoisture>
           <AgricultureTemperatureAndHumidity
              v-bind:temperatureAndHumidity="temperatureAndHumidity"
           ></AgricultureTemperatureAndHumidity>
          </div>
          <AgricutureOther></AgricutureOther>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import AgricultureSoilMoisture from 'components/AgricultureSoilMoisture'
import AgricultureTemperatureAndHumidity from 'components/AgricultureTemperatureAndHumidity'
import AgricutureOther from 'components/AgricutureOther'
export default {
  name: 'Agriculture',
  components: {
    AgricultureSoilMoisture,
    AgricultureTemperatureAndHumidity,
    AgricutureOther
  },
  data () {
    return {
      soilMoisture: {
        id: '---',
        time: '',
        humidity: '0.0',
        water: false
      },
      temperatureAndHumidity: {
        id: '---',
        time: '',
        temperature: '0.0',
        humidity: '0.0',
        heatingElement: false,
        fan: true
      }
    }
  },
  mounted () {
    this.startTimer()
  },
  beforeDestroy () {
    this.stopTimer()
  },
  methods: {
    loadData () {
      fetch('http://localhost:9090/smartcity/agriculture/online')
        .then(response => response.json())
        .then(json => {
          this.soilMoisture = json.soilMoisture
          this.temperatureAndHumidity = json.temperatureAndHumidity
        })
        .catch((json) => {
          this.soilMoisture.id = '---'
          this.soilMoisture.time = '---'
          this.soilMoisture.water = false
          this.soilMoisture.humidity = '0.0'
          this.temperatureAndHumidity.id = '---'
          this.temperatureAndHumidity.fan = false
          this.temperatureAndHumidity.heatingElement = true
          this.temperatureAndHumidity.humidity = '0.0'
          this.temperatureAndHumidity.temperature = '0.0'
          this.temperatureAndHumidity.time = '---'
        })
    },
    stopTimer () {
      if (this.interval) {
        window.clearInterval(this.interval)
      }
    },
    startTimer () {
      this.stopTimer()
      this.interval = window.setInterval(() => {
        this.loadData()
      }, 10000)
    }
  }
}
</script>

<style scoped>

</style>
