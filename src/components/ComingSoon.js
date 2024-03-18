import React from 'react';
import { Link } from 'react-router-dom';

function ComingSoon() {
  return (
    <section className="section flex pt-[200px] lg:pt-[300px] min-h-[90vh] lg:min-h-[75vh]">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="h1 text-accent text-center">COMING SOON!</h2>
        <p className='pb-[60px] text-center'>We are currently working to get the online shop up and running for you! Please check back soon!</p>
        <Link to='/main'><p className='border-b-2 border-accent font-bold font-primary uppercase text-accent  hover:border-b-2 hover:border-dark hover:text-dark transition duration-300 cursor-pointer'>home</p></Link>
      </div>
    </section>
  );
}

export default ComingSoon;
