import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  const { slug } = Route.useParams()

  return <div>Product ID: {slug}</div>
}
