<template>
  <q-card class="my-card" style="min-width: 300px;margin: 10px">
    <q-card-section>
      <div class="text-h6">Климат-контроль</div>
    </q-card-section>
    <q-separator />
    <q-card-actions vertical>
      <q-list bordered separator style="display: flex;
                    flex-direction: column;
                    align-items: center;">
        <q-item>
          <q-item-section style="font-size: 14px">Температура внутри: {{climateControl.temperatureIn}}</q-item-section>
        </q-item>
        <q-item>
          <q-item-section style="font-size: 14px">Температура снаружи: {{climateControl.temperatureOut}}</q-item-section>
        </q-item>
      </q-list>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'SmartHomeClimatControl',
  props: [
    'climateControl'
  ]
}
</script>

<style scoped>

</style>
