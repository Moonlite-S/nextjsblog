import { Blog } from "@/_components/blog";

export default function Page() {
    return(
        <>
        <div className="m-5 p-10 bg-mocha-100 transition-all justify-center rounded" >
            <h1 className="text-lg font-bold text-right text-mocha-1000">Latest Blogs</h1>
        </div>

        <div className="m-5 p-10 grid grid-cols-3 gap-10 bg-mocha-100 transition-all justify-center rounded" >
            <Blog 
                URL_Page="/Blogs/LoneTrail"
                URL_String='https://i.imgur.com/dc0Ajag.png' 
                HeaderText='Arknights Lone Trail' 
                BodyText='Such an amazing Event. One, if not, the BEST event story Ive read in this game!'
                Date="November 21, 2023"/>
            
            <Blog 
                URL_Page= ""
                URL_String="https://arknights.wiki.gg/images/4/46/CN_So_Long%2C_Adele_banner.png"
                HeaderText="So Long, Adele"
                BodyText="The current event I'm playing as of now. I WILL BEAT YOU SL-EX-8 DOLLY!"
                Date="January 25, 2024"/>

            <Blog
                URL_Page= ""
                URL_String="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2014/07/imgur.jpg"
                HeaderText="Minecraft"
                BodyText="Just literally Minecraft. I love this game."
                Date=""/>

            <Blog 
                URL_Page= ""
                URL_String="https://i.ytimg.com/vi/s-YiQiS-JQc/maxresdefault.jpg"
                HeaderText="Answer in Progress"
                BodyText="A nice entertaining Youtube channel that I watch from time to time."
                Date=""/>
                    
            <Blog 
                URL_Page= ""
                URL_String="https://s.hdnux.com/photos/01/20/76/11/21226073/3/1200x0.jpg"
                HeaderText="Dave's Hot Chicken"
                BodyText="The chicken is a 9, but everything else is more like a 5."
                Date=""/>

            <Blog 
                URL_Page= ""
                URL_String="https://www.pymnts.com/wp-content/uploads/2023/12/OpenAI-1.jpg?w=620"
                HeaderText="Open AI"
                BodyText="The cheat code for programming."
                Date=""/>
        </div>
        </>
    )
}