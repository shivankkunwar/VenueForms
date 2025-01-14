import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const GetFreeProposal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [shouldNavigate, setShouldNavigate] = useState(false);

  useEffect(() => {
    if (shouldNavigate && !location.state?.from) {
      const timer = setTimeout(() => {
        navigate("/loader?path=/guest");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [shouldNavigate, navigate, location.state]);

  const handleGetProposal = () => {
    setShouldNavigate(true);
    navigate(".", { replace: true, state: {} });
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#faf6e8] p-4 md:p-8">
      <div className="hidden lg:flex flex-[1.5] justify-center items-center">
        <img
          src="/proposalImage.JPG"
          alt="Wedding Image"
          className="w-[60%] max-h-[90%] rounded-xl object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center px-4 md:px-8 py-6 md:py-8 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          Plan Your Dream Wedding with Us!
        </h1>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Let our experienced planners take care of every detail to make your
          special day unforgettable. From venue selection to flawless execution,
          we've got you covered.
        </p>

        <div className="space-y-4">
          <div className="flex items-start md:items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <span className="text-2xl mr-4">🌟</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Unlock Best Venues, Decors & More
              </h3>
              <p className="text-sm text-gray-600">
                Tell us about your dream day & get a perfect proposal in your
                budget for FREE.
              </p>
            </div>
          </div>

          <div className="flex items-start md:items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <span className="text-2xl mr-4">🌟</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                800+ Flawless Celebrations
              </h3>
              <p className="text-sm text-gray-600">
                Enjoy a perfect, stress-free wedding from the first visit to the
                final goodbyes.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleGetProposal}
          className="w-full md:w-auto px-8 py-4 text-lg font-bold text-white bg-[#E54065] rounded-full shadow-lg 
          hover:bg-[#d93a5d] transform hover:-translate-y-0.5 transition-all duration-200 
          focus:outline-none focus:ring-2 focus:ring-[#E54065] focus:ring-opacity-50"
        >
          Get My FREE Proposal
        </button>
      </div>
    </div>
  );
};

export default GetFreeProposal;