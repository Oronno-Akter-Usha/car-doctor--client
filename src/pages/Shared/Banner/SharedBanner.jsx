import img from "../../../assets/images/checkout/checkout.png";

import PropTypes from "prop-types";

const SharedBanner = ({ title, p }) => {
  return (
    <div>
      <div className="relative w-full">
        <img src={img} className="w-full rounded-xl" />
        <div className="absolute top-0 w-full flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  rounded-xl">
          <h2 className="text-white font-bold text-4xl absolute left-10">
            {title}
          </h2>
          <div className="bg-red-600 absolute bottom-0 px-10 py-4 left-1/2 ">
            <p className="text-white font-medium text-xl mx-auto">{p}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

SharedBanner.propTypes = {
  title: PropTypes.string,
  p: PropTypes.string,
};

export default SharedBanner;
