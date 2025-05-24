import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import { format } from 'date-fns'

export default function BlogPage() {
  const allPostsData = getSortedPostsData()
  
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Blog Posts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {allPostsData.length > 0 ? (
          allPostsData.map(({ id, title, date, excerpt, author, readTime }) => (
            <article key={id} className="border border-[rgba(255,255,255,0.1)] rounded-lg overflow-hidden hover:border-[rgba(255,255,255,0.2)] transition-all">
              <Link href={`/blog/${id}`}>
                <div className="h-48 bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-[rgba(255,255,255,0.3)]">
                    Featured Image
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-[rgba(255,255,255,0.6)] mb-2">
                    <span>{format(new Date(date), 'MMM d, yyyy')}</span>
                    <span className="mx-2">•</span>
                    <span>{readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 hover:text-[#0070f3] transition-colors">{title}</h2>
                  <p className="text-[rgba(255,255,255,0.7)] text-sm mb-4">{excerpt}</p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-600 mr-3"></div>
                    <span className="text-sm text-[rgba(255,255,255,0.8)]">{author}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))
        ) : (
          <div className="col-span-2 text-center py-10 text-[rgba(255,255,255,0.6)]">
            <p className="mb-4">No blog posts found.</p>
            <p>Create your first post by adding markdown files to the src/content/posts directory.</p>
          </div>
        )}
      </div>
    </div>
  )
}
