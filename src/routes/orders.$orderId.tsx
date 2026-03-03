import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/orders/$orderId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    process.env.MY_VAR
    return {
      result: params.orderId
    }
  },
})

function RouteComponent() {

  const data= Route.useLoaderData()


  return <div>This is the order {data.result}</div>
}
