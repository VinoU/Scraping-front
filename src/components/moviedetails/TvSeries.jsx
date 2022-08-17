import React from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const TvSeries = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const all = location.state.alldata;
  console.log("8888888888888", all);
  return (
    <section
      className="tv-series-area tv-series-bg"
      style={{ backgroundImage: 'url("../img/bg/tv_series_bg02.jpg")' }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-50">
              <span className="sub-title">Best TV Series</span>
              <h2 className="title">World Best TV Series</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {all.map((elem) => {
            // const {id,image,title,date,quality,duration,ratings} = elem;
            const { id, poster, title, year, genres, runtime } = elem;
            const image = "./poster/" + poster;
            return (
              <motion.div className="col-xl-3 col-lg-4 col-sm-6" key={id}>
                <div className="movie-item mb-50">
                  <motion.div className="movie-poster">
                    <a
                      onClick={() => {
                        navigate("/movie-details", {
                          state: { onedata: elem, alldata: all },
                        });
                      }}
                    >
                      <img src={image} alt="" />
                    </a>
                  </motion.div>
                  <div className="movie-content">
                    <div className="top">
                      <h5 className="title">
                        <Link
                          to={{
                            pathname: "/movie-details",
                            state: all,
                          }}
                        >
                          {title}
                        </Link>
                      </h5>
                      <span className="date">{year}</span>
                    </div>
                    <div className="bottom">
                      <ul>
                        <li>
                          <span className="quality">{genres}</span>
                        </li>
                        <li>
                          <span className="duration">
                            <i className="far fa-clock" /> {runtime}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TvSeries;
