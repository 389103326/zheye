<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4">
    <a href="#"
       class="navbar-brand mx-5">者也专栏</a>
    <ul v-if="user.isLogin"
        class="list-inline mb-0">
      <li class="list-inline-item">
        <router-link to="/login">
          <a href="#"
             class="btn btn-outline-light my-2 mx-4">登录</a>
        </router-link>
      </li>
      <li class="list-inline-item">
        <router-link to="/login">
          <a href="#"
             class="btn btn-outline-light mx-4">注册</a>
        </router-link>
      </li>
    </ul>
    <ul v-else
        class="list-inline mb-0">
      <li class="list-inline-item">
        <drop-down :name="user.name" />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted } from 'vue'
import DropDown from './Dropdown.vue'
import { UserProps } from '@/utils/interface'
import axios from 'axios'

export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  components: {
    DropDown
  },
  setup() {
    onMounted(() => {
      axios.get('/rest/api/v1/test').then(
        (res: any) => {
          console.log('res', res)
        },
        (err: any) => {
          console.log('err', err)
        }
      )
    })
  }
})
</script>

<style>
</style>
