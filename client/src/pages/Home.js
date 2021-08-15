import React from "react";
import { useQuery } from "@apollo/client";
import LandingPage from "../components/landingpage/landingpage"


const Home = () => {
  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 mb-3 p-3"></div>
        <div className="col-12 col-md-8 mb-3">
          <h1>Welcome! </h1>
          <LandingPage />
        </div>
      </div>
    </main>
  );
};

export default Home;
