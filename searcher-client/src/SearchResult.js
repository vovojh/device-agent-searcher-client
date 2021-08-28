import React from 'react';
import './SearchResult.css';


function SearchResult({data}) {
  return (
    <div className='search-result-item'>
        {data.pid}: {data.paragraph}
    </div>
  );
}

export default SearchResult;
