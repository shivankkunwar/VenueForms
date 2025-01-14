import  { useState, useEffect } from "react";
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
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#faf6e8",
        padding: "2rem",
      }}
    >
      <div
        style={{
          flex: 1.5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/proposalImage.JPG"
          alt="Wedding Image"
          style={{
            width: "60%",
            maxHeight: "90%",
            borderRadius: "15px",
          }}
        />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "1.5rem",
          }}
        >
          Plan Your Dream Wedding with Us!
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#555",
            marginBottom: "2rem",
            lineHeight: "1.6",
          }}
        >
          Let our experienced planners take care of every detail to make your
          special day unforgettable. From venue selection to flawless execution,
          we've got you covered.
        </p>

        <div
          style={{
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: "1rem",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                fontSize: "1.5rem",
                color: "#E54065",
                marginRight: "1rem",
              }}
            >
              🌟
            </span>
            <div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  margin: 0,
                  color: "black",
                }}
              >
                Unlock Best Venues, Decors & More
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#777",
                  margin: 0,
                }}
              >
                Tell us about your dream day & get a perfect proposal in your
                budget for FREE.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: "1rem",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <span
              style={{
                fontSize: "1.5rem",
                color: "#E54065",
                marginRight: "1rem",
              }}
            >
              🌟
            </span>
            <div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  margin: 0,
                  color: "black",
                }}
              >
                800+ Flawless Celebrations
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#777",
                  margin: 0,
                }}
              >
                Enjoy a perfect, stress-free wedding from the first visit to the
                final goodbyes.
              </p>
            </div>
          </div>
        </div>

        <button
          style={{
            padding: "1rem 2rem",
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#E54065",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(229, 64, 101, 0.4)",
            transition: "all 0.3s ease",
          }}
          onClick={handleGetProposal}
        >
          Get My FREE Proposal
        </button>
      </div>
    </div>
  );
};

export default GetFreeProposal;
