import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import { tags } from 'sanity-plugin-tags'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
}: Omit<Post, '_id'>) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
      Posted on <Date dateString={date} />
      </div>
      {excerpt && <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>}
      {tags && (
        <div className="flex flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag.value} 
              className="mr-2 mb-2 px-2 py-1 bg-gray-200 text-gray-800 rounded-md"
            >
              {tag.label}
            </span>
          ))}
    </div>
  )}
  </div>
  )
}
