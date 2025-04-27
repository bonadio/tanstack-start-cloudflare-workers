import { createMiddleware } from '@tanstack/react-start'
const wrangler = await import('wrangler');
const { env } = await wrangler.getPlatformProxy<Env>();

export const cloudflareMiddleware = createMiddleware().server(({ next }) => {
    if (import.meta.env.DEV) {
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


