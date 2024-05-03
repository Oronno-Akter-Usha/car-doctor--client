import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero mb-32">
      <div className="hero-content flex-col lg:flex-row gap-5">
        <div className="lg:w-1/2 relative">
          <img
            src={person}
            className="w-3/4 rounded-lg shadow-2xl h-[473px] "
          />
          <img
            src={parts}
            className="h-[300px] w-1/2 absolute right-5 -bottom-20 rounded-lg  shadow-2xl brightness-75"
          />
        </div>
        <div className="lg:w-1/2 space-y-5">
          <h3 className="text-[#FF3811] font-bold">About Us</h3>
          <h1 className="text-4xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className="btn btn-error text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
