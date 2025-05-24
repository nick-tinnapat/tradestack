import Link from 'next/link'

export default function Home() {
  return (
    <div className="py-16 text-center">
      <h1 className="text-5xl font-bold mb-6">Welcome to Our Blog</h1>
      <p className="text-[rgba(255,255,255,0.8)] max-w-2xl mx-auto mb-8">
        A modern blog built with Next.js and Markdown. Explore our latest articles on technology, 
        development, and more.
      </p>
      <Link 
        href="/blog" 
        className="inline-block bg-[#0070f3] text-white px-6 py-3 rounded-md font-medium hover:bg-[#0060df] transition-colors"
      >
        View All Posts
      </Link>
    </div>
  )
}
