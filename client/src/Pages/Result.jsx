import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const AiResultCard = () => {
  const location = useLocation()
  const [paragraphs] = useState(location.state?.paragraphs || null);
    const parsetitle = (rawTitle) => {
      const clean =  rawTitle.replace(/\*\*(.+?)\*\*/, "$1").trim();
        return <h2 className="font-bold">{clean}</h2>;

    }
  return (
    <main className="bg-base-300  p-4">
      <div className="Card m-4 p-4 bg-base-100">
        <div className="Key_Points list-none flex-col gap-4">
          {paragraphs.map((point, idx) => (
            <li key={idx} className='m-2'>{parsetitle(point)}</li>
          ))}
        </div>
      </div>
    </main>
  )
}

export default AiResultCard