import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-[rgba(255,255,255,0.1)] sticky top-0 bg-black z-50">
      <div className="flex items-center">
        <svg className="h-6 w-auto" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="white"/>
        </svg>
        <span className="ml-2 font-semibold">TradeStack</span>
      </div>
      
      <div className="hidden md:flex gap-6">
        <Link href="/" className="text-[rgba(255,255,255,0.6)] text-sm font-medium hover:text-white transition-colors">
          Home
        </Link>
        <Link href="/blog" className="text-[rgba(255,255,255,0.6)] text-sm font-medium hover:text-white transition-colors">
          Blog
        </Link>
        <Link href="#" className="text-[rgba(255,255,255,0.6)] text-sm font-medium hover:text-white transition-colors">
          About
        </Link>
        <Link href="#" className="text-[rgba(255,255,255,0.6)] text-sm font-medium hover:text-white transition-colors">
          Contact
        </Link>
      </div>
      
      <div className="flex items-center gap-6">
        <Link href="#" className="text-[rgba(255,255,255,0.6)] text-sm font-medium hover:text-white transition-colors">
          Subscribe
        </Link>
        <div className="w-6 h-6 rounded-full bg-[#4caf50]"></div>
      </div>
    </header>
  )
}
