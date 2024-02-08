import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import HeroPost from 'components/HeroPost'
import IndexPageHead from 'components/IndexPageHead'
import MoreStories from 'components/MoreStories'
import Navbar from './Navbar'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import Footer from './Footer'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props
  const listPosts = posts
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />
      <Layout preview={preview} loading={loading}>
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2 w-full h-screen bg-black px-16 overflow-hidden justify-space-between">
              <Navbar/>
              <BlogHeader title={title} description={description} level={1} />
          </div>
          <div className="md:w-1/2 px-8 py-16 md:fixed right-0 top-0 bottom-0 overflow-y-auto">
            {listPosts.length > 0 && <MoreStories posts={listPosts} />}
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  )
}
