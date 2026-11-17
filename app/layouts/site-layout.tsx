import { Outlet } from 'react-router'
import { FloatingWhatsapp } from '~/components/floating-whatsapp'
import { SiteFooter } from '~/components/site-footer'
import { SiteHeader } from '~/components/site-header'

export default function SiteLayout() {
  return (
    <div className="bg-cream min-h-screen overflow-x-clip pt-[76px] text-gray-800">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <FloatingWhatsapp />
    </div>
  )
}
