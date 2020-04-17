<template>
  <q-page>
    <div>
      <q-card class="my-card" style="min-width: 600px">
        <q-card-section>
          <div class="text-h6">Сельское хозяйство</div>
        </q-card-section>
        <q-separator />
        <q-card-actions vertical>
          <div style="display: flex">

            <q-card class="my-card" style="min-width: 300px;padding-left: 20px">
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

            <q-card class="my-card" style="min-width: 300px;padding-right: 20px">
              <q-card-section>
                <div class="text-h6">Почва</div>
              </q-card-section>
              <q-separator />
              <q-card-actions vertical>
                  <q-list bordered separator style="display: flex;
                    flex-direction: column;
                    align-items: center;">
                    <q-item>
                      <q-item-section style="font-size: 14px">Влажность почвы: {{soilMoisture.humidity}}</q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section style="font-size: 14px">Вода: {{soilMoisture.water}}</q-item-section>
                    </q-item>
                  </q-list>
              </q-card-actions>
            </q-card>
          </div>

          <h4>остальное</h4>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Agriculture',
  data () {
    return {
      soilMoisture: {
        humidity: '0.0',
        water: false
      },
      temperatureAndHumidity: {
        temperature: '0.0',
        humidity: '0.0',
        heatingElement: false,
        fan: true
      }
    }
  },
  mounted () {
    fetch('http://localhost:9090/smartcity/agriculture/online')
      .then(response => response.json())
      .then(json => {
        this.soilMoisture.humidity = json.soilMoisture.humidity
        this.soilMoisture.water = json.soilMoisture.water
        this.temperatureAndHumidity.temperature = json.temperatureAndHumidity.temperature
        this.temperatureAndHumidity.humidity = json.temperatureAndHumidity.humidity
        this.temperatureAndHumidity.heatingElement = json.temperatureAndHumidity.heatingElement
        this.temperatureAndHumidity.fan = json.temperatureAndHumidity.fan
      })
  }
}
</script>

<style scoped>

</style>
