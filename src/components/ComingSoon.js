import React from 'react';
import { Link } from 'react-router-dom';
import GetStarted from './GetStarted';

function ComingSoon() {
  return (
    <section className="section flex pt-[200px] lg:pt-[300px] min-h-[90vh] lg:min-h-[75vh]">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="h1 text-accent text-center">COMING SOON!</h2>
        <p className="text-center">
          We are currently working to get the online shop up and running for
          you! Please check back soon! If you are interested in getting a custom
          build click the link below!
        </p>
        <div className="flex justify-center py-[30px]">
          <GetStarted />
        </div>
        <Link to="/main">
          <p className="border-b-2 border-accent font-bold font-primary uppercase text-accent  hover:border-b-2 hover:border-dark hover:text-dark transition duration-300 cursor-pointer">
            home
          </p>
        </Link>
      </div>
    </section>
  );
}

export default ComingSoon;
