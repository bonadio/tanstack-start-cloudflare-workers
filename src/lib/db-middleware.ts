import { createMiddleware } from '@tanstack/react-start'
import { initDb } from '@/lib/dbUtils'

export const dbMiddleware = createMiddleware({ type: 'function' })
.server(async ({ next, context }) => {

    let cloudflareContext: Env | null = null
    //@ts-ignore
    if (import.meta.env.DEV) {
        console.log('insdide DEV')
        const wrangler = await import('wrangler');
        const { env } = await wrangler.getPlatformProxy<Env>();
        cloudflareContext = env
        console.log('cloudflareContext', cloudflareContext)
    } else {
        console.log('insdide PROD')
        cloudflareContext = process.env as unknown as Env
        console.log('cloudflareContext', cloudflareContext)
    }


    if (!cloudflareContext) { 
        throw new Error('dbMiddleware: Context is undefined')
    }
    return next({
        context: {
            cloudflare: cloudflareContext,
            db: initDb(cloudflareContext),
        } ,
    });
});




