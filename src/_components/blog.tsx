'use client'

import { useEffect, useRef, useState } from "react";

type BlogProps = {
  URL_String: string;
  HeaderText: string;
  BodyText: string;
  Alignment: string;
};

export default function Blog(
  {URL_String, HeaderText, BodyText, Alignment}: BlogProps
) {
  const [isShown, setIsShown] = useState(false);
  const [color, setColor] = useState('bg-blue-300');

  useEffect(() => {
    console.log("Use Effect in effect!");
    setColor('bg-red-200');
  }, [isShown]);

  return (
    <>
    <div className='mx-auto p-5 container text-center'>
    <button onClick={() => setIsShown(!isShown)} className={color + '  transition-100 duration-100 hover:-translate-y-1'}>
      Click to show Blog
    </button>
    </div>

    {isShown ? (
    <>
    <div className="bg-blue-200">
      <PictureBanner URL_String={URL_String}/>

      <div className="p-5">
        <div className={'mx-auto text-center p-5' + Alignment}>
          <h1 className="text-lg font-bold">{HeaderText}</h1>
          <p className="leading-relaxed">{BodyText}</p>
        </div>
      </div>
        <div className="mx-auto p-5 text-center">
      </div>
    </div>
    </>
     ) : null}
    </>
  )
}

export function PictureBanner(URL : {URL_String:String}) {
  return (
    <div className='bg-fixed bg-center' style={{
      backgroundImage:
        'url(' + URL.URL_String + ')', height:'200px'
    }}>
    </div>
  )
}