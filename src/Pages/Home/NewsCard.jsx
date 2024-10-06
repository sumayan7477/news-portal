import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
// import icon from "../../assets/user.png";
import { FaEye,FaStar,FaRegBookmark } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
// import News from "../News/News";
const NewsCard = ({ news }) => {
  const { title, thumbnail_url,image_url, details, author ,rating,total_view ,_id} = news;
  const { name, published_date, img } = author;
  console.log(img);

  return (
    <div>
      <div className="card bg-base-100 w-full m-3 shadow-xl">
        <div className="card-body grid grid-cols-8 w-full m-0 bg-slate-100">
          <figure>
            <img className="rounded-full" src={img} alt="Shoes" />
          </figure>
          <div className="col-span-6">
            <p className="font-bold">{name}</p>
            <p>{published_date}</p>
          </div >
           <div className="flex justify-around align-middle">
           <FaRegBookmark />
           <CiShare2 />
           </div>
          <div>
            
          </div>
        </div>
        <div className="card-body">
          

          <h2 className="card-title">
            {title}!<div className="badge badge-secondary">NEW</div>
          </h2>
        </div>
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}
              <Link to={`/news/${_id}`} className="text-red-600 font-bold">
                {" "}
                Read More..
              </Link>
            </p>
          ) : (
            <p>{details} </p>
          )}

          <div className="card-actions justify-between">
            <div className="badge "> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> {rating.number}</div>
            <div className="badge "><FaEye />{total_view}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
