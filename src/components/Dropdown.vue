<template>
  <div>
    <div class="dropdown"
         ref="dropdownRef">
      <a class="btn btn-secondary dropdown-toggle"
         href="#"
         role="button"
         id="dropdownMenuLink"
         data-bs-toggle="dropdown"
         aria-expanded="false"
         @click.prevent="toggleOpen">
        {{'你好' + name}}
      </a>
      <ul class="dropdown-menu"
          v-if="isOpen"
          aria-labelledby="dropdownMenuLink"
          style="display: block;">
        <dropdown-item>新建文章</dropdown-item>
        <dropdown-item disabled>编辑资料</dropdown-item>
        <dropdown-item>退出登录</dropdown-item>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, watch } from 'vue'
import DropdownItem from './DropdownItem.vue'
import useClickOutside from '../hooks/useClickOutside'

export default defineComponent({
  name: 'DropDown',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  components: {
    DropdownItem
  },
  setup() {
    const isOpen = ref(false)
    const dropdownRef = ref<null | HTMLElement>(null)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    const { isClickOutside } = useClickOutside(dropdownRef)
    watch(isClickOutside, (newValue, oldValue) => {
      newValue && (isOpen.value = false)
    })

    return {
      isOpen,
      toggleOpen,
      dropdownRef
    }
  }
})
</script>
