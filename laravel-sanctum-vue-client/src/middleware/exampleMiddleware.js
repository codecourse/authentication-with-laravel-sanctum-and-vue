export default function exampleMiddleware({ next }) {
    console.log('example middleware')
    return next()
}