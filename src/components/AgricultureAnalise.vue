<template>
  <q-list bordered separator style="padding: 10px; display: flex;
                    flex-direction: column;
                    align-items: center;">
    <q-item>
      <q-item-section style="font-size: 14px">Средняя влажность почвы: {{agriculture.avgHumiditySM}} %</q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Средняя влажность: {{agriculture.avgHumidityTH}} %</q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Средняя температура: {{agriculture.avgTemperatureTH}}</q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Вода (количествто раз реакции системы): {{agriculture.countWaterSM}}</q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Нагревательный элемент (количествто раз реакции системы): {{agriculture.countHeatingElementTH}}</q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Вентиляция (количествто раз реакции системы): {{agriculture.countFanTH}}</q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Общее количество записей за период: {{agriculture.countlist}}</q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'AgricultureAnalise',
  props: [
    'agriculture'
  ]
}
</script>

<style scoped>

</style>
