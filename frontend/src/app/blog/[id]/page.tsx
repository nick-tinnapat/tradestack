import { getAllPostIds } from '@/lib/posts'
import { getMdxSource } from '@/lib/mdx'
import { format } from 'date-fns'
import Link from 'next/link'
import MdxRenderer from '@/components/MdxRenderer';

export async function generateStaticParams() {
  const paths = getAllPostIds()
  return paths
}

export default async function Post({ params }: { params: { id: string } }) {
  const { mdxSource, frontMatter } = await getMdxSource(params.id);
  return (
    <article className="max-w-content mx-auto">
      <div className="flex items-center gap-2 text-sm text-[rgba(255,255,255,0.6)] mb-6 justify-center">
        <Link href="/blog" className="inline-flex items-center gap-x-1.5 hover:text-white">
          <svg height="16" width="16" viewBox="0 0 16 16" style={{ width: '12px', height: '12px' }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.46966 13.7803L6.99999 14.3107L8.06065 13.25L7.53032 12.7197L3.56065 8.75001H14.25H15V7.25001H14.25H3.56065L7.53032 3.28034L8.06065 2.75001L6.99999 1.68935L6.46966 2.21968L1.39644 7.2929C1.00592 7.68342 1.00592 8.31659 1.39644 8.70711L6.46966 13.7803Z" fill="currentColor"></path>
          </svg>
          Blog
        </Link>
        <span>/</span>
        <span className="font-bold text-black dark:text-white">{frontMatter.title}</span>
      </div>
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-2xl lg:text-3xl font-bold leading-tight mb-6 tracking-tight line-clamp-3 break-words overflow-wrap-anywhere">{frontMatter.title}</h1>
        <div className="flex items-center justify-center gap-2 text-[rgba(255,255,255,0.8)] text-sm mb-6">
          <div className="w-6 h-6 rounded-full bg-gray-600"></div>
          <span>{frontMatter.author}{frontMatter.authorRole && ` / ${frontMatter.authorRole}`}</span>
        </div>
      </div>
      <div className="w-full flex flex-wrap items-center justify-between gap-4 mb-8 text-[rgba(255,255,255,0.6)] text-sm">
        <div className="flex items-center gap-1.5">
          <svg height="16" width="16" viewBox="0 0 16 16" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.35066 2.06247C5.96369 1.78847 6.62701 1.60666 7.32351 1.53473L7.16943 0.0426636C6.31208 0.1312 5.49436 0.355227 4.73858 0.693033L5.35066 2.06247ZM8.67651 1.53473C11.9481 1.87258 14.5 4.63876 14.5 8.00001C14.5 11.5899 11.5899 14.5 8.00001 14.5C4.63901 14.5 1.87298 11.9485 1.5348 8.67722L0.0427551 8.83147C0.459163 12.8594 3.86234 16 8.00001 16C12.4183 16 16 12.4183 16 8.00001C16 3.86204 12.8589 0.458666 8.83059 0.0426636L8.67651 1.53473ZM2.73972 4.18084C3.14144 3.62861 3.62803 3.14195 4.18021 2.74018L3.29768 1.52727C2.61875 2.02128 2.02064 2.61945 1.52671 3.29845L2.73972 4.18084ZM1.5348 7.32279C1.60678 6.62656 1.78856 5.96348 2.06247 5.35066L0.693033 4.73858C0.355343 5.4941 0.131354 6.31152 0.0427551 7.16854L1.5348 7.32279ZM8.75001 4.75V4H7.25001V4.75V7.875C7.25001 8.18976 7.3982 8.48615 7.65001 8.675L9.55001 10.1L10.15 10.55L11.05 9.35L10.45 8.9L8.75001 7.625V4.75Z" fill="currentColor"></path>
          </svg>
          <span>{frontMatter.readTime}</span>
        </div>
        <div className="flex-1"></div>
        <time dateTime={frontMatter.date}>
          {format(new Date(frontMatter.date), 'MMM d, yyyy')}
        </time>
      </div>
      <div className="article-content">
        <MdxRenderer mdxSource={mdxSource} />
      </div>
    </article>
  );
}
