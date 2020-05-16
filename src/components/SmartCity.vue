<template>
  <q-page>
    <div style="padding: 16px;
            display: flex;
           flex-direction: column;
           align-items: center;">
      <q-card class="my-card" style="width: 900px">
          <div style="align-items: center;padding: 10px">
            <div class="q-body-2" style="font-size: 18px; font-family: Arial; text-align: center;" >
              Идея «Умного города» - это создание информационного пространства, где содержатся данные о
              работоспособности разного оборудования, счетчиков, датчиков, которые позволяют эффективно управлять
              качеством безопасности и различных оказываемых услуг. Получаемые данные в реальном времени дают
              возможность отслеживать состояние всех систем города и на основе этих данных принимать верные решения.
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
            <div class="q-body-2" style="margin-top: 10px; font-size: 18px; font-family: Arial; text-align: center;" >
              «Умный город» - это концепция интеграции различных информационных и коммуникационных технологий и Интернета
              вещей (IoT-решения) для управления городской инфраструктурой. Создание «умных городов» требует знаний
              в областях микроконтроллерных систем, сетевых технологий,
              интеллектуального анализа больших данных. Разработанный учебно-исследовательский стенд, наглядно представляющий различные системы
              умного города: производство, транспорт, сельское хозяйство, жилищно-коммунальное хозяйство (ЖКХ), их
              взаимодействие на аппаратном и программном уровнях.
            </div>
            <div class="q-body-2" style="margin-top: 10px; font-size: 18px; font-family: Arial; text-align: center;" >
              Архитектура разрабатываемого стенда представляет собой совокупность программно-аппаратных средств,
              позволяющие  в реальном времени отслеживать и анализировать получения данных с датчиков, сенсоров,
              а также получать информацию о реакции системы на получение тех или иных данных. Размещение
              информационной системы  может производится как локально, задействовав аппаратные  и вычислительные
              возможности организации, либо удаленно, с размещением серверной части, которая обеспечивает обработку
              и хранение  данных, например в дата-центре. Общая аппаратная организация стенда изображена на рисунке
            </div>
            <div style="margin: 10px; flex-direction: column;
           align-items: center; margin-left: 161px">
              <q-card class="my-card" style="margin: 10px; width: 578px;height: 288px; align-items: center">
                <q-img
                  src="../assets/schems.png"
                  style="height: 288px;width: 579px">
                </q-img>
              </q-card>
            </div>
            <div class="q-body-2" style="margin-top: 10px; font-size: 18px; font-family: Arial; text-align: center;" >
              Система управление стендом включает в себя ЦОД, на котором размещено сервер приложений (back-end и front-end),
              база данных, и Raspberry Pi.
              В качестве ЦОД, что и является системой управления, может выступать локальный сервер или персональный компьютер.
              На нем расположены сервер приложения, которые необходимы для обработки запросов и ответов, используя данные,
              которые находятся на сервере базы данных, расположенной на том же локальном сервере.
              Сервер-приложения «производство», «сельское хозяйство», «умный дом» и «транспорт»  могут располагаться как
              на отдельном сервере, так и на микрокомпьютере Raspberry Pi, мощности которого достаточно для обработки и
              отправления данных.
              Контроллер Arduino обеспечивает первичную обработку данных, поступающие с датчиков и сенсоров, а также
              подает команды на исполняющие устройства.
              Роутер обеспечивает беспроводное подключение микрокомпьютеров Raspberry Pi с ЦОД, на котором расположено
              Wi-Fi адаптер.
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
