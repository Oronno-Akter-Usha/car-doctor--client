import { useLoaderData } from "react-router-dom";
import SharedBanner from "../Shared/Banner/SharedBanner";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckOut = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const services = useLoaderData();
  const { user } = useContext(AuthContext);
  const { title, _id, price, img } = services;

  const handleBookService = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: price,
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Order Confirm");
        }
      });
  };

  return (
    <div>
      <SharedBanner title={"CheckOut"} p={"Home/Checkout"}></SharedBanner>

      <h2>{title}</h2>

      <form onSubmit={handleBookService} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultChecked={user?.displayName}
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
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
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={"$" + price}
              className="input input-bordered"
              readOnly
              required
            />
          </div>
        </div>
        {/* <textarea
          name=""
          id=""
          className="input input-bordered p-5"
          placeholder="Your Message"
        ></textarea> */}
        <div className="form-control mt-6">
          <button className="btn bg-red-500 text-white btn-block">
            Order Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
