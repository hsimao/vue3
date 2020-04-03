import { ref, watch, computed } from '@vue/composition-api'

export default function(startValue, validators, onInput, onError) {
  const input = ref(startValue)
  const errors = ref([])

  const isError = computed(() => {
    return errors.value.some(error => error !== null)
  })

  watch(
    input,
    value => {
      // 逐一執行 input 傳進來的驗證規則
      errors.value = validators.map(validator => validator(value))
      onInput(value) // 觸發 emit input, 將 input value 傳出
      onError(isError.value) // 觸發 emit update:error 將 error 狀態傳出
    },
    { lazy: true } //第一次不執行
  )

  return { input, errors }
}
