import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params, context }) => {
 
    return {
      result: params.productId
    }
  },
})

function RouteComponent() {
  const data = Route.useLoaderData()
  return <div>This is the product {data.result}</div>
}
