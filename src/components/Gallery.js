import React from 'react';
import { capitalizeFirstLetter } from '../utils/helper';
import photo from '../assets/images/small/Beaches/0.jpg';

function Gallery(props) {
      
        const currentCategory = {
        name: "beaches",

        description: "Photos of beaches",
    
    };
    

    return (
      <section>

        <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>

        <p>{currentCategory.name}</p>

        <div className='flex-row'>
            <img 
              src={photo}
              alt='Beach example'
              className='img-thumbnail mx-1'
            />
        </div>

      </section>
    );

};

export default Gallery