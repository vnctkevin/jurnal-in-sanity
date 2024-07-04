import * as React from 'react'
import { motion } from 'framer-motion'
import type { Post } from 'lib/sanity.queries'
import PostPreview from 'components/PostPreview'

//create scrolling animation for the more stories section
// Path: components\MoreStories.tsx
const variants = {
  hidden: { opacity: 0, y: 300 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}


export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <section className='w-full pb-8 md:pb-16 lg:pb-24'>
      <div className="container grid items-center pb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Posts</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Stories about my experiences, projects, and thoughts.
            </p>
        </div>
      <div className='mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-8 md:gap-y-24'
        >
        {posts.map((post) => (
          <React.Fragment key={post._id}>
          <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 }}}
        >
          <PostPreview 
            key={post._id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
          </motion.div>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
