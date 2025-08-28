import React, { useState, useEffect } from 'react';

const ExtraSummaryCard = ({ synonyms, bill, author, sciname, rank }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // simulate load delay for animation effect
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`ExtraSummaryCard w-fit sm:w-[50rem] bg-base-100 p-8 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="Main flex items-center gap-4 flex-col sm:flex-row">
        <div className="Text flex flex-col gap-2 text-xl">
          <div className="bill">
            <h1 className='text-2xl'>Bibliography for the Info: {bill}</h1>
          </div>
          <div className="author">
            <h1>Author of the Entry: {author}</h1>
          </div>
          <div className="sciname">
            <h1>Scientific Name of the Plant: {sciname}</h1>
          </div>
          <div className="rank">
            <h1>Hierarchy of Plant: {rank}</h1>
          </div>
          <div className="Synonyms">
            <h1>Synonyms of the Plant:</h1>
            <ul>
              {synonyms.slice(0, 10).map((synonym, idx) => (
                <li key={idx} className='text-neutral-400'>{synonym}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSummaryCard;
