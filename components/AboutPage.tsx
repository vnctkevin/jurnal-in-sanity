import Container from 'components/BlogContainer'
import Image from "next/image";
import Link from "next/link";
import Footer from './Footer'
import Navbar from './Navbar'
import Layout from 'components/BlogLayout'
import IndexPageHead from 'components/IndexPageHead'
import type { Settings } from 'lib/sanity.queries'


export interface AboutPageProps {
    preview?: boolean
    loading?: boolean
    settings: Settings
}

export default function AboutPage(props: AboutPageProps) {
    const { preview, loading, settings} = props
  return (
    <>
      <IndexPageHead settings={settings} />
      <Layout preview={preview} loading={loading}>
        <Container>
          <Navbar/>
            <Container>
            <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
                About
            </h1>
            <div className="text-center">
                <p className="text-lg">So, you think this is another portfolio websites, right?</p>
            </div>

            <div className="grid grid-cols-4 gap-5 mt-6 mb-16 md:mt-16 md:mb-16 md:gap-16">
                <div></div>
                <div className='relative col-span-2 overflow-hidden items-center aspect-square odd:translate-y-10 odd:md:translate-y-16'>
                    <Image
                            src="/images/about.jpg"
                            alt="Kevin"
                            fill
                            className="object-cover"
                            />
                </div>
                <div></div>
            
            </div>
            

            <div className="mx-auto prose text-center dark:prose-invert mt-14">
                <p>
                  You are (not) right. This is not another typical portfolio website.
                </p> <br></br>
                <p>
                  Jurnal Visual Kevin was born with the idea of creating a platform for me to share my thoughts, to dive into the corner of my mind,
                  to the edges of norms, to question everything, and to bring my ideas and yours to fruition.
                  </p> <br></br>
                <h2 className="mt-2 mb-3 text-2xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
                  About Me
                </h2>
                <div className="grid grid-cols-3 gap-5 mt-6 mb-16 md:mt-16 md:mb-16 md:gap-16">
                <div></div>
                <div className='relative overflow-hidden items-center aspect-square odd:translate-y-10 odd:md:translate-y-16'>
                    <Image
                            src="/images/profile.jpg"
                            alt="Kevin"
                            fill
                            sizes="(max-width: 320px) 100vw, 320px"
                            className="object-cover"
                            />
                </div>
                <div></div>
            
            </div>
                <p>
                My name is Kevin. I am a creative and dedicated person who's passionate about 
                <b> visual design, UI/UX design, and software and web development. </b>
                Currently, I am studying Computer Science at University of Indonesia as an undergraduate student. 
                After four years of experience in the creative field, I have helped 
                people visualize their dreams and visions, and I will be more than happy 
                to cooperate with you. To learn more about my works, visit <a href='http://vnctkevin.me'><u>vnctkevin.me</u></a>.
                </p>

            </div>
            </Container>
        </Container>
        <Footer/>
      </Layout>
    </>
    
  );
}