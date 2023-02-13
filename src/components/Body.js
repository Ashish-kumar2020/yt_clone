// import MainContainer from "./MainContainer";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = ()=>{
    return (
        <div className="flex">
            {/* <MainContainer/> */}
            <Sidebar/>
            <Outlet/>
        </div>
        
    )
}

export default Body;