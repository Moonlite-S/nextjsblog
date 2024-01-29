import '../_styles/globals.css'

function App() {
  
  return (
    <>
      <div className="m-5 p-10 bg-mocha-100 transition-all justify-center">
        <h1 className='text-xl font-bold'>
          Welcome to my first Blog Site!
        </h1>
      
        <p className='my-5'> 
          Even though it's just a fake, I would like to put some random blog things that will make this site burst with life!
        </p>

        <h2 className='my-5'>
          Here are some things I've been trying to work on in my spare time:
        </h2>
      </div>

      <div className='m-5 p-10 bg-mocha-100 transition-all justify-center'>
        <div className='py-5 flex flex-row box-content h-64'>
          <div className='bg-sky-200 p-5 basis-1/3 text-center'>
            Vert Bot, A Discord Bot
            </div>
          <div className='bg-blue-200 p-5 basis-2/3 '>
            <h2>Discord is a popular social media app where communities from all over the world can communicate with one another. One feature Discord has is the ability to create bots to help with automated tasks. Vert Bot is a personal bot of mine where I constantly add new features to it such as a simple hangman minigame to a summon simulation for a popular mobile game.</h2>
          </div>
        </div>
      </div>

      <div className='m-5 p-10 bg-mocha-100 transition-all justify-center'>
        <div className='py-5 flex flex-row h-64'>
          <div className='bg-blue-200 p-5 basis-2/3 text-center'>
            <h2>Arknights is a popular mobile game that I play all the time and this application is for the purpose of enhancing the experience and difficulty of the game by randomizing what kind of characters I bring to certain maps. It features extensive settings for users to tweak so that they can choose what type of experience they want.</h2>
          </div>
          <div className='bg-sky-200 p-5 basis-1/3 text-center'>
            YAAR, An Arknights Randomizer
            </div>
        </div>
      </div>

      <div className='m-5 p-10 bg-mocha-100 transition-all justify-center'>
        <div className='py-5 flex flex-row h-64'>
          <div className='bg-sky-200 p-5 text-center basis-1/3'>
            My Portfolio
            </div>
          <div className='bg-blue-200 p-5 text-center basis-2/3'>
            <h2>This is my Portfolio where I actually will go more into detail on how my projects work.</h2>
          </div>
        </div>
      </div>

      <div className='m-5 p-10 bg-mocha-100 transition-all justify-center'>
        <div className='py-5 flex flex-row h-64'>
          <div className='bg-blue-200 p-5 basis-2/3 text-center'>
            <h2>A simple calculator I had made by myself using the beginner knowledge of React.</h2>
          </div>
          <div className='bg-sky-200 p-5 basis-1/3 text-center'>
            Simple Calculator
            </div>
        </div>
      </div>

      <div className='m-5 p-10 bg-mocha-100 transition-all justify-center'>
        <div className='py-5 flex flex-row h-64'>
          <div className='bg-sky-200 p-5 text-center basis-1/3'>
            Top Down 2D Game
            </div>
          <div className='bg-blue-200 p-5 text-center basis-2/3'>
            <h2>A project I had worked with a group of classmates for my midterm game design class.</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
