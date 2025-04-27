//@ts-nocheck
import { createMiddleware } from '@tanstack/react-start'
import { initDb } from '@/lib/dbUtils'

export const dbMiddleware = createMiddleware()
.server(({ next, context }) => {
    if (!context || !context.cloudflare) { 
        throw new Error('dbMiddleware: Context is undefined')
    }
    return next({
        context: {
            cloudflare: context.cloudflare,
            db: initDb(context.cloudflare),
        } ,
    });
});


