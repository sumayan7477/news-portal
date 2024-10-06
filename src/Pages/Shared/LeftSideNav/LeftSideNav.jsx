import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = ( ) => {
  const [catagory, setcatagory] = useState([]);
  // for menu
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setcatagory(data));
  }, []);
  // for news

  // const { title, thumbnail_url, details, author, rating, total_view } = news;

  return (
    <div>
      <h2 className="text-3xl my-2">All Catagory</h2>
      <div className="flex flex-col ">
        {catagory.map((cata) => (
          <Link
            className=" w-full p-2 rounded-sm"
            key={cata.id}
            to={`/catagory/${cata.id}`}
          >
            {cata.name}
          </Link>
        ))}
      </div>

      {/* <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}!<div className="badge badge-secondary">NEW</div>
          </h2>
          {details.length > 100 ? (
            <p>
              {details.slice(0, 100)}
              <Link to={`/news/${news._id}`} className="text-red-600">
                {" "}
                Read More..
              </Link>
            </p>
          ) : (
            <p>{details} </p>
          )}
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LeftSideNav;
