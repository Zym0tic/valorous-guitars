import React from 'react';
import { partnersData } from '../data';

const { title, images } = partnersData;

function Partners() {
  return (
    <div className='mb-20 container mx-auto'>
      <h2 className="text-2xl font-bold mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {images && images.map((item, index) => (
          <React.Fragment key={index}>
            {item.kahler && (
              <img
                className="mx-auto mb-5 h-24 rounded-lg"
                src={item.kahler}
                alt="Kahler"
              />
            )}
            {item.hipshot && (
              <img
                className="mx-auto mb-5 h-24 rounded-lg"
                src={item.hipshot}
                alt="Hipshot"
              />
            )}
            {item.bareknuckle && (
              <img
                className="mx-auto mb-5 h-24 rounded-lg"
                src={item.bareknuckle}
                alt="Bareknuckle"
              />
            )}
            {item.emg && (
              <img
                className="mx-auto mb-5 h-24 rounded-lg"
                src={item.emg}
                alt="EMG"
              />
            )}
            {item.arcana && (
              <img
                className="mx-auto mb-5 h-24 rounded-lg"
                src={item.arcana}
                alt="Arcana"
              />
            )}
            {item.musicnomad && (
              <img
                className="mx-auto mb-5 h-24 rounded-lg"
                src={item.musicnomad}
                alt="MusicNomad"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Partners;

