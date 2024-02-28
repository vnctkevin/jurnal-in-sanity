import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'

import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import HeroPost from 'components/HeroPost'
import IndexPageHead from 'components/IndexPageHead'
import MoreStories from 'components/MoreStories'

import Experiences from './Experiences'
import Footer from './Footer'
import Navbar from './Navbar'

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
        <Container>
          <Navbar/>
          <BlogHeader title={title} description={description} level={1} />
          {listPosts.length > 0 && <MoreStories posts={listPosts} />}
        </Container>
        <Footer/>
      </Layout>
      
    </>
  )
}
