import { createContext, useState } from "react";
import App from "./App";

export const SlideContext = createContext()

function SlideProvider() {

    const[slideIndex, setSlideIndex] = useState(1);
    const[level, setLevel] = useState(1);


    const goToNextSlide = () => {
        setSlideIndex((prevIndex) => prevIndex + 1);
        console.log(slideIndex);
      };
    
      const goToPreviousSlide = () => {
        setSlideIndex((prevIndex) => prevIndex - 1);
      };
    

      const contextValue = {
        slideIndex,
        goToNextSlide,
        goToPreviousSlide,
        level,
        setLevel
      };
      return (
        <SlideContext.Provider value={contextValue}>
            <App />
        </SlideContext.Provider>
      )
}

export default SlideProvider;