import useAuth from "@/composables/useAuth.js";

const { authenticated } = useAuth()

export default function redirectIfGuest({ next }) {
    if (!authenticated.value) {
        return next({
            name: 'login'
        })
    }

    return next()
}