import { Outlet } from 'react-router'
import { SiteFooter } from '~/components/site-footer'
import { SiteHeader } from '~/components/site-header'

export default function SiteLayout() {
  return (
    <div className="bg-cream min-h-screen overflow-x-hidden text-gray-800">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  )
}
