import Container from 'components/BlogContainer'
import Image from "next/image";
import Link from "next/link";
import Footer from './Footer'
import Navbar from './Navbar'
import Layout from 'components/BlogLayout'
import IndexPageHead from 'components/IndexPageHead'
import type { Settings } from 'lib/sanity.queries'
import { Tab } from "@headlessui/react"
import BlogContainer from 'components/BlogContainer';
import BlogHeader from './BlogHeader';


export interface ProfilePageProps {
    preview?: boolean
    loading?: boolean
    settings: Settings
}

function MyTabs() {
    return (
      <Tab.Group>
        <Tab.List>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    )
  }

export default function ProfilePage(props: ProfilePageProps) {
    const { preview, loading, settings} = props

  return (
    <>
      <IndexPageHead settings={settings} />
      <Layout preview={preview} loading={loading}>

        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2 w-full h-screen bg-black px-16 overflow-hidden justify-space-between">
              <Navbar/>
              <BlogHeader title="Profile" level={1} />
          </div>
          <div className="md:w-1/2 px-8 py-16 md:fixed right-0 top-0 bottom-0 overflow-y-auto">

            <div className="grid grid-cols-4 gap-5 mt-6 mb-16 md:mt-16 md:mb-16 md:gap-16">
                <div></div>
                <div className='relative col-span-2 overflow-hidden items-center aspect-square odd:translate-y-10 odd:md:translate-y-16'>
                    <Image
                            src="/images/profile-2024.jpg"
                            alt="Kevin"
                            fill
                            sizes="(max-width: 320px) 112vw, 1080px"
                            className="object-cover"
                            />
                </div>
                <div></div>
            </div>

            <div className="mx-auto prose text-center dark:prose-invert mt-14 mx-32">
              <p className="text-lg mb-12">I synthesize ideas into visuals and codes.</p>
                <p>
                My name is Kevin. I am a creative and dedicated person who's passionate about 
                <b> visual design, UI/UX design, and software and web development. </b>
                Currently, I am studying Computer Science at University of Indonesia as an undergraduate student. 
                After five years of experience in the creative field, I have helped 
                people visualize their dreams and visions, and I will be more than happy 
                to cooperate with you.
                </p>
            </div>
            <Footer />
            </div>
        </div>  
      </Layout>
    </>
    
  );
}