<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4">
    <a href="#"
       class="navbar-brand mx-5">者也专栏</a>
    <ul v-if="!user.isLogin"
        class="list-inline mb-0">
      <li class="list-inline-item">
        <a href="#"
           class="btn btn-outline-light my-2 mx-4">登录</a>
      </li>
      <li class="list-inline-item">
        <a href="#"
           class="btn btn-outline-light mx-4">注册</a>
      </li>
    </ul>
    <ul v-else
        class="list-inline mb-0">
      <li class="list-inline-item">
        <!-- <drop-down :name="user.name" /> -->
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import DropDown from './Dropdown.vue'

export interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
}

export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  components: {
    // DropDown
  }
})
</script>

<style>
</style>
