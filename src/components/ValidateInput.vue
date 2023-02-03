<template>
  <div>
    <input class="form-control"
           :class="inputRef.error ? 'is-invalid' : 'is-valid'"
           id="exampleInputEmail1"
           aria-describedby="emailHelp"
           v-bind="$attrs"
           :value="inputRef.val()"
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
import {
  defineComponent,
  PropType,
  onMounted,
  onUnmounted,
  reactive,
  watch
} from 'vue'
import { emitter } from './ValidateForm.vue'

const emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/

interface RuleProp {
  type: 'required' | 'email'
  message: string
}
interface IInputRef {
  val: () => string
  error: boolean
  message: string
}
export type RulesProp = RuleProp[]
interface IProps {
  rules: RulesProp
  modelValue: string
}

export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: {
      required: true,
      type: Array as PropType<RulesProp>
    },
    modelValue: {
      required: true,
      type: String
    }
  },
  inheritAttrs: false,
  // TODO 去掉IProps
  setup(props: IProps, ctx) {
    const inputRef: IInputRef = reactive({
      val: () => props.modelValue,
      error: false,
      message: ''
    })
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      ctx.emit('update:modelValue', targetValue)
    }
    const validateInput = () => {
      if (props.rules) {
        const allValid = props.rules.every((rule) => {
          let valid = false
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              valid = inputRef.val()?.trim() !== ''
              break
            case 'email':
              valid = emailReg.test(inputRef.val())
              break
            default:
              break
          }
          return valid
        })
        inputRef.error = !allValid
        return allValid
      }
      return true
    }
    onMounted(() => {
      //   console.log('props.modelValue', props.modelValue)
      emitter.emit('validateEvent', validateInput)
      //   console.log(foo)
    })
    onUnmounted(() => {
      console.log('onUnMounted')
    })

    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>
