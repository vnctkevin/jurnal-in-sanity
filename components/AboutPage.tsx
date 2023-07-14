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
                About Author
            </h1>
            <div className="text-center">
                <p className="text-lg">I synthesize ideas into visuals and codes.</p>
            </div>

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

            <div className="mx-auto prose text-center dark:prose-invert mt-14">
                <p>
                I am a creative and dedicated person who's passionate about 
                <b> visual design, UI/UX design, and software and web development. </b>
                Currently, I am studying Computer Science as an undergraduate student. 
                After four years of experience in the creative field, I have helped 
                people visualize their dreams and visions, and I will be more than happy 
                to cooperate with you.
                </p>

            </div>
            </Container>
        </Container>
        <Footer/>
      </Layout>
    </>
    
  );
}