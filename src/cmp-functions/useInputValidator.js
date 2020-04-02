import { ref, watch } from '@vue/composition-api'

export default function(startValue, validators, onValidate) {
  let input = ref(startValue)
  const errors = ref([])

  watch(
    input,
    value => {
      // 逐一執行 input 傳進來的驗證規則
      errors.value = validators.map(validator => validator(value))
      onValidate(value)
    },
    { lazy: true } //第一次不執行
  )

  return { input, errors }
}
