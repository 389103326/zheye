<template>
  <div>
    <input class="form-control"
           :class="inputRef.error ? 'is-invalid' : 'is-valid'"
           id="exampleInputEmail1"
           aria-describedby="emailHelp"
           v-bind="$attrs"
           :value="inputRef.val"
           @input="updateValue"
           @blur="validateInput">
    <div class="form-text"
         :class="inputRef.error ? 'invalid-feedback' : 'valid-feedback'"
         v-if="inputRef.error">
      {{inputRef.message}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
const emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/

interface RuleProp {
  type: 'required' | 'email'
  message: string
}
export type RulesProp = RuleProp[]

export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  inheritAttrs: false,
  setup(props, ctx) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      ctx.emit('update:modelValue', targetValue)
    }
    const validateInput = () => {
      if (props.rules) {
        const allValid = props.rules.every((rule) => {
          let valid = false
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              valid = inputRef.val.trim() !== ''
              break
            case 'email':
              valid = emailReg.test(inputRef.val)
              break
            default:
              break
          }
          return valid
        })
        inputRef.error = !allValid
      }
    }
    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>
