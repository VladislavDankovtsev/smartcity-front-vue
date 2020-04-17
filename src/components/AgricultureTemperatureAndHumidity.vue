<template>
    <div>
      <q-card class="my-card" style="min-width: 300px;margin: 10px">
        <q-card-section>
          <div class="text-h6">Воздух</div>
        </q-card-section>
        <q-separator />
        <q-card-actions vertical>
          <q-list bordered separator style="display: flex;
                    flex-direction: column;
                    align-items: center;">
            <q-item>
              <q-item-section style="font-size: 14px">Температура воздуха: {{temperatureAndHumidity.temperature}}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section style="font-size: 14px">Влажность: {{temperatureAndHumidity.humidity}}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section style="font-size: 14px">Подогрев: {{temperatureAndHumidity.heatingElement}}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section style="font-size: 14px">Вентиляция: {{temperatureAndHumidity.fan}}</q-item-section>
            </q-item>
          </q-list>
        </q-card-actions>
      </q-card>

    </div>
</template>

<script>
export default {
  name: 'AgricultureTemperatureAndHumidity',
  props: [
    'temperatureAndHumidity'
  ]
}
</script>

<style scoped>

</style>
