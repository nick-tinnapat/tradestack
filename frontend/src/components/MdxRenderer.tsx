"use client";
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import CalloutBox from './CalloutBox';

export default function MdxRenderer({ mdxSource }: { mdxSource: MDXRemoteSerializeResult }) {
  return <MDXRemote {...mdxSource} components={{ CalloutBox }} />;
}
