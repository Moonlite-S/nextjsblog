import Link from "next/link";

type BlogProps = {
  URL_Page: string;
  URL_String: string;
  HeaderText: string;
  BodyText: string;
  Date?: string;
  Alignment?: string;
};

export function Blog(
  {URL_Page, URL_String, HeaderText, BodyText, Date}: BlogProps
) {
  return (
    <Link href={URL_Page}>
      <div className="hover:scale-110 hover:bg-mocha-400 duration-100 ease-in-out bg-mocha-200 border-solid border-2 border-mocha-1000 rounded text-mocha-1000">
          <PictureBanner URL_String={URL_String}/>
          <div className='mx-auto text-center py-5 px-2 border-solid border-t-2 border-mocha-900 h-[200px] overflow-hidden'>
            <h1 className="text-lg font-bold">{HeaderText}</h1>
            <p className="leading-relaxed">{BodyText}</p>
          </div>
        <div className="border-t-2 border-mocha-700 text-center text-mocha-1000 h-[40px] p-2">
          <p>{Date}</p>
        </div>
      </div>
    </Link>
  )
}

export function FullBlog (
  {URL_String, HeaderText, BodyText, Date}: BlogProps
){
  return (
    <div className="m-5 p-10 bg-mocha-100 justify-center rounded" >
      <PictureBanner URL_String={URL_String}/>
      <div className="flex flex-row p-5">
        <h1 className="basis-1/2 font-bold text-xl">{HeaderText}</h1>
        <h3 className="basis-1/2 text-right">Posted on {Date}</h3>
      </div>
      <div className="p-5 border-t-2 border-mocha-600">
        <p className="msg-wrapper">{BodyText}</p>
      </div>
    </div>
)
}

export function PictureBanner(URL : {URL_String:String}) {
  return (
    <div className='bg-center' style={{
      backgroundImage:
        'url(' + URL.URL_String + ')', height:'150px'
    }}>
    </div>
  )
}

export function HomeBlog(
  {URL_Page, URL_String, HeaderText, BodyText, Alignment}: BlogProps,
) {
  return(
    <Link href={URL_Page} target="_blank2">
      <div className='m-5 p-10 bg-mocha-100 transition-all justify-center'>

      {Alignment == 'text-right' ? 
      <div className='py-5 flex flex-row box-content h-64'>
        <div className='bg-sky-200 p-5 basis-1/3 text-center border-2 border-mocha-700 bg-center' style={{backgroundImage: 'url(' + URL_String + ')'}}></div>

        <div className={'bg-blue-200 p-5 basis-2/3 text-left'}>
          <h1 className='font-bold text-xl py-5'>{HeaderText}</h1>
          <h2>{BodyText}</h2>
        </div>
      </div>
      : 
      <div className='py-5 flex flex-row box-content h-64'>
      <div className={'bg-blue-200 p-5 basis-2/3 text-right'}>
        <h1 className='font-bold text-xl py-5'>{HeaderText}</h1>
        <h2>{BodyText}</h2>
      </div>

      <div className='bg-sky-200 p-5 basis-1/3 text-center border-2 border-mocha-700 bg-center' style={{backgroundImage: 'url(' + URL_String + ')'}}></div>
    </div>}
    
    </div>
  </Link>
  )
}