import { useSelector } from "react-redux";

const Sidebar = ()=>{
    const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);

      // Early Return pattern
     if (!isMenuOpen) return null;

    return (
        <div className="w-48">
            <div className="lists">
                <ul className="py-3">
                    <li className="py-1">Home</li>
                    <li className="py-1">Shorts</li>
                    <li className="py-1">Subscription</li>
                </ul>
                <hr />
                <ul className="py-3">
                    <li className="py-1">Library</li>
                    <li className="py-1">History</li>
                    <li className="py-1">Your videos</li>
                    <li className="py-1">Watch Later</li>
                    <li className="py-1">Liked videos</li>
                </ul>
                <hr />
                <ul className="py-3">
                    <li className="py-1">Ashish</li>
                    <li className="py-1">Ashish</li>
                    <li className="py-1">Ashish</li>
                    <li className="py-1">Ashish</li>
                    <li className="py-1">Ashish</li>
                    <li className="py-1">Ashish</li>
                    <li className="py-1">Ashish</li>
                    <li className="py-1">Ashish</li>
                     <li className="py-1">Ashish</li>
                     <li className="py-1">Ashish</li>
                     <li className="py-1">Ashish</li>
                     <li className="py-1">Ashish</li>
                     <li className="py-1">Ashish</li>
                     <li className="py-1">Ashish</li>
                     <li className="py-1">Ashish</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;