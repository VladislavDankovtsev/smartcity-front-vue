<template>
  <q-list bordered separator style="padding: 10px; display: flex;
                    flex-direction: column;
                    align-items: center;">
    <q-item>
      <q-item-section style="font-size: 14px">Груз 1: {{transport.g1}} </q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Груз 2: {{transport.g2}} </q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Груз 3: {{transport.g3}} </q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Груз 4: {{transport.g4}} </q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Груз 5: {{transport.g5}} </q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Груз 6: {{transport.g6}} </q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Груз 7: {{transport.g7}} </q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Груз 8: {{transport.g8}} </q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Груз 9: {{transport.g9}} </q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Груз 10: {{transport.g10}} </q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Неопределенный груз: {{transport.gOther}} </q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Общее количество записей за период: {{transport.countlist}}</q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'TransportAnalise',
  props: [
    'transport'
  ]
}
</script>

<style scoped>

</style>
