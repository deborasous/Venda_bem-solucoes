import React from "react";

//import

//import components
import Advantages from "../../components/advantages/Advantages";
import Header from "../../components/header/Header";

//import sass
import "./Home.sass";

const Home = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <Advantages />
        <section className='sections'>
          <h2>Esta é a home</h2>
          <div>
            <p>Aqui vai para produtos</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
