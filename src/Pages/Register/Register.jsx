import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";

const Register = () => {

    const{creatUser} = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name =form.get("name");
    const email =form.get("email");
    const pass =form.get("password");
    const photo =form.get("photo");
    console.log(name ,email,photo,pass);

    // creatuser
    creatUser(email,pass)
    .then(result=>{
        console.log(result.user)
    })
    .catch(error =>{
        console.error(error)})

  };


  return (
    <div>
      <Navbar></Navbar>
      <div className="my-12 mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleRegister}>
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="Text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
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
            <button type="submit" className="btn ">
              Register
            </button>
          </div>
          <p className="text-sm mt-3">
            Already have a account?
            <Link to="/login" className="text-red-500 font-bold">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
