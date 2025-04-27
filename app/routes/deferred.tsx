import { createFileRoute, useRouter, Await, defer } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { customersGet } from '@/db/customerModel'
import { dbMiddleware } from '@/lib/db-middleware'

const getCustomersDeferred = createServerFn({method: 'GET'})
    .middleware([dbMiddleware])
    .handler(async (ctx) => {      
        return customersGet(ctx.context?.db)
    })


export const Route = createFileRoute('/deferred')({
    component: Deferred,
    loader: async () => {
        const customers = getCustomersDeferred()
        return { deferredCustomers: customers }
    },
})

function Deferred() {
    const {deferredCustomers} = Route.useLoaderData()

    return (
        <div>
            <h1>Defered Example</h1>
            <Await promise={deferredCustomers} fallback={<div>Loading...</div>}>
                {(data) => {
                    return <div>{JSON.stringify(data)}</div>
                }}
            </Await>
        </div>
    )
}