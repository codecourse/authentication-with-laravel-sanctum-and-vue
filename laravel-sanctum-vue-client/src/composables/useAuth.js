import {computed, reactive} from "vue";
import axios from "axios";

const state = reactive({
    authenticated: false,
    user: {}
})

export default function useAuth() {
    const authenticated = computed(() => state.authenticated)
    const user = computed(() => state.user)

    const setAuthenticated = (authenticated) => {
        state.authenticated = authenticated
    }

    const setUser = (user) => {
        state.user = user
    }

    const login = async (credentials) => {
        await axios.get('/sanctum/csrf-cookie')

        try {
            await axios.post('/login', credentials)
        } catch (e) {
            console.log(e)
        }
    }

    return {
        authenticated,
        user,
        login
    }
}