import { createMiddleware } from '@tanstack/react-start'

export const cloudflareMiddleware = createMiddleware().server(async ({ next }) => {
    if (import.meta.env.DEV) {
        const wrangler = await import('wrangler');
        const { env } = await wrangler.getPlatformProxy<Env>();
        return next({
            context: {
                cloudflare: env,
            },
        });
    }
    return next({
        context: {
            cloudflare: process.env as unknown as Env,
        },
    });
});


