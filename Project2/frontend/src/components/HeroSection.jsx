// import React, { useState } from "react";
// import { Button } from "./ui/button";
// import { Search } from "lucide-react";
// import { useDispatch } from "react-redux";
// import { setSearchedQuery } from "@/redux/jobSlice";
// import { useNavigate } from "react-router-dom";

// const HeroSection=()=>{
//     const [query,setQuery]=useState("")
//     const dispatch=useDispatch()
//     const navigate=useNavigate()
//     const searchJobHandler=()=>{
//         dispatch(setSearchedQuery(query))
//         navigate("/browse")
//     }

//     return(
//         <div className="text-center">
//             <div className="flex flex-col gap-5 my-10">
//                 <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">Your Career. Our Mission</span>
//                 {/* <h1 className="text-5xl font-bold">Search, Apply & <br/> Get Your <span className="text-[#6A38C2]">Dream Jobs</span></h1> */}
//                 <h1 className="text-5xl font-bold">Your Dream Job <br/>Is Just a<span className="text-[#6A38C2]"> Search Away</span></h1>
//                 <p>Browse top roles, apply in seconds, and get closer to your dream career.</p>
//                 <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
//                     <input
//                     type="text"
//                     placeholder="Find your dream jobs"
//                     onChange={(e)=>setQuery(e.target.value)}
//                     className='outline-none border-none w-full'
//                     />
//                     <Button onClick={searchJobHandler} className='rounded-r-full bg-[#6A38C2]'>
//                         <Search className="h-5 w-5"/>
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSection;




import React, { useState } from "react";
import { Search, Briefcase, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-semibold text-sm">
          Your Career. Our Mission
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Your Dream Job <br />
          Is Just a <span className="text-[#6A38C2]">Search Away</span>
        </h1>

        <p className="text-gray-600 text-base md:text-lg">
          Browse top roles, apply in seconds, and get closer to your dream career.
        </p>

        {/* ⬇ Search Bar Section */}
        <div className="bg-white rounded-xl shadow-md p-2 md:p-3 flex flex-col md:flex-row items-stretch gap-2 md:gap-4 mt-6">
          {/* Job/Company Search */}
          <div className="flex items-center gap-2 flex-grow border-r border-gray-300 pr-4">
            <Search className="text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search jobs by 'company, skill...'"
              className="w-full outline-none text-sm text-gray-700"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {/* Experience Dropdown */}
          <div className="flex items-center gap-2 border-r border-gray-300 pr-4">
            <Briefcase className="text-gray-400 w-5 h-5" />
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="outline-none text-sm text-gray-700 bg-transparent"
            >
              <option value="">Your Experience</option>
              <option value="0-1">0-1 Years</option>
              <option value="1-3">1-3 Years</option>
              <option value="3-5">3-5 Years</option>
              <option value="5+">5+ Years</option>
            </select>
          </div>

          {/* Location Input */}
          <div className="flex items-center gap-2 flex-grow">
            <MapPin className="text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for an area or city"
              className="w-full outline-none text-sm text-gray-700"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Search Button */}
          <Button
            onClick={searchJobHandler}
            className="bg-[#6A38C2] hover:bg-[#5B30a6] text-white font-semibold px-6 rounded-md transition"
          >
            Search jobs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


