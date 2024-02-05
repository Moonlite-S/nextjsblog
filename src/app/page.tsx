import { TransitionUp } from '@/_components/ClientBlog'
import '../_styles/globals.css'

export default function App() {
  return (
    <>
    <TransitionUp>
      <div className="m-5 p-10 bg-mocha-100 transition-all justify-center rounded">
        <h1 className='text-xl font-bold text-right'>
          Welcome to my Blog Site
        </h1>
      </div>

      <div className="m-5 p-10 bg-mocha-100 transition-all justify-center rounded">
        <p className='my-5'> 
          Even though it's just a normal and bland blog site, I would like to put some random things that will make this page burst with life.
        </p>
        <p className='my-5'>
          Navigate through the site using the buttons up top.
        </p>

      </div>
    </TransitionUp>
    </>
  )
}