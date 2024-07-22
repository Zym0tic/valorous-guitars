import React from "react";
import { aboutData } from "../data";
import GetStarted from "./GetStarted";

const About = () => {
  const { items } = aboutData;

  return (
    <section className="pt-[130px] lg:pt-[170px]" name="about">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex-1 h-full xl:mt-30">
            <div className="flex flex-col items-center">
              <div className="max-w-[700px] text-accent2">
                <ul className="py-7">
                  {items.map((item, index) => {
                    const { paragraph1, paragraph2, paragraph3, paragraph4, img } = item;
                    return (
                      <div key={index}>
                        <img className="mx-auto mb-5 lg:h-[80vh]" src={img} alt="/" />
                        <div className="flex justify-center mb-[20px]">
                        <GetStarted />
                        </div>
                        <p className="mb-5">{paragraph1}</p>
                        <p className="mb-5">{paragraph2}</p>
                        <p className="mb-5">{paragraph3}</p>
                        <p className="mb-5">{paragraph4}</p>
                        <div className="flex justify-center mb-[20px]">
                        <GetStarted />
                        </div>
                      </div>
                    )
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
