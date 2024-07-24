import React, { useState } from 'react';
import { aboutData } from '../data';
import GetStarted from './GetStarted';

const About = () => {
  const { items } = aboutData;
  
  // Initialize state for image handling
  const [activeImg, setActiveImg] = useState({});

  // Function to handle image change on touch or hover
  const handleImageChange = (imgKey, newImg) => {
    setActiveImg(prevState => ({ ...prevState, [imgKey]: newImg }));
  };

  // Function to reset image on touch end or hover out
  const resetImage = (imgKey, originalImg) => {
    setActiveImg(prevState => ({ ...prevState, [imgKey]: originalImg }));
  };

  return (
    <section className="pt-[130px] lg:pt-[170px]" name="about">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex-1 h-full xl:mt-30">
            <div className="flex flex-col items-center">
              <div className="max-w-[700px] text-accent2">
                <ul className="py-7">
                  {items.map((item, index) => {
                    const {
                      paragraph1,
                      paragraph2,
                      paragraph3,
                      paragraph4,
                      img,
                      img1,
                      img2,
                      img3,
                      img4,
                      img5,
                      img6,
                      img7,
                      img8,
                      img9,
                      img10,
                      img11,
                    } = item;

                    return (
                      <div key={index}>
                        <img
                          className="mx-auto mb-5 lg:h-[80vh]"
                          src={img}
                          alt="/"
                        />
                        <div className="flex justify-center my-[30px] lg:my-[100px]">
                          <GetStarted />
                        </div>
                        <p className="mb-5">{paragraph1}</p>
                        <p className="mb-5">{paragraph2}</p>
                        <p className="mb-5">{paragraph3}</p>
                        <p className="mb-5">{paragraph4}</p>
                        <div id='guitars' className="mt-[40px] uppercase grid grid-cols-1 lg:grid-cols-3 gap-5">
                          <div
                            className="text-center relative"
                            onTouchStart={() => handleImageChange('img1', img7)}
                            onTouchEnd={() => resetImage('img1', img1)}
                            onMouseEnter={() => handleImageChange('img1', img7)}
                            onMouseLeave={() => resetImage('img1', img1)}
                          >
                            <p className="italic">Stormbringer</p>
                            <img
                              className="mx-auto mb-5"
                              src={activeImg['img1'] || img1}
                              alt="/"
                            />
                          </div>
                          <div
                            className="text-center relative"
                            onTouchStart={() => handleImageChange('img2', img8)}
                            onTouchEnd={() => resetImage('img2', img2)}
                            onMouseEnter={() => handleImageChange('img2', img8)}
                            onMouseLeave={() => resetImage('img2', img2)}
                          >
                            <p className="italic">Warmachine</p>
                            <img
                              className="mx-auto mb-5"
                              src={activeImg['img2'] || img2}
                              alt="/"
                            />
                          </div>
                          <div className="text-center">
                            <p className="italic">Morgul Blade</p>
                            <img
                              className="mx-auto mb-5"
                              src={img3}
                              alt="/"
                            />
                          </div>
                          <div
                            className="text-center relative"
                            onTouchStart={() => handleImageChange('img4', img9)}
                            onTouchEnd={() => resetImage('img4', img4)}
                            onMouseEnter={() => handleImageChange('img4', img9)}
                            onMouseLeave={() => resetImage('img4', img4)}
                          >
                            <p className="italic">Death Dealer</p>
                            <img
                              className="mx-auto mb-5"
                              src={activeImg['img4'] || img4}
                              alt="/"
                            />
                          </div>
                          <div
                            className="text-center relative"
                            onTouchStart={() => handleImageChange('img5', img10)}
                            onTouchEnd={() => resetImage('img5', img5)}
                            onMouseEnter={() => handleImageChange('img5', img10)}
                            onMouseLeave={() => resetImage('img5', img5)}
                          >
                            <p className="italic">Carrionbird</p>
                            <img
                              className="mx-auto mb-5"
                              src={activeImg['img5'] || img5}
                              alt="/"
                            />
                          </div>
                          <div
                            className="text-center relative"
                            onTouchStart={() => handleImageChange('img6', img11)}
                            onTouchEnd={() => resetImage('img6', img6)}
                            onMouseEnter={() => handleImageChange('img6', img11)}
                            onMouseLeave={() => resetImage('img6', img6)}
                          >
                            <p className="italic">Stormbringer</p>
                            <img
                              className="mx-auto mb-5"
                              src={activeImg['img6'] || img6}
                              alt="/"
                            />
                          </div>
                        </div>
                        <div className="flex justify-center mt-[60px] lg:mt-[100px]">
                          <GetStarted />
                        </div>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
