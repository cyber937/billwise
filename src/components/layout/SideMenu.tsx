import Link from 'next/link'

export default function SideMenu() {
  return (
    <aside className="bg-amber-300 col-span-2">
      <nav className="p-4">
        <ul className="space-y-2">
          <li><Link href="/" className="text-gray-800">Dashboard</Link></li>
          <li><Link href="/invoices" className="text-gray-800">Invoices</Link></li>
          <li><Link href="/clients" className="text-gray-800">Clients</Link></li>
          <li><Link href="/settings" className="text-gray-800">Settings</Link></li>
        </ul>
      </nav>
    </aside>
  )
}