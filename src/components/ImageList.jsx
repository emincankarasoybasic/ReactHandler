import React from "react";
import ImageCard from "./ImageCard";
import "./private/ImageList.css";

const ImageList = props => {
    const images =  props.images.map(({id,urls,description}) => {
        return <ImageCard id={id} urls={urls.regular} description={description}/>
    });

    return <div className='image-list'>{images}</div>
}

export default ImageList;