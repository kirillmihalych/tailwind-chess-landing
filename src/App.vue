<template>
  <div class="app">
    <div
      class="relative overflow-x-hidden min-h-screen md:min-h-[760px] bg-main-375 md:bg-main-1366 2xl:bg-main-1920 bg-bottom-center bg-cover bg-no-repeat xl:bg-right"
    >
      <section class="container xl:px-18 2xl:px-80 pt-[1.125rem] xl:pt-7 grid md:justify-start">
        <div class="container-content">
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
      <section
        class="absolute bottom-0 md:-bottom-10 h-10 bg-highlight text-white font-merriweather uppercase leading-small py-3.5"
      >
        <ul class="list-disc list-inside flex items-center gap-4 px-3 whitespace-nowrap w-max">
          <li class="list-outside">Дело помощи утопающим — дело рук самих утопающих!</li>
          <li>Шахматы двигают вперед не только культуру, но и экономику!</li>
          <li>Лед тронулся, господа присяжные заседатели!</li>
          <li></li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup></script>
