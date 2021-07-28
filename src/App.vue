<template>
  <div class="container">
    <global-header :user="user" />
    <column-list :list="list" />
    <login />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import Login from './components/Login.vue'

const currentUser: UserProps = {
  isLogin: true,
  name: 'viking'
}
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1的专栏',
    avatar: 'https://images.dog.ceo/breeds/saluki/n02091831_2638.jpg'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2的专栏'
  },
  {
    id: 3,
    title: 'test1的专栏',
    description: '这是test1的专栏',
    avatar: 'https://images.dog.ceo/breeds/saluki/n02091831_2638.jpg'
  },
  {
    id: 4,
    title: 'test2的专栏',
    description: '这是test2的专栏',
    avatar: 'https://images.dog.ceo/breeds/saluki/n02091831_2638.jpg'
  }
]

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    Login
  },
  setup() {
    console.log('修改点东西')
    return {
      list: testData,
      user: currentUser
    }
  }
})
</script>

<style>
</style>
