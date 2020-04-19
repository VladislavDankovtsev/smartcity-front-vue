<template>
  <q-page>
    <div>
      <q-card class="my-card" style="min-width: 600px">
        <q-card-section>
          <div class="text-h6">Умный дом</div>
        </q-card-section>
        <q-separator />
        <q-card-actions vertical>
          <div style="display: flex">
            <SmartHomeClimatControl
              v-bind:climateControl="climateControl"
            ></SmartHomeClimatControl>
            <SmartHomeLighting
              v-bind:lighting="lighting"
            ></SmartHomeLighting>
          </div>
          <div style="display: flex">
            <SmartHomeElevator
              v-bind:elevator="elevator"
            ></SmartHomeElevator>
            <SmartHomeSecurity
              v-bind:security="security"
            ></SmartHomeSecurity>
          </div>
          <h4>остальное</h4>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import SmartHomeSecurity from 'components/SmartHomeSecurity'
import SmartHomeElevator from 'components/SmartHomeElevator'
import SmartHomeLighting from 'components/SmartHomeLighting'
import SmartHomeClimatControl from 'components/SmartHomeClimatControl'
export default {
  name: 'SmartHome',
  components: {
    SmartHomeSecurity,
    SmartHomeElevator,
    SmartHomeLighting,
    SmartHomeClimatControl
  },
  data () {
    return {
      elevator: {
        id: '---',
        time: '---',
        place_arrival: '---',
        place_department: '---'
      },
      climateControl: {
        id: '---',
        time: '---',
        temperatureIn: '0.0',
        temperatureOut: '0.0'
      },
      lighting: {
        id: '---',
        time: '---',
        system_status: '---',
        signal_source: '---'
      },
      security: {
        id: '---',
        time: '---',
        id_personal: 'unknow',
        door_status: '---'
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
      fetch('http://localhost:9090/smartcity/smarthome/online')
        .then(response => response.json())
        .then(json => {
          this.elevator = json.elevator
          this.climateControl = json.climateControl
          this.lighting = json.lighting
          this.security = json.security
        })
        .catch((json) => {
          this.elevator.id = '---'
          this.elevator.time = '---'
          this.elevator.place_arrival = '---'
          this.elevator.place_department = '---'
          this.climateControl.id = '---'
          this.climateControl.time = '---'
          this.climateControl.temperatureIn = '---'
          this.climateControl.temperatureOut = '---'
          this.lighting.id = '---'
          this.lighting.time = '---'
          this.lighting.signal_source = '---'
          this.lighting.system_status = '---'
          this.security.id = '---'
          this.security.time = '---'
          this.security.door_status = '---'
          this.security.id_personal = 'unknow'
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
