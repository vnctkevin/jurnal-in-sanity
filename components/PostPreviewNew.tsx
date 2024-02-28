import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'

export default function PostPreviewNew({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <div className="flex items-start space-x-2 md:col-span-6 lg:col-span-9">
        <div className="grid gap-1 text-sm leading-none">
            <h3 className="font-semibold">
            <Link href={`/posts/${slug}`} className="hover:underline">
                {title}
            </Link>
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Posted on <Date dateString={date} /></p>
        </div>
    </div>
    
  )
}
