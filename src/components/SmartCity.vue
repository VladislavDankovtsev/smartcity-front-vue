<template>
  <q-page>
    <div style="padding: 16px;
            display: flex;
           flex-direction: column;
           align-items: center;">
      <q-card class="my-card" style="width: 900px">
          <div style="align-items: center;padding: 10px">
            <div class="q-body-2" style="font-size: 18px; font-family: Arial; text-align: center;" >
            «Умный город» - это концепция интеграции различных информационных и коммуникационных технологий и Интернета
            вещей (IoT-решения) для управления городской инфраструктурой. Создание «умных городов» высококфалифицированных
            специалистов, обладающих знаниями в областях микроконтроллерных систем, сетевых технологий, компьютерного зрения,
            интеллектуального анализа больших данных. Для подготовки кадровв Московском техническом университете связи и
            информатики (МТУСИ) разрабатывается учебно-исследовательский стенд, наглядно представляющий различные системы
            умного города: производство, транспорт, сельское хозяйство, жилищно-коммунальное хозяйство (ЖКХ), их
            взаимодействие на аппаратном и программном уровнях. В статье описаны основные этапы проектирования системы
            управления и учебно-исследовательского стенда «Системы умного города».
            </div>
            <div style="display: flex">
              <q-card @click="goSmartHome" class="my-card" style="margin: 10px; width: 200px;height: 200px;">
                <q-img
                  src="../assets/home.jpg"
                  style="height: 200px;width: 200px">
                  <div class="absolute-bottom text-body1 text-center">
                    Умный дом
                  </div>
                </q-img>
              </q-card>
              <q-card @click="goAgriculture" class="my-card" style="margin: 10px; width: 200px;height: 200px">
                <q-img
                  src="../assets/agriculture.jpg"
                  style="height: 200px;width: 200px">
                  <div class="absolute-bottom text-body1 text-center">
                    Сельское хозяйство
                  </div>
                </q-img>
              </q-card>
              <q-card @click="goProduction" class="my-card" style="margin: 10px; width: 200px;height: 200px">
                <q-img
                  src="../assets/production.jpg"
                  style="height: 200px;width: 200px">
                  <div class="absolute-bottom text-body1 text-center">
                    Производство
                  </div>
                </q-img>
              </q-card>
              <q-card @click="goTransport" class="my-card" style="margin: 10px; width: 200px;height: 200px">
                <q-img
                  src="../assets/transport.jpg"
                  style="height: 200px;width: 200px">
                  <div class="absolute-bottom text-body1 text-center">
                    Транспорт
                  </div>
                </q-img>
              </q-card>
            </div>

          </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'SmartCity',
  methods: {
    goSmartHome () {
      this.$router.push('/smarthome')
    },
    goAgriculture () {
      this.$router.push('/agriculture')
    },
    goProduction () {
      this.$router.push('/production')
    },
    goTransport () {
      this.$router.push('/transport')
    }
  }
}
</script>

<style scoped>
  p{
    color: #cc2152;
    font-size: 14px;
  }
</style>
