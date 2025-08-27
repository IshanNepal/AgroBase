import { Star } from 'lucide-react'
import React from 'react'

const ExtraSummaryCard = ({img, title, genus, synonym, onclick}) => {
  return (
    <div className="ExtraSummaryCard bg-base-100 rounded-2xl flex justify-between items-end w-fit p-4" onClick={onclick}>
        <div className="Main flex items-center gap-4">
            <div className="img">
                <img src={img} alt="" className='  aspect-[16/9] object-cover rounded-md ml-8 w-[30rem]' />
            </div>
            <div className="Text">
                <h1>{title}</h1>
                <div className="SecondaryText flex flex-col text-neutral-400 ">
                    <p> Genus:{genus}</p>
                    <span>Synonym: {synonym} </span>
                </div>
            </div>
        </div>
            <div className="Other">
            <Star size={30} className='text-red-400'/>
        </div>
    </div>
  )
}

export default ExtraSummaryCard;