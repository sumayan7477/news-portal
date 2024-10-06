import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RigntSideNav from "../Shared/RigntSideNav/RigntSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
    // use parameter from routes from newsCards
    const {id} =useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <p>{id}</p>
                </div>
                <div className="col-span-1">
                    <RigntSideNav></RigntSideNav>
                </div>
            </div>
            
        </div>
    );
};

export default News;