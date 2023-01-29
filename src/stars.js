import ReactStars from 'react-stars';
import React, { startTransition } from "react";
import { render } from 'react-dom';

// export default "class" is named ReactStars

    const ratingChanged = (newRating) => {
        console.log(newRating)
      }

    
      
      render(<ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        color2={'#ffd700'} />,
      
        document.getElementById('where-to-render')
      );



