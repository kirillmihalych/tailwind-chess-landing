<template>
  <div class="app overflow-hidden">
    <div
      class="h-[700px] bg-main-375 md:bg-main-1366 2xl:bg-main-1920 bg-bottom-center bg-cover bg-no-repeat xl:bg-right"
    >
      <section class="container xl:px-18 2xl:px-80 pt-[1.125rem] xl:pt-7 grid md:justify-start">
        <div class="content-wrapper">
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
            class="font-merriweather text-4xl md:text-5xl xl:text-6xl leading-small xl:leading-small uppercase text-main-200 mt-10 md:mt-15 md:w-max"
          >
            <h2 class="text-start">
              Превратите <br />
              уездный город
            </h2>
            <h2 class="text-center">В столицу</h2>
            <h2 class="text-end">земного шара</h2>
          </hgroup>
          <p class="font-golos text-lg text-main-200 leading-regular mt-6 md:text-center">
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
      class="-translate-y-full md:translate-y-0 bg-highlight text-white font-merriweather uppercase leading-small py-3.5"
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
    <section class="grid gap-9 mt-12 lg:mt-20">
      <div
        class="container grid gap-6 lg:gap-0 lg:place-items-center lg:grid-cols-3 lg:auto-rows-[75px] xl:auto-rows-[80px]"
      >
        <p
          class="font-merriweather text-2.5xl xl:text-4xl leading-snug text-main-200 uppercase lg:col-start-1 lg:row-start-1 lg:col-span-2"
        >
          Чтобы поддержать Международный васюкинский турнир
        </p>
        <img
          src="../src/assets/images/chess-players-375.png"
          alt="a group of chess players are playing"
          class="lg:col-start-3 lg:row-start-1 lg:row-span-2"
        />
        <p
          class="font-merriweather text-2.5xl xl:text-4xl leading-snug text-main-200 uppercase lg:col-start-1 lg:col-span-2 lg:row-start-2"
        >
          посетите лекцию на тему: <span class="text-highlight font-bold">«Плодотворная дебютная идея»</span>
        </p>
      </div>
      <div class="grid lg:grid-cols-auto-1fr lg:mt-16 lg:gap-11">
        <div>
          <img
            src="../src/assets/images/chess-player-think-375.png"
            alt="a chess player is thinking"
            class="w-[475px]"
          />
        </div>
        <div class="container font-golos">
          <p class="font-merriweather text-2.5xl xl:text-4xl leading-snug text-main-200 uppercase mt-6">
            и Сеанс
            <span class="text-highlight font-bold">одновременной игры в шахматы на 160 досках</span> гроссмейстера
            О. Бендера
          </p>
          <!-- table like -->
          <ul
            class="text-xl leading-tight text-main-200 font-semibold mt-11 lg:before:content-[' '] lg:before:block lg:before:border-l-2 lg:before:h-full lg:before:absolute lg:relative lg:before:left-[45%]"
          >
            <li
              class="after:content-[' '] after:block after:border-[1px] after:my-4 lg:flex lg:items-center lg:flex-wrap after:w-full"
            >
              <p class="opacity-70 font-normal flex-1">Место проведения:</p>
              <p class="mt-3 flex-1 lg:mt-0">Клуб «Картонажник»</p>
            </li>
            <li
              class="after:content-[' '] after:block after:border-[1px] after:my-4 lg:flex lg:items-center lg:flex-wrap after:w-full"
            >
              <p class="opacity-70 font-normal flex-1">Дата и время мероприятия:</p>
              <p class="mt-3 lg:mt-0 flex-1">22 июня 1927 г. в 18:00</p>
            </li>
            <li
              class="after:content-[' '] after:block after:border-[1px] after:my-4 lg:flex lg:items-center lg:flex-wrap after:w-full"
            >
              <p class="opacity-70 font-normal flex-1">Стоимость входных билетов:</p>
              <p class="mt-3 lg:mt-0 flex-1">20 коп.</p>
            </li>
            <li
              class="after:content-[' '] after:block after:border-[1px] after:my-4 lg:flex lg:items-center lg:flex-wrap after:w-full"
            >
              <p class="opacity-70 font-normal flex-1">Стоимость за игру:</p>
              <p class="mt-3 lg:mt-0 flex-1">50 коп.</p>
            </li>
            <li class="lg:flex lg:items-center lg:flex-wrap after:w-full">
              <p class="opacity-70 font-normal flex-1">Взнос на телеграммы:</p>
              <p class="mt-3 flex-1 lg:mt-0">
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
  </div>
</template>

<script setup></script>
