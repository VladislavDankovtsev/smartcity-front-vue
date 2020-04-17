<template>
    <div class="q-pa-md" style="width: 300px">
      <q-list bordered separator>
        <q-item v-for="server in servers"  v-bind:key="server.id">
          <q-item-section style="font-size: 18px">{{server.name}}</q-item-section>
          <q-icon v-if="server.status === 'on'" name="check" style="font-size: 2rem;color: greenyellow" />
          <q-icon v-if="server.status === 'off'" name="error" style="font-size: 2rem;color: red" />
        </q-item>
      </q-list>
    </div>
</template>

<script>
export default {
  name: 'ServerStatus',
  data () {
    return {
      servers: [
        {
          id: 1,
          ip: 'http://localhost:9081/agricalture/check',
          name: 'Умный дом',
          status: 'off'
        },
        {
          id: 2,
          ip: 'http://localhost:9082/agricalture/check',
          name: 'Сельcкое хозяйство',
          status: 'on'
        },
        {
          id: 3,
          ip: 'http://localhost:9083/agricalture/check',
          name: 'Проиводство',
          status: 'on'
        },
        {
          id: 4,
          ip: 'http://localhost:9084/agricalture/check',
          name: 'Транспорт',
          status: 'off'
        }
      ]
    }
  },
  mounted () {
    fetch('http://localhost:9090/smartcity/status')
      .then(response => response.json())
      .then(json => {
        this.servers = json
      })
  }
}
</script>

<style scoped>

</style>
