import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ServicesCard = ({ services }) => {
  const { title, img, price } = services;
  return (
    <div className="card w-80 md:w-96 bg-base-100  border border-gray-300 ">
      <figure className="px-5 pt-5 h-[300px]">
        <img src={img} alt="" className="rounded-xl h-full" />
      </figure>
      <div className="p-5">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex justify-between items-center w-full text-[#FF3811] mt-5">
          <p className="text-xl font-semibold">Price : ${price}</p>
          <Link to={"/"}>
            <IoIosArrowRoundForward className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

ServicesCard.propTypes = {
  services: PropTypes.object,
};

export default ServicesCard;
