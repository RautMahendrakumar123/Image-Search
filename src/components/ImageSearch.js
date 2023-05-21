import React, { useContext } from 'react'
import { ImageContext } from './ImageContext'

const ImageSearch = () => {
    const {query,setQuery,images,searchImage}=useContext(ImageContext);

const handlesubmit = (e)=>{
e.preventDefault();
searchImage();
}

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type='text' value={query} onChange={(e)=>{setQuery(e.target.value)}} />
        <button type='submit'>Search</button>
        <div>
      <button type='submit' onClick={()=>{
        setQuery('mountains')
      }}>Mountain</button>
      <button type='submit' onClick={()=>{
        setQuery('Beaches')
      }}>Beaches</button>
    <button type='submit' onClick={()=>{
        setQuery('Birds')
      }}>Birds</button>
      <button type='submit' onClick={()=>{
        setQuery('food')
      }}>Food</button>
      </div>
      </form>
      
      <div>
        {images.map((image)=>{
            return <img key={image.id}
            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} 
            />
        })}
      </div>
    </div>
  )
}

export default ImageSearch
