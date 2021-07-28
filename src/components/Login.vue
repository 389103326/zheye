<template>
  <div class="validate-input-container pb-3">
    <validate-form @form-submit="onFormSubmit">
      <div class="has-validation mb-3">
        <label for="exampleInputEmail1"
               class="form-label">
          Email address
        </label>
        <validate-input :rules="emailRules"
                        v-model="emailVal"
                        placeholder="请输入邮箱名"
                        type="email" />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1"
               class="form-label">Password</label>
        <validate-input placeholder="请输入密码"
                        type="password"
                        v-model="passwordVal" />
        <div>{{passwordVal}}</div>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox"
               class="form-check-input"
               id="exampleCheck1">
        <label class="form-check-label"
               for="exampleCheck1">Check me out</label>
      </div>
      <template #footer>
        <span class="btn btn-danger">Submit</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import ValidateInput, { RulesProp } from './ValidateInput.vue'
import ValidateForm from './ValidateForm.vue'

export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup() {
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不为空' },
      { type: 'email', message: '请输入正确的邮箱' }
    ]
    const onFormSubmit = (res: boolean) => {
      console.log(res)
    }
    const emailVal = ref('')
    emailVal.value = 'honglang'
    const passwordVal = ref('')
    return {
      emailRules,
      emailVal,
      onFormSubmit
    }
  }
})
</script>

<style scoped>
</style>
