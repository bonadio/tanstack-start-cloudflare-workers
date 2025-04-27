// Not using this module but keeping it here for reference if waitUntil is needed
// Thanks to https://github.com/Nipsuli/tanstack-start-cloudflare-worker

import { getEvent } from "vinxi/http";
// import { Env } from "worker-configuration";

type CfEnv = {
  env: Env;
  waitUntil: (promise: Promise<unknown>) => void;
};

const getDevProxy = async () => {
  const cf = await import("wrangler");
  return await cf.getPlatformProxy<Env>({ persist: true });
};

let ___devProxy: ReturnType<typeof getDevProxy> | undefined = undefined;

export const getCloudflareContext = async (): Promise<CfEnv> => {
  const event = getEvent();
  if (import.meta.env.DEV) {
    // Attach the cloudflare context
    if (!___devProxy) {
      ___devProxy = getDevProxy();
    }
    const proxy = await ___devProxy;
    return {
      env: proxy.env,
      waitUntil: (promise: Promise<unknown>) => proxy.ctx.waitUntil(promise),
    };
  } else {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      env: event.context.cloudflare?.env as Env,
      waitUntil: (promise: Promise<unknown>) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        event.context.cloudflare?.context?.waitUntil(promise);
      },
    };
  }
};