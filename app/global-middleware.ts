import { registerGlobalMiddleware } from '@tanstack/react-start'
import { cloudflareMiddleware } from '@/lib/cf-middleware'
import { dbMiddleware } from '@/lib/db-middleware'

registerGlobalMiddleware({
    middleware: [cloudflareMiddleware],
    // middleware: [cloudflareMiddleware, dbMiddleware],
})