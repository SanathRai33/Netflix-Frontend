import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";
import Card from "./IntroCards";
import poster1 from "../Images/Main/Poster1.webp";
import poster2 from "../Images/Main/Poster2.webp";
import poster3 from "../Images/Main/Poster3.webp";
import poster4 from "../Images/Main/Poster4.webp";
import poster5 from "../Images/Main/Poster5.webp";
import poster6 from "../Images/Main/Poster6.webp";
import poster7 from "../Images/Main/Poster7.webp";
import poster8 from "../Images/Main/Poster8.webp";
import poster9 from "../Images/Main/Poster9.webp";
import poster0 from "../Images/Main/Poster0.webp";
import box1 from '../Images/fullTV.png';
import box2 from '../Images/download.png';
import box3 from '../Images/telescope.png';
import box4 from '../Images/profile.png'

const Login = (number, image) => {

  const navigate = useNavigate();

  const faqData = [
    { question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.",
    },
    { question: "How much does Netflix cost?",
      answer: "Plans range from ₹149 to ₹649 per month, depending on the features and quality.",
    },
    { question: "Where can I watch?",
      answer: "You can watch Netflix on any internet-connected device that offers the Netflix app.",
    },
    { question: "How do I cancel?",
      answer: "You can cancel your membership at any time through your account settings.",
    },
    { question: "What can I watch on Netflix?",
      answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, and more.",
    },
    { question: "Is Netflix good for kids?",
      answer: "Netflix offers a dedicated Kids experience to ensure safe content for younger viewers.",
    },
  ];

  const boxData = [
    { heading: 'Enjoy on your TV', content: ' watch on smart TVs, PlayStations, Xbox, Chromecast, Apple TV, Blue-ray players and more.', img: box1 },
    { heading: ' Download shows to watch offline', content: 'Save your favourites easily and always have something to watch.', img: box2 },
    { heading: 'Watch everywhere', content: ' Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.', img: box3 },
    { heading: 'Create profile for kids', content: 'Send kids on adventures with their favourite characters in a space made just for them free with your membership', img: box4 },
  ]

  const movieList = [
    { name: poster1, region: "global", type: "webseries" },
    { name: poster2, region: "global", type: "movies" },
    { name: poster3, region: "ind", type: "movies" },
    { name: poster4, region: "ind", type: "webseries" },
    { name: poster5, region: "ind", type: "movies" },
    { name: poster6, region: "ind", type: "movies" },
    { name: poster7, region: "ind", type: "movies" },
    { name: poster8, region: "global", type: "webseries" },
    { name: poster9, region: "ind", type: "movies" },
    { name: poster0, region: "ind", type: "movies" },
  ];

  const [region, setRegion] = useState("all");
  const [type, setType] = useState("all");

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const filteredCards =
    region === "all"
      ? movieList
      : movieList.filter((card) => card.region === region);

  const newMovies =
    type === "all"
      ? filteredCards
      : filteredCards.filter((card) => card.type === type);

  const handleNavigate = () => navigate("/home");
  
  const signIn = () => navigate("/SignIn");


  return (
    <div className="Login">
      <div className="header">
        <div className="head1">
          <div className="logo">
            <div className="img"></div>
          </div>
          <select className="lan">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
          <div className="sign">
            <button onClick={signIn}>Sign In</button>
          </div>
        </div>
        <div className="head2">
          <h1>Unlimited movies,</h1>
          <h1> TV shows and more</h1>
          <h5>Start at 199$. Cancel at any time.</h5>
          <h4>
            Ready to watch? Enter your email to create or restart your
            membership
          </h4>
        </div>
        <div className="head3">
          <input type="email" placeholder="Email address" className="email" required />
          <button onClick={handleNavigate}>Get Started</button>
        </div>
      </div>
      <div className="body">
        <div className="body1">
          <div className="font">
            <h2>Trending Now</h2>
            <select className="reg" value={region} onChange={handleRegionChange} >
              <option value="all">All</option>
              <option value="ind">India</option>
              <option value="global">Global</option>
            </select>
            <select className="type" value={type} onChange={handleTypeChange}>
              <option value="all">All</option>
              <option value="movies">Movies</option>
              <option value="webseries">Web series</option>
            </select>
          </div>
          <div className="movieCards">
            {newMovies.map((movies, index) => {
              return (
                <div className="mcard" key={index}>
                  <Card number={index + 1} image={movies.name} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="body2">
          <div className="font">
            <h2>More reasone to join</h2>
          </div>
          <div className="textBoxes">
            {
              boxData.map((box, ind) =>{
                return(
            <div className="textBox">
              <h3>{box.heading}</h3>
              <p>{box.content}</p>
              <p className="txtimg"> <img src={box.img} alt={ind} /></p>
            </div>)
              })
            }
          </div>
        </div>
        <div className="body3">
          <div className="font">
            <h2>Frequently Asked Questions</h2>
          </div>
          {/* ------------------------------------------------------------------------------------------------------------- */}
          <div className="fullBox accordion" id="faqAccordion">
            {faqData.map((item, index) => (
              <div className="eachBox accordion-item" key={index}>
                <h2 className="boxHead accordion-header" id={`heading${index}`}>
                  <button
                    className="boxBody accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse${index}`}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="boxBody accordion-collapse collapse"
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ------------------------------------------------------------------------------------------------------------ */}
        </div>
      </div>
      <div className="footer">
        <div className="foot1">
          <center>
            <h4> Ready to watch? Enter your email to create or restart your
              membership
            </h4>
            <input
              type="email"
              placeholder="Email address"
              className="email"
              onClick={"./App.js"}
              required
            />
            <button>Get Started </button>
            {/* &#x279E;*/}
          </center>
        </div>
        <div className="foot2">
          <h6>
            Questions? Call <a href="/">000-800-919-1694</a>
          </h6>
          <div className="links">
            <div className="link">
              <a href="/">FAQ</a> <a href="/">Help Centre</a>
              <a href="/">Account</a>
              <a href="/">Media Centre</a>
            </div>
            <div className="link">
              <a href="/">Investor Relations</a> <a href="/">Jobs</a>{" "}
              <a href="/">Way to Watch</a>
              <a href="/">Terms of Use</a>
            </div>
            <div className="link">
              <a href="/">Privacy</a> <a href="/">Coockies Preferences</a>
              <a href="/">Corparate Information</a>
              <a href="/">Contact Us</a>
            </div>
            <div className="link">
              <a href="/">speed Test</a> <a href="/">Legal Notices</a>
              <a href="/">Only on Netflix</a>
            </div>
          </div>
          <select className="lan">
            <option value="English">English</option> {/*中文*/}
            <option value="Hindi">Hindi</option>
          </select>
          <h5>Netflix India</h5>
        </div>
      </div>
    </div>
  );
};

export default Login;
