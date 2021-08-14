import React from "react";
import { useQuery } from "@apollo/client";


const Home = () => {
  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 mb-3 p-3"></div>
        <div className="col-12 col-md-8 mb-3">
          {/* {loading ? <div>Loading...</div> : <h1>WELCOME</h1>} */}
          <h1>Welcome!</h1>
        </div>
      </div>
    </main>
  );
};

export default Home;
