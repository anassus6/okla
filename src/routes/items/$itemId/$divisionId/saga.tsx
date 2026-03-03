import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/items/$itemId/$divisionId/saga')({
    component: RouteComponent,
    loader: async ({ params }) => {
        return {
            result: 'Item: ' + params.itemId + ' Division: ' + params.divisionId
        }
    },
})

function RouteComponent() {
    const data = Route.useLoaderData()
    return <div>This is the item {data.result}</div>
}
