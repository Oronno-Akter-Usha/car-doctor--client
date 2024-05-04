import loginImg from "../../assets/images/login/login.svg";

const Login = () => {
  return (
    <div className="mb-10">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="text-center lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card md:w-1/2 p-16 border border-gray-300">
          <h1 className="text-4xl text-center font-bold">Login</h1>
          <form className="">
            <div className=" form-control mb-7">
              <label className="label">
                <span className="text-lg font-semibold">Email</span>
              </label>
              <input
                type="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] text-white">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
