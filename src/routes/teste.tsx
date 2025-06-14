// app/routes/index.tsx
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { customersGet } from '@/db/customerModel'
import { dbMiddleware } from '@/lib/db-middleware'

const getCustomers = createServerFn({method: 'GET'})
    .middleware([dbMiddleware])
    .handler(async (ctx) => {
        const result = await customersGet(ctx.context.db)
        return result
    })


export const Route = createFileRoute('/teste')({
    component: Home,
    loader: async () => await getCustomers(),
})

function Home() {
    const router = useRouter()
    const state = Route.useLoaderData()

    return (
        <div>
            <h1>Customers Server Rendered</h1>
            <div>
                {state?.map((customer) => (
                    <div key={customer.id}>{customer.name}</div>
                ))}
            </div>
        </div>
    )
}