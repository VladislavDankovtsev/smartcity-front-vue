<template>
    <div style="padding-top: 10px;
         align-items: center;
          min-width: 500px">
      <D3LineChart :config="chart_config" :datum="smartHomes"></D3LineChart>
    </div>
</template>

<script>
import { D3LineChart } from 'vue-d3-charts'

export default {
  name: 'SmartHomeGraphics',
  components: {
    D3LineChart
  },
  props: [
    'smartHomes'
  ],
  data () {
    return {
      chart_config: {
        date: {
          key: 'time',
          inputFormat: '%Y-%m-%dT%H:%M:%S.%f',
          outputFormat: '%Y-%m-%d'
        },
        values: ['temperatureIn', 'temperatureOut'],
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
          labels: { label: ['temperatureIn', 'temperatureOut'] }
        },
        transition: {
          duration: 350,
          ease: 'easeQuadOut'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
