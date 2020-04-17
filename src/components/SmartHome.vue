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
        time: '2020-04-17T16:51:40.743626',
        place_arrival: '---',
        place_department: '---'
      },
      climateControl: {
        id: '---',
        time: '2020-04-17T16:51:40.743626',
        temperatureIn: '0.0',
        temperatureOut: '0.0'
      },
      lighting: {
        id: '---',
        time: '2020-04-17T16:51:40.743626',
        system_status: '---',
        signal_source: '---'
      },
      security: {
        id: '---',
        time: '2020-04-17T16:51:40.743626',
        id_personal: 'unknow',
        door_status: '---'
      }
    }
  },
  mounted () {
    fetch('http://localhost:9090/smartcity/smarthome/online')
      .then(response => response.json())
      .then(json => {
        this.elevator = json.elevator
        this.climateControl = json.climateControl
        this.lighting = json.lighting
        this.security = json.security
      })
  }
}
</script>

<style scoped>

</style>
