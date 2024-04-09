
import React from 'react'
import type { Post } from 'lib/sanity.queries'
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'next-share';
  
export default function ShareButton(
    props: Pick<Post, 'title' | 'coverImage' | 'date' | 'author' | 'slug'>
    ) {
    const {title, coverImage, date, author, slug} = props
  return (
    <>
    <div className="flex flex-row justify-center py-4">
        <h3 className="text-xl font-bold mr-4">Share: </h3>
        <div className="space-x-2">
            <FacebookShareButton
                url={`https://jurnal.vnctkevin.com/posts/${slug}`} >
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <RedditShareButton
                url={`https://jurnal.vnctkevin.com/posts/${slug}`} >
                <RedditIcon size={32} round />
            </RedditShareButton>
            <WhatsappShareButton
                url={`https://jurnal.vnctkevin.com/posts/${slug}`} >
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <LinkedinShareButton
                url={`https://jurnal.vnctkevin.com/posts/${slug}`} >
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <TwitterShareButton
                url={`https://jurnal.vnctkevin.com/posts/${slug}`} >
                <TwitterIcon size={32} round />
            </TwitterShareButton>
        </div>
      </div>
    </>
  )
}