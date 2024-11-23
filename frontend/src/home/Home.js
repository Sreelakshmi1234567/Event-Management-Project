import React from "react";
import Navbar from "./Navbar";
import Center from "./Center";
import Card from "./Card";
import Footer from "./Footer";
import Costomers from "./Costomers";




const Home = () => {
  return (
    <>
    {/* navbar section */}
      <div>
        <Navbar />
      </div>

      {/* center section */}

      <div>
        <Center />
      </div>

      {/* Card section */}
      <div>
        <Card />
      </div>

      {/* costomer reviews */}
      <div>
        <Costomers/>
      </div>




      {/* footer section */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
