import PostPreview from 'components/PostPreview'
import type { Post } from 'lib/sanity.queries'
import { motion } from 'framer-motion'

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
    <section>
      
      <div className='mb-32 grid grid-cols-1 gap-y-20 md:gap-y-24'
        >
        {posts.map((post) => (
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
        ))}
      </div>
    </section>
  )
}
