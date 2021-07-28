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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  components: {},
  setup(props, ctx) {
    const submitForm = () => {
      console.log('111111111')
      ctx.emit('form-submit', true)
    }
    return {
      submitForm
    }
  }
})
</script>

<style scoped>
</style>
