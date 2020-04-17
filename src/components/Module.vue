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
      </div>
        <div style="display: flex">
          <ServerStatus></ServerStatus>
          <div style="padding: 16px;display: flex;
               flex-direction: column;
               align-items: center;">
            <q-page-container style="padding-top: 10px">
              <router-view />
            </q-page-container>
          </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import ServerStatus from 'components/ServerStatus'

export default {
  name: 'Module',
  components: {
    ServerStatus
  },
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
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
