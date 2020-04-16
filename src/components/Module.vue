<template>
  <q-page>
    <div style="padding: 16px">
      <div style="display: flex;
           flex-direction: column;
           align-items: center;">
        <h9>
          Системы умного города
        </h9>
        <p></p>
        <q-btn-group outline>
          <q-btn outline @click="goSmartHome" color="blue" label="Умный дом" />
          <q-btn outline @click="goAgriculture" color="blue" label="Сельское хозяйтсво"  />
          <q-btn outline @click="goProduction" color="blue" label="Производство" />
          <q-btn outline @click="goTransport" color="blue" label="Транспорт" />
        </q-btn-group>
        <q-page-container>
          <router-view />
        </q-page-container>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Module',
  methods: {
    goSmartHome () {
      this.$router.push('/systems/smarthome')
    },
    goAgriculture () {
      this.$router.push('/systems/agriculture')
    },
    goProduction () {
      this.$router.push('/systems/production')
    },
    goTransport () {
      this.$router.push('/systems/transport')
    }
  }
}
</script>

<style scoped>

</style>
