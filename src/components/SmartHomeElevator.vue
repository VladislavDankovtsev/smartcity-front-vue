<template>
  <q-card class="my-card" style="min-width: 300px;margin: 10px">
    <q-card-section>
      <div class="text-h6">Лифт</div>
    </q-card-section>
    <q-separator />
    <q-card-actions vertical>
      <q-list bordered separator style="display: flex;
                    flex-direction: column;
                    align-items: center;">
        <q-item>
          <q-item-section style="font-size: 14px">Место отправление: {{elevator.place_arrival}}</q-item-section>
        </q-item>
        <q-item>
          <q-item-section style="font-size: 14px">Место прибытие: {{elevator.place_department}}</q-item-section>
        </q-item>
      </q-list>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'SmartHomeElevator',
  props: [
    'elevator'
  ]
}
</script>

<style scoped>

</style>
