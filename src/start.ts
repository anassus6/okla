// src/start.ts
import { createMiddleware, createStart } from '@tanstack/react-start'

export const myGlobalMiddleware = createMiddleware().server(async ({ next, request }) => {
    console.log('Middleware execution here!:', request.url)
    return next({ context: { user: "Alexon" } })
})
 

export const startInstance = createStart(() => {
    return {
        requestMiddleware: [myGlobalMiddleware],
    }
})