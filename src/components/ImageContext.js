import axios from "axios";
import React, { createContext, useState } from "react";


const ImageContext = createContext();

const ImageProvider = ({ children })=>{
    const [query,setQuery]=useState('')
    const [images,setImages]=useState([])

const searchImage = async ()=>{
    try{
        const response = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0df314f38f2ad31be1318c175a519de2&format=json&nojsoncallback=1&text=${query}`)
        setImages(response.data.photos.photo)
    }catch(err){
        console.log(err)
    }
}

    return <ImageContext.Provider value={{query,setQuery,images,searchImage}}>
        {children}
    </ImageContext.Provider>
}

export {ImageContext,ImageProvider}