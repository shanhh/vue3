<script setup lang="ts">
import { ref } from 'vue'
var a = 123213

defineProps<{ msg: string }>()
console.log(1111111)
console.log(import.meta.env)
const b = import.meta.env.VITE_TEST // vite-env.d.ts中声明过了

const globModules = import.meta.glob('./../glob/*')
const globModules2 = import.meta.glob('./../glob/*', { eager: true })
console.log(globModules, globModules2, 1111111)
Object.entries(globModules).forEach(([k, v]) => {
  console.log(k + ':', v, 2222222222)
  console.log(v().then((item) => console.log(item)))
})
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
