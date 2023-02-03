<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area"
         @click="submitForm">
      <slot name="footer">
        <button type="submit"
                class="btn btn-primary">
          提交
        </button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'
import mitt from 'mitt'

type validateFunc = () => boolean
type Events = {
  validateEvent: validateFunc
}
export const emitter = mitt<Events>()

export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  components: {},
  setup(props, ctx) {
    let funcArr: validateFunc[] = []
    const submitForm = () => {
      const result = funcArr.map((func) => func()).every((res) => res)
      ctx.emit('form-submit', result)
    }
    const callback = (res: validateFunc) => {
      funcArr.push(res)
    }
    emitter.on('validateEvent', callback)
    onUnmounted(() => {
      emitter.off('validateEvent', callback)
      funcArr = []
    })
    return {
      submitForm
    }
  }
})
</script>

<style scoped>
</style>
