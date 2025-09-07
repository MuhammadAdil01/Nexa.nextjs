'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  MapPinned,
  Calendar,
  Users,
  Settings,
  FolderOpenDot,
} from 'lucide-react'
import { Sheet, SheetContent, } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'dashboard', href: '/dashboard', icon:Settings  },
  { name: 'Team', href: '/dashboard/team', icon: Users },
  { name: 'Calendar', href: '/dashboard/calendar', icon: Calendar },
  { name: 'Map', href: '/dashboard/map', icon: MapPinned },
  { name: 'Projects', href: '/dashboard/project', icon: FolderOpenDot },
]

export function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const Sidebar = ({ mobile = false }) => (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-sidebar-border px-6">
        <div className="flex items-center space-x-2">
          <h1 className='font-serif text-3xl font-bold'>NEXA </h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-4 py-4">
        {navigation.map(item => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              )}
              onClick={() => mobile && setSidebarOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:bg-sidebar lg:border-r lg:border-sidebar-border">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-64 p-0 bg-sidebar">
          <Sidebar mobile />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
    <div className="flex-1 flex flex-col overflow-hidden">
  <main className="flex-1 overflow-y-auto bg-background p-0">{children}</main>
</div>

    </div>
  )
}