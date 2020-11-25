Check Later.

<template>
  <full-page :options="{ sectionSelector: '.container' }" ref="fullPage">
    <div class="container">
      <div class="text-gray-700 text-center">
        <div class="p-6">
          <img
            class="avatar w-32 h-32 mx-auto mb-2"
            draggable="false"
            src="/images/me2019.jpeg"
            alt="irl-image"
          />

          <div class="text-center">
            <h2 class="text-lg">Abdulbaki "EGGSY" Dursun</h2>
            <div
              class="select-none cursor-pointer text-purple-500 mb-1"
              @click="randomRank"
            >{{ rank }}</div>
            <Socials class="socials" />
          </div>
        </div>
      </div>

      <div class="select-none bottom-text text-center text-gray-700" @click="moveDown">
        <span>scroll down</span>
      </div>
    </div>

    <div class="container text-gray-700 max-w-md">
      <div class="text-left">
        <h1 class="text-lg title">Who am I?</h1>
        <p class="appear text-left">
          I am a Turkish student who is interested in programming and English literature. I
          am trying my best to bring useful and good ideas to the world, I program for fun,
          necessity or time-killing, I am actually trying to become an English teacher.
        </p>
      </div>

      <div class="select-none bottom-text text-center text-gray-700" @click="moveDown">
        <span>scroll down</span>
      </div>
    </div>

    <div class="container text-gray-700 max-w-md">
      <div class="text-left">
        <h1 class="text-lg title">What do I know so far?</h1>
        <p class="appear text-left">
          First of all, I am not the best, maybe not even "good", but I like what I do and I am
          happy with my current self; this doesn't mean that I'll stop learning new technologies and
          all, I'll definitely improve my skills in the future!
        </p>

        <h1 class="text-lg title mt-6">Skills</h1>
        <Skills />
      </div>

      <div class="select-none bottom-text text-center text-gray-700" @click="moveDown">
        <span>scroll down</span>
      </div>
    </div>

    <div class="container text-gray-700 max-w-md">
      <div class="text-left">
        <h1 class="text-lg title">Learn more about me!</h1>
        <p class="appear text-left">
          These are nothing compared to what I do on my main website! Please don't forget to check
          <a
            href="https://eggsy.xyz"
            class="underline"
            target="_blank"
          >my website</a> to see my
          projects and learn more about me.
        </p>
      </div>

      <div class="select-none bottom-text text-center text-gray-700" @click="goTop">
        <span>go back to top</span>
      </div>
    </div>
  </full-page>
</template>

<style>
