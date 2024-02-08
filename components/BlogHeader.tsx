import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import styles from './BlogHeader.module.css'
import { motion } from 'framer-motion'

export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 0.8 }}>
        <header className="mb-10 mt-16 items-center text-center md:text-left md:mb-12 md:flex-row">
          <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
            {title}
          </h1>
          <h4
            className={`mt-5 text-center text-lg md:text-left ${styles.portableText}`}
          >
            <PortableText value={description} />
          </h4>
        </header>
        </motion.div>
        <hr className="border-accent-3 mb-12" />
        </>
      )

    case 2:
      return (
        <header>
          <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
            <Link href="/" className="hover:underline">
              {title}
            </Link>
          </h2>
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`
      )
  }
}
