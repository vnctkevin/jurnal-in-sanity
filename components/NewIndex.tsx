/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Q19szBJ4vwL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Image from "next/image"

export default function NewIndex() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="h-14 flex items-center">
        <div className="container flex items-center justify-center px-4 md:px-6">
          <Link className="flex items-center justify-center" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Portfolio
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Projects
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              About
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="grid gap-6">
        <section className="grid gap-6 lg:gap-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col min-vh-[50vh] items-center justify-center gap-2 text-center lg:gap-4 lg:grid lg:grid-cols-2 lg:items-start lg:text-left">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter lg:text-5xl xl:text-6xl/none">Hi, I'm Sarah.</h1>
                <p className="text-gray-500 dark:text-gray-400">Software Engineer. Blogger. Lifelong learner.</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl aspect-[3/1] overflow-hidden rounded-t-lg object-cover object-center">
            <Image
              alt="Hero"
              className="aspect-[3/1] overflow-hidden rounded-t-lg object-cover object-center"
              height="400"
              src="/placeholder.svg"
              width="1400"
            />
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-[3.5rem] 2xl:text-5xl">
                    Building the Web
                  </h2>
                  <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
                    I love creating beautiful and performant web experiences. Follow my journey as I explore the latest
                    in web development.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    View Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-[3.5rem] 2xl:text-5xl">
                  Featured Posts
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  The latest from my blog.
                  <Link className="underline underline-offset-2" href="#">
                    View all posts →
                  </Link>
                </p>
              </div>
              <div className="divide-y">
                <div className="grid gap-2 py-4 md:grid-cols-6 md:gap-4 md:py-8 lg:grid-cols-12 lg:gap-6 lg:py-10 xl:gap-8">
                  <div className="flex items-start space-x-2 md:col-span-6 lg:col-span-9">
                    <div className="grid gap-1 text-sm leading-none">
                      <h3 className="font-semibold">Introducing the New Acme Platform</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Posted on June 24, 2023</p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:items-center md:justify-end md:col-span-6 lg:col-span-3">
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-full border border-gray-200 border-gray-200 border-gray-200 hover:border-gray-300 hover:border-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:border-gray-800 dark:hover:border-gray-850 dark:hover:border-gray-850 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      <Image
                        alt="Avatar"
                        className="rounded-full object-cover object-center"
                        height="32"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "32/32",
                          objectFit: "cover",
                        }}
                        width="32"
                      />
                      <span className="sr-only">Posted by Acme Inc</span>
                    </Link>
                  </div>
                </div>
                <div className="grid gap-2 py-4 md:grid-cols-6 md:gap-4 md:py-8 lg:grid-cols-12 lg:gap-6 lg:py-10 xl:gap-8">
                  <div className="flex items-start space-x-2 md:col-span-6 lg:col-span-9">
                    <div className="grid gap-1 text-sm leading-none">
                      <h3 className="font-semibold">Building the Future of the Web</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Posted on June 24, 2023</p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:items-center md:justify-end md:col-span-6 lg:col-span-3">
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-full border border-gray-200 border-gray-200 border-gray-200 hover:border-gray-300 hover:border-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:border-gray-800 dark:hover:border-gray-850 dark:hover:border-gray-850 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      <Image
                        alt="Avatar"
                        className="rounded-full object-cover object-center"
                        height="32"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "32/32",
                          objectFit: "cover",
                        }}
                        width="32"
                      />
                      <span className="sr-only">Posted by Acme Inc</span>
                    </Link>
                  </div>
                </div>
                <div className="grid gap-2 py-4 md:grid-cols-6 md:gap-4 md:py-8 lg:grid-cols-12 lg:gap-6 lg:py-10 xl:gap-8">
                  <div className="flex items-start space-x-2 md:col-span-6 lg:col-span-9">
                    <div className="grid gap-1 text-sm leading-none">
                      <h3 className="font-semibold">The State of Jamstack in 2023</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Posted on June 24, 2023</p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:items-center md:justify-end md:col-span-6 lg:col-span-3">
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-full border border-gray-200 border-gray-200 border-gray-200 hover:border-gray-300 hover:border-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:border-gray-800 dark:hover:border-gray-850 dark:hover:border-gray-850 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      <Image
                        alt="Avatar"
                        className="rounded-full object-cover object-center"
                        height="32"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "32/32",
                          objectFit: "cover",
                        }}
                        width="32"
                      />
                      <span className="sr-only">Posted by Acme Inc</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="flex items-center gap-2">
          <Link className="flex items-center gap-2" href="#">
            <ChevronRightIcon className="h-4 w-4" />
            Blog
          </Link>
          <Link className="flex items-center gap-2" href="#">
            <ChevronRightIcon className="h-4 w-4" />
            Projects
          </Link>
          <Link className="flex items-center gap-2" href="#">
            <ChevronRightIcon className="h-4 w-4" />
            About
          </Link>
          <Link className="flex items-center gap-2" href="#">
            <ChevronRightIcon className="h-4 w-4" />
            Contact
          </Link>
        </div>
        <div className="space-x-4 sm:ml-auto">
          <Link className="text-xs hover:underline underline-offset-4 underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 underline underline-offset-4" href="#">
            Privacy
          </Link>
        </div>
      </footer>
    </div>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
