<template>
  <q-header elevated class="bg-white header text-black">
    <div class="q-pa-md">
      <div class="bg-cyan text-white">
        <q-toolbar>
          <q-toolbar-title>Учебно-исследователский стенд "Системы умного города"</q-toolbar-title>
        </q-toolbar>
        <q-toolbar inset>
          <q-breadcrumbs active-color="white" style="font-size: 16px">
            <q-breadcrumbs-el @click="goHome" label="Главная" icon="home" />
            <q-breadcrumbs-el @click="goSystem" label="Системы умного города"  />
            <q-breadcrumbs-el @click="goSetting" label="Настройки" />
            <q-breadcrumbs-el @click="goDocumentations" label="Документация" />
            <q-breadcrumbs-el @click="goContacts" label="Конакты" />
          </q-breadcrumbs>
        </q-toolbar>
      </div>
    </div>
  </q-header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      tab: ''
    }
  },
  methods: {
    goHome () {
      this.$router.push('/')
    },
    goSystem () {
      this.$router.push('/systems')
    },
    goContacts () {
      this.$router.push('/contacts')
    },
    goSetting () {
      this.$router.push('/setting')
    },
    goDocumentations () {
      this.$router.push('/documents')
    }
  }
}
</script>

<style scoped>

</style>
