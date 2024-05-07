import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mb-10">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="text-center lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card md:w-1/2 p-16 border border-gray-300">
          <h1 className="text-4xl text-center font-bold">Sign Up</h1>
          <form onSubmit={handleSignUp}>
            <div className=" form-control mb-7">
              <label className="label">
                <span className="text-lg font-semibold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className=" form-control mb-7">
              <label className="label">
                <span className="text-lg font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mb-7">
              <label className="label">
                <span className="text-lg font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-red-500 text-white text-lg font-medium">
                Sign Up
              </button>
            </div>

            <div>
              <p className="text-center mt-8 text-lg font-medium">
                Or Sign In with
              </p>
              <div className="flex justify-center items-center gap-4 mt-8">
                <div className="w-14 h-14 rounded-full bg-gray-100 flex justify-center items-center text-2xl text-blue-700">
                  <FaFacebookF />
                </div>
                <div className="w-14 h-14 rounded-full bg-gray-100 flex justify-center items-center text-2xl text-blue-700">
                  <FaLinkedinIn />
                </div>
                <div className="w-14 h-14 rounded-full bg-gray-100 flex justify-center items-center text-2xl">
                  <FcGoogle />
                </div>
              </div>
            </div>
          </form>
          <p className="text-center mt-10">
            Already Have an account?
            <Link
              to={"/login"}
              className="text-red-500 font-bold ml-2
  
              "
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
