<template>
  <q-page>
    <div>
      <q-card class="my-card" style="min-width: 600px">
        <q-card-section>
          <div class="text-h6">Транспорт</div>
        </q-card-section>
        <q-separator />
        <q-card-actions vertical>
          <q-list bordered separator style="display: flex;
                  flex-direction: column;
                  align-items: center;">
            <q-item>
              <q-item-section style="font-size: 14px">Состояние системы: {{status}}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section style="font-size: 14px">Координаты X: {{x}}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section style="font-size: 14px">Координаты Y: {{y}}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section style="font-size: 14px">Тип груза: {{typeCargo}}</q-item-section>
            </q-item>
          </q-list>
          <h4>остальное</h4>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Transport',
  data () {
    return {
      status: '---',
      x: 0,
      y: 0,
      typeCargo: '-'
    }
  },
  mounted () {
    fetch('http://localhost:9090/smartcity/transport/online')
      .then(response => response.json())
      .then(json => {
        this.status = json.status
        this.x = json.x
        this.y = json.y
        this.typeCargo = json.typeCargo
      })
  }
}
</script>

<style scoped>

</style>
