import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import MoreStories from 'components/MoreStories'
import PostBody from 'components/PostBody'
import PostHeader from 'components/PostHeader'
import PostPageHead from 'components/PostPageHead'
import PostTitle from 'components/PostTitle'
import SectionSeparator from 'components/SectionSeparator'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'
import ShareButton  from './ShareButton'

export interface PostPageProps {
  preview?: boolean
  loading?: boolean
  post: Post
  morePosts: Post[]
  settings: Settings
}

const NO_POSTS: Post[] = []

export default function PostPage(props: PostPageProps) {
  const { preview, loading, morePosts = NO_POSTS, post, settings } = props
  const { title = demo.title } = settings || {}

  const slug = post?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <>
      <PostPageHead settings={settings} post={post} />

      <Layout preview={preview} loading={loading}>
      <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2 w-full h-screen bg-black px-16 overflow-hidden justify-space-between">
              <Navbar/>
              <BlogHeader title={title} level={1} />
          </div>
          <div className="md:w-1/2 px-8 py-16 md:fixed right-0 top-0 bottom-0 overflow-y-auto">
            {preview && !post ? (
              <PostTitle>Loading…</PostTitle>
            ) : (
              <>
                <article>
                  <PostHeader
                    title={post.title}
                    coverImage={post.coverImage}
                    date={post.date}
                    author={post.author}
                  />
                  <PostBody content={post.content} />
                </article>
                <ShareButton slug={post.slug}/>
                <SectionSeparator />
                {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
              </>
          )}
          <Footer />
          </div>
        </div>
      </Layout>
    </>
  )
}
