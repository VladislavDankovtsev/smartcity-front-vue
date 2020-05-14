<template>
  <div style="padding-top: 10px;
         align-items: center;
          min-width: 500px">
    <D3LineChart :config="chart_config" :datum="agricultures"></D3LineChart>
    <D3LineChart :config="chart_config1" :datum="agricultures"></D3LineChart>
  </div>
</template>

<script>

import { D3LineChart } from 'vue-d3-charts'
export default {
  name: 'AgricultureGraphics',
  components: {
    D3LineChart
  },
  props: [
    'agricultures'
  ],
  data () {
    return {
      chart_config: {
        date: {
          key: 'time',
          inputFormat: '%Y-%m-%dT%H:%M:%S.%f',
          outputFormat: '%Y-%m-%d'
        },
        values: ['humiditySM', 'humidityTaH'],
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
          labels: { label: ['humiditySM', 'humidityTaH'] }
        },
        transition: {
          duration: 350,
          ease: 'easeQuadOut'
        }
      },
      chart_config1: {
        date: {
          key: 'time',
          inputFormat: '%Y-%m-%dT%H:%M:%S.%f',
          outputFormat: '%Y-%m-%d'
        },
        values: ['temperature'],
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
          labels: { label: ['temperature'] }
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
