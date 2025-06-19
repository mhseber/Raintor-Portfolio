import { FaFacebook, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { MdCall } from "react-icons/md";

const Banner = () => {
  return (
    <div className="min-h-screen hero bg-gradient-to-r from-red-700 to-black">
      <div className="text-center hero-content">
        <div>
          <h1 className="font-bold text-white text-7xl">
            Trusted Partner for Your Website Develop.
          </h1>
          <p className="py-6 text-gray-200">
            Building the worlds best marketing websites for over a decade. Your
            trusted partner for strategy, design, and dev.
          </p>
          <a className="flex items-center gap-2 px-4 py-2 text-white transition bg-red-600 rounded-md w-80 hover:bg-red-700">
            <MdCall className="text-xl" />
            Schedule a Call: 01799894176
          </a>
          {/* icons */}
          <div className="flex pt-10 pl-10 space-x-4">
            <i className="text-white"> Follow Me</i>
            <FaFacebook className="text-4xl text-white" />
            <IoLogoInstagram className="text-4xl text-white" />
            <FaTwitterSquare className="text-4xl text-white" />
            <FaLinkedin className="text-4xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
