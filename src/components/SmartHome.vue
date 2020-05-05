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
          <SmartHomeOther></SmartHomeOther>
          <div style="
               align-items: center;">
            <h7>тестовый график температур</h7>
            <D3LineChart :config="chart_config" :datum="chart_data"></D3LineChart>
          </div>
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
import SmartHomeOther from 'components/SmartHomeOther'
import { D3LineChart } from 'vue-d3-charts'

export default {
  name: 'SmartHome',
  components: {
    SmartHomeSecurity,
    SmartHomeElevator,
    SmartHomeLighting,
    SmartHomeClimatControl,
    SmartHomeOther,
    D3LineChart
  },
  data () {
    return {
      elevator: {
        id: '---',
        time: '2019-08-01T10:01:10',
        place_arrival: '---',
        place_department: '---'
      },
      climateControl: {
        id: '---',
        time: '',
        temperatureIn: '0.0',
        temperatureOut: '0.0'
      },
      lighting: {
        id: '---',
        time: '',
        system_status: '---',
        signal_source: '---'
      },
      security: {
        id: '---',
        time: '',
        id_personal: 'unknow',
        door_status: '---'
      },
      chart_data: [{
        time: '2019-08-01T10:01:10',
        tempIn: 30,
        tempOut: 20
      }, {
        time: '2019-08-01T10:01:20',
        tempIn: 32,
        tempOut: 12
      }, {
        time: '2019-08-01T10:01:30',
        tempIn: 37,
        tempOut: 10
      }, {
        time: '2019-08-01T10:02:10',
        tempIn: 17,
        tempOut: 26
      }, {
        time: '2019-08-01T10:03:15',
        tempIn: 7,
        tempOut: 0
      }],
      chart_config: {
        date: {
          key: 'time',
          inputFormat: '%Y-%m-%dT%H:%M:%S',
          outputFormat: '%H:%M'
        },
        values: ['tempIn', 'tempOut'],
        axis: {
          yTitle: 'Градусы',
          xTitle: 'время',
          yFormat: '.0f',
          xFormat: '%H:%M',
          yTicks: 5,
          xTicks: 4
        },
        color: {
          key: false,
          keys: false,
          scheme: 'schemeCategory10',
          current: 'red',
          default: '#AAA',
          axis: '#000'
        },
        curve: 'curveBasis',
        margin: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 40
        },
        points: {
          visibleSize: 3,
          hoverSize: 6
        },
        tooltip: {
          labels: { label: ['tempIn', 'tempOut'] }
        },
        transition: {
          duration: 350,
          ease: 'easeQuadOut'
        }
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
          // eslint-disable-next-line no-undef
          this.elevator.time = datesetting(json.elevator.time)
          this.climateControl = json.climateControl
          this.lighting = json.lighting
          this.security = json.security
        })
        .catch((json) => {
          this.elevator.id = '---'
          this.elevator.time = ''
          this.elevator.place_arrival = '---'
          this.elevator.place_department = '---'
          this.climateControl.id = '---'
          this.climateControl.time = ''
          this.climateControl.temperatureIn = '---'
          this.climateControl.temperatureOut = '---'
          this.lighting.id = '---'
          this.lighting.time = ''
          this.lighting.signal_source = '---'
          this.lighting.system_status = '---'
          this.security.id = '---'
          this.security.time = ''
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
  },
  computed: {
    localeDate () {
      // Конвертируем число в строку. Для этого существуют специальные методы
      // toLocaleDateString() или toLocaleString() или toLocaleTimeString()
      // Итоговая строка будет зависеть от локализации системы пользователя.
      // Для русской локали это будет "01.02.2020",
      // для американской "2/1/2020",
      // для немецкой — "1.2.2020"
      // Вы НЕ должны устанавливать формат даты самостоятельно
      return (new Date(this.elevator.time)).toLocaleDateTimeString()
    }
  }
}
</script>

<style scoped>

</style>
