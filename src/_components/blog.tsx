import Link from "next/link";

type BlogProps = {
  URL_Page: string;
  URL_String: string;
  HeaderText: string;
  BodyText: string;
  Date: string;
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
    <div className="m-5 p-10 bg-mocha-100 justify-center" >
      <PictureBanner URL_String={URL_String}/>
      <div className="flex flex-row p-5">
        <h1 className="basis-1/2">{HeaderText}</h1>
        <h3 className="basis-1/2 text-right">Posted on {Date}</h3>
      </div>
      <div className="">
        <p>{BodyText}</p>
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
