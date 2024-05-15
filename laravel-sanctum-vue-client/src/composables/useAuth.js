import {computed, reactive, ref} from "vue";
import axios from "axios";

const state = reactive({
    authenticated: false,
    user: {}
})

export default function useAuth() {
    const errors = ref({})

    const authenticated = computed(() => state.authenticated)
    const user = computed(() => state.user)

    const setAuthenticated = (authenticated) => {
        state.authenticated = authenticated
    }

    const setUser = (user) => {
        state.user = user
    }

    const attempt = async () => {
        try {
            let response = await axios.get('/api/user')

            setAuthenticated(true)
            setUser(response.data)

            return response
        } catch (e) {
            setAuthenticated(false)
            setUser({})
        }
    }

    const login = async (credentials) => {
        await axios.get('/sanctum/csrf-cookie')

        try {
            await axios.post('/login', credentials)
            return attempt()
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }

            return Promise.reject(null)
        }
    }

    return {
        authenticated,
        user,
        login,
        attempt,
        errors
    }
}