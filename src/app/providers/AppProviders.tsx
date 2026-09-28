import { RouterProvider } from 'react-router-dom'
import { router } from '@/app/router'

export const AppProviders = () => {
  return <RouterProvider router={router} />
}