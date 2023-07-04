import {BsInstagram, BsTwitter, BsGithub, BsMedium} from 'react-icons/bs'

export default function Footer() {
    return (
        
        <footer className="flex flex-col md:flex-row justify-center items-center md:justify-between md:px-32 px-12 my-16 gap-y-8">
            <div className="flex items-center">
                <a href='https://github.com/vnctkevin'><BsGithub className="w-8 h-8 mr-4" /></a>
                <a href='https://www.twitter.com/vnctkevin/'><BsTwitter className="w-8 h-8 mr-4" /></a>
                <a href='https://www.instagram.com/vnctkevin/'><BsInstagram className="w-8 h-8 mr-4" /></a>
                <a href='https://medium.com/@vnctkevin'><BsMedium className="w-8 h-8 mr-4" /></a>
            </div>
            <p>Copyright © 2023 JVK. All rights reserved.</p>
        </footer>
    )
  }