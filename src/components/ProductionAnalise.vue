<template>
  <q-list bordered separator style="padding: 10px; display: flex;
                    flex-direction: column;
                    align-items: center;">
    <q-item>
      <q-item-section style="font-size: 14px">Кол-во переменщеных грузов: {{production.count}} </q-item-section>
    </q-item>
    <q-item>
      <q-item-section style="font-size: 14px">Общее количество записей за период: {{production.countlist}}</q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'ProductionAnalise',
  props: [
    'production'
  ]
}
</script>

<style scoped>

</style>
