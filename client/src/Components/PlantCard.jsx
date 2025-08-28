import { Star } from 'lucide-react'
import React from 'react'
import { useState } from 'react';
import { Skeleton } from './ui/skeleton';


const PlantCard = ({img, title, genus, synonym, onclick}) => {
    const lineClamper = (text_to_be_clamped) => {
        const clamped_text = text_to_be_clamped.slice(0, 20 ) + '...'
        return clamped_text;
    }
    const [loaded, setLoaded] = useState(false);
  return (
    <>
    {!loaded && <Skeleton className="w-full h-full rounded-2xl bg-base-100" />}
    <div className={`PlantCard bg-base-100 rounded-2xl py-4 px-2 flex justify-between items-end transform-opacity duration-200 ${loaded ? 'opacity-100' : 'opacity-0' } shadow-sm hover:scale-102 hover:shadow-md hover:cursor-pointer`}
        // set loaded true after render (or after data fetched)
        onLoad={() => setLoaded(true)} onClick={onclick}>
        <div className="Main">
            <div className="img">
                <img src={img} alt="" className=' w-50 aspect-[16/9] object-cover rounded-md' />
            </div>
            <div className="Text">
                <h1>{title}</h1>
                <div className="SecondaryText flex flex-col text-neutral-400 ">
                    <p> Genus:{genus}</p>
                    <span>Synonym: {lineClamper(synonym)}</span>
                </div>
            </div>
        </div>
        <div className="Other">
            <Star size={30} className='text-red-400'/>
        </div>
    </div>
    </>
  )
}

export default PlantCard
