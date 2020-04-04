import { ref, computed } from '@vue/composition-api'

export default function() {
  const capacity = ref(4)
  const capacityAdd = () => {
    capacity.value++
  }

  const attending = ref(['Mars', 'Jack', 'Sally'])

  const spacesLeft = computed(() => {
    return capacity.value - attending.value.length
  })

  return { capacity, attending, spacesLeft, capacityAdd }
}
