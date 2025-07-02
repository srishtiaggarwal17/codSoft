// import React from "react";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
// import { Button } from "./ui/button";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setSearchedQuery } from "@/redux/jobSlice";

// const category=[
//     "Frontend Developer",
//     "Backend Developer",
//     "FullStack Developer",
//     "Data Science",
//     "Graphic Designer",
//     "Software Developer",
//     "Artificial Intelligence",
//     "Machine Learning",
//     "Game Developer",
//     "Android Developer",
//     "C++ Developer",
//     "Python Developer",
//     "Technical Content Developer",
//     "UI/UX Developer",
//     "Product Designer"
// ]

// const CategoryCarousel=()=>{
//     const navigate=useNavigate()
//     const dispatch=useDispatch()
//     const searchJobHandler=()=>{
//         dispatch(setSearchedQuery(query))
//         navigate("/browse")
//     }
//     return(
//         <div>
//             <Carousel className="w-full max-w-xl mx-auto my-20">
//                 <CarouselContent>
//                     {
//                         category.map((cat,index)=>(
//                             <CarouselItem className="md:basis-1/2 lg-basis-1/3">
//                                 <Button onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full">{cat}</Button>
//                             </CarouselItem>
//                         ))
//                     }
//                 </CarouselContent>
//                 <CarouselPrevious/>
//                 <CarouselNext/>
//             </Carousel>
//         </div>
//     )
// }

// export default CategoryCarousel;




import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "FullStack Developer",
  "Data Science",
  "Graphic Designer",
  "Software Developer",
  "Artificial Intelligence",
  "Machine Learning",
  "Game Developer",
  "Android Developer",
  "C++ Developer",
  "Python Developer",
  "Technical Content Developer"
];

const CategoryCarousel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className="rounded-full"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
