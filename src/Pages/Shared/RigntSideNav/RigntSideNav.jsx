import { FaGoogle,FaGithub ,FaFacebook,FaTwitter,FaInstagram} from "react-icons/fa6";
import qz1 from '../../../assets/qZone1.png';
import qz2 from '../../../assets/qZone2.png';
import qz3 from '../../../assets/qZone3.png';


const RigntSideNav = () => {
    return (
        <>
        <div className="flex flex-col gap-1 p-2 ">
            <h2 className="text-2xl my-2">Login With</h2>
            <button className="btn btn-outline btn-info w-full"><FaGoogle />Google</button>
            <button className="btn btn-outline w-full"><FaGithub></FaGithub> Github</button>

        </div>
        <br />
        <div className="flex flex-col gap-1 p-2">
            <h2 className="text-2xl my-2"> Find Us On</h2>
           <div className="flex flex-col">
           <a className="btn btn-outline text-left"> <FaFacebook />Facebook</a>
           <a className="btn btn-outline"><FaTwitter />Twitter</a>
           <a className="btn btn-outline"><FaInstagram />Instragram</a>
           </div>

        </div>
        <div className="flex flex-col gap-1 p-2 my-2 ">
            <h2 className="text-2xl my-2">Q-zone</h2>
            <img src={qz1} alt="" />
            <img src={qz2} alt="" />
            <img src={qz3} alt="" />


        </div>
        </>
        
    );
};

export default RigntSideNav;