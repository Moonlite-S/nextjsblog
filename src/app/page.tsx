import { HomeBlog } from '@/_components/blog'
import '../_styles/globals.css'

export default function App() {
  return (
    <>
      <div className="m-5 p-10 bg-mocha-100 transition-all justify-center rounded">
        <h1 className='text-xl font-bold'>
          Welcome to my first Blog Site!
        </h1>
      
        <p className='my-5'> 
          Even though it's just a fake, I would like to put some random blog things that will make this site burst with life!
        </p>

        <h2 className='my-5'>
          Here are some things I've been trying to work on in my spare time:
        </h2>
        
        <h3 className='my-5'>
          Links lead to their GitHub repos when applicable.
        </h3>
      </div>

      <HomeBlog URL_Page={'https://github.com/Moonlite-S/VertBot'}
      URL_String={'https://3.bp.blogspot.com/-othbryDXlZI/WZXRJ-u5WbI/AAAAAAAAAjU/lwB04t50rp8_Zk-6EcqNENMZv7ikbdgpACLcBGAs/s1600/hyperdimension_neptunia__green_heart_by_nightfall1007-d90jbbf.jpg'}
      HeaderText={'Vert Bot'}
      BodyText={'Discord is a popular social media app where communities from all over the world can communicate with one another. One feature Discord has is the ability to create bots to help with automated tasks. Vert Bot is a personal bot of mine where I constantly add new features to it such as a simple hangman minigame to a summon simulation for a popular mobile game.'} 
      Alignment='text-right'
      />
      
      <HomeBlog URL_Page={'https://github.com/Moonlite-S/YAAR--Yet-Another-Arknights-Randomizer-'}
      URL_String={'https://www.mobygames.com/images/covers/l/625417-arknights-ipad-front-cover.png'}
      HeaderText={'YAAR, Another Arknights Randomizer'}
      BodyText={'Arknights is a popular mobile game that I play all the time and this application is for the purpose of enhancing the experience and difficulty of the game by randomizing what kind of characters I bring to certain maps. It features extensive settings for users to tweak so that they can choose what type of experience they want.'} 
      Alignment='text-left'
      />

      <HomeBlog URL_Page={'https://github.com/Moonlite-S/Moonlite-S'}
      URL_String={'https://images.examples.com/wp-content/uploads/2017/11/Square-Portfolio-Brochure-Example.jpg'}
      HeaderText={'My Portfolio'}
      BodyText={'This is my Portfolio where I actually will go more into detail on how my projects work.'} 
      Alignment='text-right'
      />

      <HomeBlog URL_Page={'https://github.com/Moonlite-S/Simple-React-Calculator'}
      URL_String={'http://content.etilize.com/2000/1030989540.jpg'}
      HeaderText={'A Simple Calculator in React'}
      BodyText={'A simple calculator I had made by myself using the beginner knowledge of React.'} 
      Alignment='text-left'
      />

      <HomeBlog URL_Page={'https://github.com/UTRGV-CS-3370/midterm-game-nss'}
      URL_String={'https://wallpapercave.com/wp/wp4162408.gif'}
      HeaderText={'Top Down 2D Galaga Game'}
      BodyText={'A project I had worked with a group of classmates for my midterm game design class.'} 
      Alignment='text-right'
      />
    </>
  )
}