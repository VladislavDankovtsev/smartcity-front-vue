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
          <h4>остальное</h4>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import AgricultureSoilMoisture from 'components/AgricultureSoilMoisture'
import AgricultureTemperatureAndHumidity from 'components/AgricultureTemperatureAndHumidity'
export default {
  name: 'Agriculture',
  components: {
    AgricultureSoilMoisture,
    AgricultureTemperatureAndHumidity
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
    fetch('http://localhost:9090/smartcity/agriculture/online')
      .then(response => response.json())
      .then(json => {
        this.soilMoisture = json.soilMoisture
        this.temperatureAndHumidity = json.temperatureAndHumidity
      })
  }
}
</script>

<style scoped>

</style>
