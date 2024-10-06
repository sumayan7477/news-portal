import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn rounded-none  btn-secondary">Bracking news</button>
      <Marquee pauseOnHover={true} speed={100} gradient={true} gradientColor={'pink'}>
        <Link>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quisquam, officiis id placeat quaerat dicta nobis corporis adipisci similique! Eligendi.
        </Link>
        <Link>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
