
type BlogProps = {
  URL_String: string;
  HeaderText: string;
  BodyText: string;
};

export default function Blog(
  {URL_String, HeaderText, BodyText}: BlogProps
) {
  return (
    <>
    <div className="bg-blue-200">
      <PictureBanner URL_String={URL_String}/>
      <div className="mx-auto text-center">
        <h1>{HeaderText}</h1>
      <h1>
        {BodyText}
        </h1>
      </div>
    </div>
    </>
  )
}

export function PictureBanner(URL : {URL_String:String}) {
  return (
    <div className='bg-fixed h-52' style={{
      backgroundImage:
        'url(' + URL.URL_String + ')',
    }}>
    </div>
  )
}