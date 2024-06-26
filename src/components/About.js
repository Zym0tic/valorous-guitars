import React from "react";
import { aboutData } from "../data";

const About = () => {
  const { items } = aboutData;

  return (
    <section className="pt-[130px] lg:pt-[170px]" name="about">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex-1 h-full xl:mt-30">
            <div className="flex flex-col items-center">
              <div className="max-w-[700px] text-accent">
                <ul className="py-7">
                  {items.map((item, index) => {
                    const { subtitle, subtitle1, subtitle2, subtitle3, img } = item;
                    return (
                      <div key={index}>
                        <img className="mx-auto mb-5 lg:h-[80vh]" src={img} alt="/" />
                        <p className="mb-5">{subtitle}</p>
                        <p className="mb-5">{subtitle1}</p>
                        <p className="mb-5">{subtitle2}</p>
                        <p className="mb-5">{subtitle3}</p>
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
