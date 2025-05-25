import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src/content/posts')

export interface PostData {
  id: string
  title: string
  date: string
  author: string
  authorRole?: string
  excerpt: string
  readTime: string
  content: string
  coverImage?: string
}

export function getSortedPostsData(): Omit<PostData, 'content'>[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      // Remove ".md" or ".mdx" from file name to get id
      const id = fileName.replace(/\.mdx?$/, '');
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
      // Combine the data with the id
      return {
        id,
        ...(matterResult.data as Omit<PostData, 'id' | 'content'>),
      };
    });
  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => ({
      params: {
        id: fileName.replace(/\.mdx?$/, ''),
      },
    }));
}

export async function getPostData(id: string): Promise<PostData> {
  // รองรับทั้ง .md และ .mdx
  let fullPath = path.join(postsDirectory, `${id}.mdx`);
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${id}.md`);
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  let contentHtml = processedContent.toString();
  
  // Add custom classes to unordered lists
  contentHtml = contentHtml.replace(/<ul>/g, '<ul class="text_unorderedList">');

  // Combine the data with the id and contentHtml
  return {
    id,
    content: contentHtml,
    ...(matterResult.data as Omit<PostData, 'id' | 'content'>),
  };
}
