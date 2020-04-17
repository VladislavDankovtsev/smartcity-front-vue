<template>
    <div>
      <q-card class="my-card" style="min-width: 300px;margin: 10px">
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
</template>

<script>
export default {
  name: 'AgricultureSoilMoisture',
  props: [
    'soilMoisture'
  ]
}
</script>

<style scoped>

</style>
