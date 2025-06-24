import React from "react";
import Container from "../components/shared/Container";
import Carousel from "../components/Home/Carousel";
import FeatureTititle from "../components/Home/FeatureTititle";
import "../app.css";
import HomeProduct from "../components/Home/HomeProduct";
import HomeBestSeller from "../components/Home/HomeBestSeller";
import HomeBanner from "../components/Home/HomeBanner";

const Home = () => {
  return (
    <Container>
      {/* home carousel items  */}
      <Carousel />
      {/* products title  */}
      <FeatureTititle
        title="Biography Books"
        buttonText="All Books"
        link="/books"
      />

      {/* home products sections  */}
      <HomeProduct />

      <FeatureTititle
        title="Fantacy Books"
        buttonText="All Books"
        link="/books/categories/features"
      />
      <HomeProduct />
      {/* banner section  */}
      <HomeBanner />
      <FeatureTititle
        title="Best Sellers Books"
        buttonText=""
        link="/books/categories/features"
      />
      {/* best sell products  */}
      <HomeBestSeller />
    </Container>
  );
};

export default Home;
