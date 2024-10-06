import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";

const Login = () => {

  const {signsin}= useContext(AuthContext);
  // for location tracking
  const location =useLocation();
  console.log(location);
  const navigate = useNavigate();

    const handleLogin =e=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email =form.get('email');
        const password = form.get('password');
        console.log(email,password);
        signsin(email,password)
        .then(result=>{
          console.log(result.user);
          // for go to the location from where it come to the login page
          // navigate after login
          navigate(location?.state? location.state:'/')
        })
        .catch(error=>{console.error(error)})
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="my-12 mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn ">Login</button>
          </div>
          <p className="text-sm mt-3">Dont have a account? <Link to="/register" className="text-red-500 font-bold">Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
