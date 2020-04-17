<template>
  <q-page>
    <div>
      <q-card class="my-card" style="min-width: 600px">
        <q-card-section>
          <div class="text-h6">Производство</div>
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
              <q-item-section style="font-size: 14px">Состояние манипулятора 1: {{manipulator1}}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section style="font-size: 14px">Состояние манипулятора 2: {{manipulator2}}</q-item-section>
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
  name: 'Production',
  data () {
    return {
      status: '---',
      manipulator1: 0,
      manipulator2: 0
    }
  },
  mounted () {
    fetch('http://localhost:9090/smartcity/production/online')
      .then(response => response.json())
      .then(json => {
        this.status = json.status
        this.manipulator1 = json.manipulator1
        this.manipulator2 = json.manipulator2
      })
  }
}
</script>

<style scoped>

</style>
