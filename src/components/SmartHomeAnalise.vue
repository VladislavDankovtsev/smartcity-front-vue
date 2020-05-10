<template>
  <q-list bordered separator style="padding: 10px; display: flex;
                    flex-direction: column;
                    align-items: center;">
    <q-item>
      <q-item-section style="font-size: 14px">Средняя наружная температура: {{smartHome.avgTempOutCC}} </q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Средняя внутренняя температура: {{smartHome.avgTempInCC}}</q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Освещение (количествто раз реакции системы): {{smartHome.statusL}}</q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Количества использовний системой безопасностью: {{smartHome.countPersonS}}</q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Количества успешных прохождений системой безопасностью: {{smartHome.countSuccessPersonS}}</q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Нахождение системы на первом этаже: {{ smartHome.firstE * 100 / smartHome.countlist}}%</q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Нахождение системы на втором этаже: {{smartHome.secondE * 100 / smartHome.countlist}}%</q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Общее количество записей за период: {{smartHome.countlist}}</q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'SmartHomeAnalise',
  props: [
    'smartHome'
  ]
}
</script>

<style scoped>

</style>
