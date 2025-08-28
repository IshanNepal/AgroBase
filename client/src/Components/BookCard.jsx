import React from 'react'

const BookCard = ({title, author, img , desc}) => {
    const lineClamper = (text_to_be_clamped) => {
        const clamped_text = text_to_be_clamped.slice(0, 8 ) + '...'
        return clamped_text;
    }
  return (
     <div className="BookCard bg-base-100 rounded-2xl py-4 px-2 flex justify-center items-end gap-2" > 
        <div className="Main">
            <img src={img} alt="Image" className='aspect-[16/9] object-cover rounded-md w-30 h-40' />
            <div className="Text">
                <h1>{title}</h1>
                <div className="SecondaryText flex flex-col text-neutral-400 ">
                    <p>Author :{author}</p>
                    <span>{lineClamper(desc)}</span>
                </div>
            </div>
        </div>
        <div className="Other flex gap-2 ">
            <button className='p-2 bg-primary rounded-md'>
                Buy Now!
            </button>
            <button className='p-2 border-2 border-primary rounded-md'>
                Rent 
            </button>
        </div>
    </div>)
}

export default BookCard;