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
        <validate-input :rules="passwordRules"
                        placeholder="请输入密码"
                        type="password"
                        v-model="passwordVal" />
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
    <div class="input-group">
      <input type="file"
             class="form-control"
             id="inputGroupFile04"
             aria-describedby="inputGroupFileAddon04"
             aria-label="Upload">
    </div>
    <button type="button"
            class="btn btn-primary"
            @click.prevent="triggerUpload">
      上传
    </button>
    <input type="file"
           class="d-none"
           ref="fileInput">
    <button @click="increment">store</button>
    <div>{{count}}</div>
    <div class="test-div"
         :class="{'div-transition': hasTransition}"
         ref="testTransition"></div>
    <button @click="handleAdd">增加</button>
    <button @click="handleCancel">反转</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, onMounted } from 'vue'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup(props, ctx) {
    const emailVal = ref('')
    const passwordVal = ref('')
    const testData = ref(0)
    const fileInput = ref<HTMLElement | null>(null)
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不为空' },
      { type: 'email', message: '请输入正确的邮箱' }
    ]
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]
    const resetForm = () => {
      console.log('resetForm')
      emailVal.value = ''
      passwordVal.value = ''
      console.log(emailVal)
    }
    const onFormSubmit = (res: boolean) => {
      console.log(res)
      !res && resetForm()
    }
    const router = useRouter()
    // const route = useRoute()
    // console.log(router)
    // console.log(route.path)
    const store = useStore()
    const count = computed(() => store.state.count)
    const increment = () => store.commit('increment')
    const triggerUpload = (e: MouseEvent) => {
      //   console.log(e)
      if (fileInput.value) {
        fileInput.value.click()
      }
      //   router.push('/upload')
    }

    const testTransition = ref<HTMLElement | null>(null)
    const hasTransition = ref<boolean>(true)
    const callback = () => {
      console.log('callback')
    }

    const handleAdd = () => {
      if (testTransition.value) {
        const oldWidthNum = parseInt(
          getComputedStyle(testTransition.value).width
        )
        const newWidthNum = oldWidthNum + 50
        testTransition.value.style.width = newWidthNum + 'px'
        testTransition.value.removeEventListener('transitionend', callback)
      }
    }

    const handleCancel = () => {
      hasTransition.value = !hasTransition.value
    }

    onMounted(() => {
      testTransition.value &&
        testTransition.value.addEventListener('transitionend', callback)
    })

    return {
      testData,
      emailRules,
      emailVal,
      passwordRules,
      passwordVal,
      onFormSubmit,
      fileInput,
      triggerUpload,
      increment,
      count,
      hasTransition,
      testTransition,
      handleAdd,
      handleCancel
    }
  }
})
</script>

<style scoped>
.test-div {
  width: 100px;
  height: 100px;
  background-color: red;
}

.div-transition {
  transition: width 1000ms linear;
}
</style>
