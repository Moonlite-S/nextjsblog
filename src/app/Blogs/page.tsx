import Blog from "@/_components/blog";

export default function Blogs() {
    return(
        <>
        <Blog URL_String='https://i.imgur.com/dc0Ajag.png' 
            HeaderText='Arknights Lone Trail' 
            BodyText='Such an amazing Event. One, if not, the BEST event story Ive read in this game!'
            Alignment="text-right"/>
        
        <Blog URL_String="https://arknights.wiki.gg/images/4/46/CN_So_Long%2C_Adele_banner.png"
            HeaderText="So Long, Adele"
            BodyText="The current event I'm playing as of now. I WILL BEAT YOU SL-EX-8 DOLLY!"
            Alignment="text-left"/>

        <Blog URL_String="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2014/07/imgur.jpg"
            HeaderText="Minecraft"
            BodyText="Just literally Minecraft. I love this game."
            Alignment="text-right"/>
    

        </>
    )
}