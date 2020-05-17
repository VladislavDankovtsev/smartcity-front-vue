<template>
  <div>
    <div style="padding: 10px;
           align-items: center;">
        <div class="q-body-2" style="margin-top: 10px; font-size: 18px; font-family: Arial; text-align: center;">
          Список жителей прошедшие систему безопасности за указанный период
        </div>
        <table>
          <thead>
          <tr>
            <th style="width: 30px">#</th>
            <th style="width: 150px">ФИО</th>
            <th style="width: 150px">Количество посещений</th>
            <th style="width: 150px">Время последнего посещения</th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="(person, idx) of persons" :key="person.id">
              <td style="text-align: center;">{{idx+1}}</td>
              <td style="text-align: center;">{{person.name}}</td>
              <td style="text-align: center;">{{person.count}}</td>
              <td style="text-align: center;">{{person.timeLastStr}}</td>
            </tr>
          </tbody>
        </table>
        <div style="padding-bottom: 10px;">
          <q-btn color="primary" label="Получить полный список" @click="loadDataP"/>
        </div>
      </div>
    <Loader v-if="loader"></Loader>
    <SmartHomePersonsAll v-if="check" v-bind:personsAll="personsAll"></SmartHomePersonsAll>
  </div>
</template>

<script>
import SmartHomePersonsAll from 'components/SmartHomePersonsAll'
import Loader from 'components/Loader'

export default {
  name: 'SmartHomePersons',
  components: {
    SmartHomePersonsAll,
    Loader
  },
  data () {
    return {
      personsAll: [],
      check: false,
      loader: false
    }
  },
  props: {
    persons: {
      required: true,
      type: Array
    },
    sds: String,
    sde: String
  },
  methods: {
    loadDataP () {
      console.log('sds personsAll')
      this.loader = true
      console.log('sds personsAll', this.sds)
      console.log('sde personsAll', this.sde)
      fetch('http://localhost:9090/smartcity/smarthome/history/security/all?dateFrom=' + this.sds + '&dateTo=' + this.sde)
        .then(response => response.json())
        .then(json => {
          this.personsAll = json
          console.log('personsAll', this.personsAll)
          this.check = true
        })
      this.loader = false
    }
  }
}
</script>

<style scoped>

</style>
