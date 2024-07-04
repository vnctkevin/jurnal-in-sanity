//create about section just right after index page head
// Path: pages\index.tsx
import Image from "next/image"
export default function Logo() {
    return (
        <section>
            <Image src="/images/logo.png" className="w-20 h-20 rounded-full mr-4" alt="JVK" />
        </section>
    )
  }