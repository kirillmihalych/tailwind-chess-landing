<template>
  <div class="app overflow-hidden">
    <div
      class="h-[700px] bg-main-375 md:bg-main-1366 2xl:bg-main-1920 bg-bottom-center bg-cover bg-no-repeat xl:bg-right 2xl:bg-bottom-center"
    >
      <section class="container xl:px-18 2xl:px-80 pt-[1.125rem] xl:pt-7 grid md:justify-start">
        <div class="content-wrapper--">
          <header
            class="font-golos font-bold text-[14.42px] md:text-[16.65px] text-main-100 leading-[1.08] uppercase flex gap-0.5 xl:gap-[6px] items-center"
          >
            <img src="../src/assets/images/logo.svg" alt="logo four chess knights inline" class="md:h-[31px]" />
            <h1>
              Клуб <br />
              четырех коней
            </h1>
          </header>
          <hgroup
            class="font-merriweather text-800 leading-small xl:leading-small uppercase text-main-200 mt-10 md:mt-15 md:w-max"
          >
            <h2 class="text-start">
              Превратите <br />
              уездный город
            </h2>
            <h2 class="text-center">В столицу</h2>
            <h2 class="text-end">земного шара</h2>
          </hgroup>
          <p class="font-golos text-500 text-main-200 leading-regular mt-6 md:text-center">
            Оплатите взнос на телеграммы для организации
            <br class="hidden md:inline-block" />Международного васюкинского турнира по шахматам
          </p>
          <nav class="golos-text font-medium text-center leading-regular flex flex-col gap-4 mt-8 md:mt-10 xl:flex-row">
            <a href="#" class="bg-black text-white py-3 xl:py-4 px-5 rounded-[4.125rem] xl:flex-1 xl:p-5"
              >Поддержать <br class="hidden xl:inline-block" />шахматную мысль</a
            >
            <a
              href="#"
              class="bg-white text-black bg-opacity-90 py-3 xl:py-4 px-5 rounded-[4.125rem] xl:flex-1 xl:p-5 xl:border-2 xl:border-black xl:bg-transparent"
              >Подробнее <br class="hidden xl:inline-block" />
              о турнире</a
            >
          </nav>
        </div>
      </section>
    </div>
    <!-- reusable component -->
    <section
      class="text-500 -translate-y-full md:translate-y-0 bg-highlight text-white font-merriweather uppercase leading-small py-3.5"
    >
      <ul class="list-disc list-inside flex items-center gap-4 px-3 whitespace-nowrap w-max">
        <li class="list-outside">Дело помощи утопающим — дело рук самих утопающих!</li>
        <li>Шахматы двигают вперед не только культуру, но и экономику!</li>
        <li>Лед тронулся, господа присяжные заседатели!</li>
        <li></li>
      </ul>
    </section>
    <!-- reusable component -->

    <!--  -->
    <section class="grid gap-9 mt-12 lg:mt-20 xl:px-18">
      <div
        class="text-700 container min-w-full grid gap-6 lg:place-items-start lg:gap-0 lg:grid-cols-1fr-1fr-auto auto-rows-max"
      >
        <!-- container -->
        <!-- work here -->
        <p
          class="font-merriweather self-end leading-snug text-main-200 uppercase lg:col-start-1 lg:col-span-2 lg:row-start-1"
        >
          Чтобы поддержать Международный васюкинский турнир
        </p>
        <img
          src="../src/assets/images/chess-players-375.png"
          alt="a group of chess players are playing"
          class="lg:col-start-3 lg:row-start-1 lg:row-span-2 self-start w-[450px]"
        />
        <p class="font-merriweather leading-snug text-main-200 uppercase lg:col-start-1 lg:col-span-2 lg:row-start-2">
          посетите лекцию на тему: <span class="text-highlight font-bold">«Плодотворная дебютная идея»</span>
        </p>
        <!-- work here -->
      </div>
      <div class="grid lg:grid-cols-auto-1fr lg:mt-16 lg:gap-11">
        <div>
          <img
            src="../src/assets/images/chess-player-think-375.png"
            alt="a chess player is thinking"
            class="w-full max-w-[475px]"
            srcset="
              ../src/assets/images/chess-player-think-375.png  375w,
              ../src/assets/images/player-think-1366.jpg      1024w
            "
          />
        </div>
        <div class="container font-golos">
          <p class="font-merriweather text-700 leading-snug text-main-200 uppercase mt-6">
            и Сеанс
            <span class="text-highlight font-bold">одновременной игры в шахматы на 160 досках</span> гроссмейстера
            О. Бендера
          </p>
          <!-- table like -->
          <ul
            class="text-500 leading-tight text-main-200 font-semibold mt-11 lg:before:content-[' '] lg:before:block lg:before:border-l-2 lg:before:h-full lg:before:absolute lg:relative lg:before:left-[48%]"
          >
            <li
              class="after:content-[' '] after:block after:border-[1px] after:my-4 lg:flex lg:items-center lg:flex-wrap after:w-full"
            >
              <p class="opacity-70 font-normal flex-1 lg:pr-2">Место проведения:</p>
              <p class="mt-3 flex-1 lg:mt-0 lg:pl-5">Клуб «Картонажник»</p>
            </li>
            <li
              class="after:content-[' '] after:block after:border-[1px] after:my-4 lg:flex lg:items-center lg:flex-wrap after:w-full"
            >
              <p class="opacity-70 font-normal flex-1 lg:pr-2">Дата и время мероприятия:</p>
              <p class="mt-3 lg:mt-0 flex-1 lg:pl-5">22 июня 1927 г. в 18:00</p>
            </li>
            <li
              class="after:content-[' '] after:block after:border-[1px] after:my-4 lg:flex lg:items-center lg:flex-wrap after:w-full"
            >
              <p class="opacity-70 font-normal flex-1 lg:pr-2">Стоимость входных билетов:</p>
              <p class="mt-3 lg:mt-0 flex-1 lg:pl-5">20 коп.</p>
            </li>
            <li
              class="after:content-[' '] after:block after:border-[1px] after:my-4 lg:flex lg:items-center lg:flex-wrap after:w-full"
            >
              <p class="opacity-70 font-normal flex-1 lg:pr-2">Стоимость за игру:</p>
              <p class="mt-3 lg:mt-0 flex-1 lg:pl-5">50 коп.</p>
            </li>
            <li class="lg:flex lg:items-center lg:flex-wrap after:w-full">
              <p class="opacity-70 font-normal flex-1 lg:pr-2">Взнос на телеграммы:</p>
              <p class="mt-3 flex-1 lg:mt-0 lg:pl-5">
                <span class="line-through decoration-red-500">100 руб.</span><span> 21 руб. 16 коп.</span>
              </p>
            </li>
          </ul>
          <!-- table like -->
          <a href="#" class="block text-link text-lg leading-tight mt-10">
            По всем вопросам обращаться в администрацию к К. Михельсону
          </a>
        </div>
      </div>
    </section>

    <!-- carousel  -->
    <section class="container min-w-full pt-32 font-golos text-main-200 leading-small">
      <h2 class="font-merriweather text-800 uppercase">Этапы преображения Васюков</h2>
      <p class="text-link leading-tight mt-3">Будущие источники обогащения васюкинцев</p>
      <div>
        <!-- slider -->
        <ol
          id="slider"
          class="min-w-full h-[300px] font-medium text-lg leading-tight flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
        >
          <!-- slides -->
          <div
            v-for="(group, i) in items"
            :key="i"
            class="snap-start container bg-polotno bg-[#E9DED4] bg-blend-color-burn min-w-full h-full flex-shrink-0 border-2 border-red-500 py-8 px-6 grid gap-7 transition linear delay-0"
          >
            <!-- <img src="../src/assets/images/plane-375.png" alt="" class="-translate-y-1/4" /> -->
            <li v-for="item in group" :key="item.number" class="grid grid-cols-auto-1fr gap-4">
              <div class="flex items-center justify-center text-xl font-semibold bg-white size-9 rounded-full">
                <span>{{ item.number }}</span>
              </div>
              <p class="text-500">
                {{ item.content }}
              </p>
            </li>
          </div>
          <!-- слайд конец -->
        </ol>
      </div>
      <div class="flex justify-center items-center gap-1 mt-6">
        <button @click="slideLeft" class="size-9 bg-gray-300 text-white rounded-full flex items-center justify-center">
          <i class="pi pi-chevron-left"></i>
        </button>
        <div class="size-2 bg-main-200 rounded-full"></div>
        <div class="size-2 bg-gray-300 rounded-full"></div>
        <div class="size-2 bg-gray-300 rounded-full"></div>
        <div class="size-2 bg-gray-300 rounded-full"></div>
        <div class="size-2 bg-gray-300 rounded-full"></div>
        <button @click="slideRight" class="size-9 bg-main-200 text-white rounded-full flex items-center justify-center">
          <i class="pi pi-chevron-right"></i>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = [
  [
    {
      number: 1,
      content: 'Строительство железнодорожной магистрали Москва-Васюки',
    },
    {
      number: 2,
      content: 'Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов',
    },
  ],
  [
    {
      number: 3,
      content:
        'Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет',
    },
  ],
  [
    {
      number: 4,
      content: 'Строительство дворца для турнира',
    },
    {
      number: 5,
      content: 'Размещение гаражей для гостевого автотранспорта',
    },
  ],
  [
    {
      number: 6,
      content: 'Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов',
    },
  ],
  [
    {
      number: 7,
      content:
        'Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн',
    },
  ],
]

const selectedIndex = ref(0)

const slideRight = () => {
  selectedIndex.value++
}
</script>

<style scoped>
.scrolled {
  transform: translateX(-100px);
}
</style>
