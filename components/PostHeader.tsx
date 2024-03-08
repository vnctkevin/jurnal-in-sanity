import type { Post } from 'lib/sanity.queries'

import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import PostTitle from 'components/PostTitle'

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'author' | 'slug' | 'tags'>
) {
  const { title, coverImage, date, author, slug, tags } = props
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-6 md:block">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="mb-6 text-lg text-center md:text-left">
        <Date dateString={date} />
        {tags && (
          <div className="flex flex-wrap mt-2">
            {tags.map((tag: string) => (
              <span
                key={tag}
                className="mr-2 mb-2 px-2 py-1 bg-gray-200 text-gray-800 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </>
  );
}
