// import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
// import { Button } from "@/components/ui/button";
// import React from "react"
// import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
// import { User2 ,LogOut} from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { USER_API_END_POINT } from "@/utils/constant";
// import { setUser } from "@/redux/authSlice";
// import { toast } from "sonner";

// const Navbar=()=>{
//     const{user}=useSelector(store=>store.auth)
//     const dispatch=useDispatch()
//     const  navigate=useNavigate()

//     const logoutHandler=async()=>{
//         try{
//             const res=await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true})
//             if(res.data.success){
//                 dispatch(setUser(null))
//                 navigate("/")
//                 toast.success(res.data.message)
//             }
//         }
//         catch(error){
//             console.log(error)
//             toast.error(error?.response?.data?.message || "Logout failed. Try again.")

//         }
//     }
//     return(
//         <div className='bg-white'>
//             <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
//                 <div>
//                    <h1 className="text-2xl font-bold">Job<span className="text-[#F83002]">Sphere</span></h1>
//                 </div>
//                 <div className="flex items-center gap-12">
//                     <ul className="flex font-medium items-center gap-5">
//                         {
//                             user && user.role==='recruiter'?(
//                                 <>
//                                    <li><Link to="/admin/companies">Companies</Link></li>
//                                    <li><Link to="/admin/jobs">Jobs</Link></li>
//                                 </>
//                             ):(
//                                 <>
//                                    <li><Link to="/">Home</Link></li>
//                                    <li><Link to="/jobs">Jobs</Link></li>
//                                    <li><Link to="/browse">Browse</Link></li>
//                                 </>
//                             )
//                         }
//                     </ul>
//                     {
//                         !user?(
//                             <div className="flex items-center gap-2">
//                                 <Link to="/login"> <Button variant="outline">Login</Button></Link>
//                                 <Link to="/signup"> <Button className="bg-[#6A38C2] hover:bg-[#5B30a6]">Signup</Button></Link>
//                             </div>
//                         ):(
//                             <Popover >
//                                 <PopoverTrigger asChild>
//                                     <Avatar className="cursor-pointer">
//                                        <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" className="w-10 h-10 rounded-full object-cover"/>
//                                     </Avatar>
//                                 </PopoverTrigger>
//                                 {/* <PopoverContent className="w-80">
//                                     <div>
//                                         <div className="flex gap-4 space-y-2">
//                                             <Avatar className="cursor-pointer">
//                                                 <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" className="w-10 h-10 rounded-full object-cover"/>
//                                             </Avatar>
//                                             <div>
//                                                 <h4 className="font-medium">{user?.fullname}</h4>
//                                                 <p className="text-sm text-muted-foreground">{user?.profile?.bio}</p>
//                                             </div>
//                                         </div>
//                                         <div className="flex flex-col my-2 text-gray-600">
//                                             {
//                                                 user && user.role==='student' && (
//                                                     <div className="flex w-fit items-center gap-2 cursor-pointer">
//                                                         <User2/>
//                                                         <Button variant="link"><Link to="/profile">View Profile</Link></Button>
//                                                     </div>
//                                                 )
//                                             }
//                                             <div className="flex w-fit items-center gap-2 cursor-pointer">
//                                                 <LogOut/>
//                                                 <Button onClick={logoutHandler} variant="link">Logout</Button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </PopoverContent> */}
//                                 <PopoverContent className="w-64 bg-white rounded-lg shadow-md p-4 space-y-4">
//                                     <div className="flex items-center gap-4">
//                                         <Avatar>
//                                            <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" className="w-10 h-10 rounded-full object-cover" />
//                                         </Avatar>
//                                         <div>
//                                             <h4 className="font-semibold text-base">{user?.fullname}</h4>
//                                             <p className="text-sm text-gray-500">{user?.profile?.bio}</p>
//                                         </div>
//                                     </div>
//                                     <div className="space-y-2 text-sm text-gray-700">
//                                        {user?.role === 'student' && (
//                                         <Link to="/profile" className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100 cursor-pointer">
//                                         <User2 className="w-4 h-4" />
//                                         <span>View Profile</span>
//                                         </Link>
//                                        )}
//                                        <div onClick={logoutHandler}
//                                             className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100 cursor-pointer">
//                                             <LogOut className="w-4 h-4" />
//                                             <span>Logout</span>
//                                         </div>
//                                     </div>
//                                 </PopoverContent>
//                             </Popover>
//                         )
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar



import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import React from "react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { User2, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Logout failed. Try again.");
    }
  };

  return (
    <div className="bg-white z-50 relative">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Sphere</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  <Link to="/admin/companies">Companies</Link>
                </li>
                <li>
                  <Link to="/admin/jobs">Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li>
                  <Link to="/browse">Browse</Link>
                </li>
              </>
            )}
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#6A38C2] hover:bg-[#5B30a6]">Signup</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="@user"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="z-50 w-64 bg-white rounded-lg shadow-md p-4 space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@user"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-base">{user?.fullname}</h4>
                    <p className="text-sm text-gray-500">{user?.profile?.bio}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  {user?.role === "student" && (
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100 cursor-pointer"
                    >
                      <User2 className="w-4 h-4" />
                      <span>View Profile</span>
                    </Link>
                  )}
                  <div
                    onClick={logoutHandler}
                    className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
