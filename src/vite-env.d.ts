/// <reference types="vite/client" />


interface ImportMetaEnv {
  VITE_TEST: string
}
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
