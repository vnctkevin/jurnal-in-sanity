//create about section just right after index page head
// Path: pages\index.tsx
export default function Logo() {
    return (
        <section className="flex justify-center items-center mt-16 mb-16 md:mb-12">
            <img src="/images/logo.png" className="w-32 h-32 rounded-full mr-4" alt="JVK" />
        </section>
    )
  }