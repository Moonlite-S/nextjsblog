import { BoxDiv, TransitionUp } from "@/_components/ClientBlog";
import vfs from "/public/vfs.png";
import ndm from "/public/hdn.png";
import Image from "next/image";

export default function AboutMe() {
    return(
        <TransitionUp>
            <div className="bg-cover h-[20rem] bg-mocha-100 transition-all justify-center rounded" style={{backgroundImage: "url('/coffee3.jpg'", backgroundPosition: "bottom", backgroundColor: "#000000"}} >
            <h1 className='text-mocha-100 text-5xl font-bold text-right drop-shadow-xl pt-[13rem] pr-10 hover:drop-shadow-2xl transition'>
                About Me
            </h1>
            </div>

            <BoxDiv>
                <p className="indent-5">Hey, I'm Sean (AKA Shawnlings AKA Under The Moonlite AKA Moonlite-S AKA Co Founder of FPGT). I'm a computer science student at University at Rio Grande Valley. I've been doing web design since high school, although I only really got back into it just a couple weeks ago. I've been having a blast learning through different frameworks and concepts. Except frontend. God, I thought I'd like frontend dev because of the creative aspect of it, but damn CSS man. That's annoying as hell.</p>
                <p className="pt-5">Click <a href="https://github.com/Moonlite-S/nextjsblog" target="_blank" className="text-mocha-1100">here</a> if you wanna see the Github page.</p>
                <p>Current Project I'm working on: <span className="italic">Moonlit Cafe</span></p>
                <p className="py-5">If you wanted to know the frameworks behind this website, they're are:</p>

                <div className="mx-auto text-center flex flex-col text-xl py-5">
                    <p>React for Frontend</p>
                    <p>Next.js for Backend</p>
                    <p>Prisma for the database</p>
                    <p>Clerk for Authentication</p>
                    <p>TailwindCSS for making my life 100x easier</p>
                    <p>Framer Motion for transitions</p>
                </div>

                <p className="font-bold">React</p> <p>was pretty straightforward to learn. Reading the docs were simple and concepts were easy to understand.</p>
                <p className="font-bold">Next.js </p><p>was a bit more complicated. It was kinda hard learning how page routing worked, but I eventually got it. There's still a lot I don't understand about it, like fetching and APIs, but I can always learn that in another project.</p>
                <p className="font-bold">Prisma </p> <p>was easy to setup and play. I'm happy I got my own database using Vercel to create and post blogs. Makes it way easier and organic that I can create it on the site rather than in VSC.</p>
                <p className="font-bold">Clerk </p> <p>was even easier to setup. Like criminally so. I know authenication is normally way more difficult than this, but Clerk really streamlines this to the point where it's plug and play.</p>
                <p className="font-bold">TailwindCSS </p> <p>is a godsend. Tailwind makes it so you never have to deal with the horrors of CSS. It also supports custom settings which is something I really appreciate over something like Bootstrap.</p>
                <p className="font-bold">Framer Motion </p> <p>helps with the animations around the site. I've been trying to find a way to do it without any framework, but that shit's way too hard. This helped a lot.</p>
            </BoxDiv>
            
            <BoxDiv>
                <p className="indent-5">Oh, if you wanted to see what one of my first websites were, this one was a Vocaloid Fan Site. I'm still very fucking proud of it to this day. All written in normal HTML CSS and like one line of Javascript. It features a fixed background that changes between each white div box and hover transitions. Very basic stuff, but I thought I was the next Picasso at the time.</p>
                <Image src={vfs} alt="Vocaloid Fan Site" className="py-5" style={{margin: "auto"}}/>

                <p className="indent-5">There was also this one. I found this on the Vocaloid site, but I couldn't find the files for it. I was really interested in making fan sites, huh. I made this one before the Vocaloid site and it was just a very simple wiki / fan site for the franchise. (Oh how times have changed...)</p>
                <Image src={ndm} alt="Hyperdimension Neptunia Fansite" className="py-5" style={{margin: "auto"}}/>
            </BoxDiv>
        </TransitionUp>
    )
}