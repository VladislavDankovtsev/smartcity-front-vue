<template>
  <div style="padding: 10px;
           align-items: center;">
    <div class="q-body-2" style="margin-top: 10px; font-size: 18px; font-family: Arial; text-align: center;">
      Полный список
    </div>
    <table>
      <thead>
      <tr>
        <th style="width: 10px">#</th>
        <th style="width: 250px">ФИО</th>
        <th style="width: 200px">Время посещения</th>
        <th style="width: 100px">Статус</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(person, idx) of personsAll" :key="person.timeLast">
        <td style="text-align: center;">{{idx+1}}</td>
        <td style="text-align: center;">{{person.name}}</td>
        <td style="text-align: center;">{{person.timeLastStr}}</td>
        <td style="text-align: center;">
          <q-icon v-if="person.status === 'on'" name="check" style="font-size: 1rem;color: greenyellow" />
          <q-icon v-if="person.status === 'off'" name="error" style="font-size: 1rem;color: red" />
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SmartHomePersonsAll',
  props: {
    personsAll: {
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
