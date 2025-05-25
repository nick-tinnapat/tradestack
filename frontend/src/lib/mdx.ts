import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export async function getMdxSource(id: string) {
  let fullPath = path.join(postsDirectory, `${id}.mdx`);
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${id}.md`);
  }
  const source = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });
  return { mdxSource, frontMatter: data };
}
