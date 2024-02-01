import '../_styles/globals.css'

export default function App() {
  return (
    <>
      <div className="m-5 p-10 bg-mocha-100 transition-all justify-center rounded">
        <h1 className='text-xl font-bold'>
          {"Welcome to my first Blog Site!"}
        </h1>
      
        <p className='my-5'> 
          {"Even though it's just a fake, I would like to put some random blog things that will make this site burst with life!"}
        </p>

        <h2 className='my-5'>
          {"Here are some things I've been trying to work on in my spare time:"}
        </h2>
        
        <h3 className='my-5'>
          {"Links lead to their GitHub repos when applicable."}
        </h3>
      </div>

    </>
  )
}