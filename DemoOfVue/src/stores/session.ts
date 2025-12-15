import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const SessionStatus = {
  WAIT_CHECK: 'WAIT_CHECK',
  INVALID: 'INVALID',
  VALID: 'VALID',
} as const

// 方案二：使用类型别名定义联合类型
export type SessionStatusType = 'WAIT_CHECK' | 'INVALID' | 'VALID'


export const useSessionStore = defineStore('session', () => {
  const status = ref<SessionStatusType>(SessionStatus.WAIT_CHECK)
  const token = ref<string>()

  function check() {
    if (!token.value) {
      status.value = SessionStatus.INVALID
    }
    // check by server
  }
  function login(tokenInfo: { token: string }) {
    token.value = tokenInfo.token
    status.value = SessionStatus.VALID
    // login by server
  }
  function logout() {
    status.value = SessionStatus.INVALID
    token.value = undefined
  }

  onMounted(check)

  return { status, token }
})
