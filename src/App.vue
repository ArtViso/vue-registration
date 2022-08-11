<template>
  <section>
    <div v-if="$route.meta.keepAlive">
      <main>
        <router-view></router-view>
      </main>
    </div>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </section>
</template>
