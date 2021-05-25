import { useState } from "react";
import PhotoDisplay from "../PhotoDisplay"


function Gallery() {

    const [picList, setPicList] = useState([1,2])

    return (
      <div>
          {picList.forEach(pic => {
              <PhotoDisplay />
          })}
      </div>
    );
  }
  
  export default Gallery;
  