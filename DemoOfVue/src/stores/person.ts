import { defineStore } from 'pinia'
import { onMounted, ref, watch } from 'vue'
import { SessionStatus, useSessionStore } from './session'

export const usePersonStore = defineStore('person', () => {
  const sessionStore = useSessionStore()
  const person = ref()
  function refreshPerson() {
    // refetch user info
  }
  watch(
    () => sessionStore.status,
    (status) => {
      if (status === SessionStatus.VALID) {
        refreshPerson()
      } else {
        person.value = undefined
      }
    },
    {
      immediate: true,
    },
  )
  return { person, refreshPerson }
})
