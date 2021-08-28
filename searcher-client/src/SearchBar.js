import React, { useState } from 'react';
import './SearchBar.css'
import axios from 'axios';
import SearchResult from './SearchResult';

function SearchBar() {

    const [documents, setDocuments] = useState(null);

    const fetchDocuments = async () => {
        try {
            setDocuments(null);

            const response = await axios.get(
                'http://localhost:5000/api'
            );
            
            console.log('response: ' + JSON.stringify(response));

            console.log('response.data: ' + response.data);
            
            console.log('response.data: ' + JSON.stringify(response.data));
            
            console.log('response.data.data: ' + response.data.data);

            
            console.log('response.data.data: ' + JSON.stringify(response.data.data));

            setDocuments(response.data.data);
        } catch (e) {
            console.log(e);
        }
    };
  
    
  return (
    <>
        <h1 className='search-bar-container'>
            Device Agent - Search
        </h1>
        <div className='search-bar-container'>
            <input type='text' placeholder='Type a query here ...' />
        </div>
        <button onClick={fetchDocuments}>
            Search
        </button>
        {
            documents !== null? documents.map(document => (
                <SearchResult key={document.pid} data={document} />
            )) : null
        }
    </>
  );
}

export default SearchBar;
