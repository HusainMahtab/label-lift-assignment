import { BlogPost } from '@/types/blog';
import { notFound } from 'next/navigation';
import path from 'path';
import fs from 'fs/promises';

export async function getAllPosts(): Promise<BlogPost[]> {
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export async function getPostById(id: number): Promise<BlogPost> {
  const posts = await getAllPosts();
  const post = posts.find(p => p.id === id);
  
  if (!post) {
    notFound();
  }
  
  return post;
}

export function getPostExcerpt(content: string, maxLength: number = 50): string {
  if (content.length <= maxLength) return content;
  return `${content.substring(0, maxLength)}...`;
} 