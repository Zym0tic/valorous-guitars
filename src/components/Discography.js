import React, { useState } from 'react';
import { discographyData } from '../data';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import ModalContent from './ModalContent';
import { FaSpotify } from 'react-icons/fa';

function Discography() {
  const [open, setOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleTrackClick = (track) => {
    setSelectedTrack(track);
    setOpen(true);
  };

  const { items } = discographyData;

  return (
    <section className="pt-[130px] lg:pt-[170px] lg:py-16 bg-dark" name="about">
      <Modal open={open} onClose={() => setOpen(false)}>
        {selectedTrack && <ModalContent track={selectedTrack} />}
      </Modal>
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="flex-1 h-full xl:mt-30">
            <div className="flex flex-col items-center">
              <div className="max-w-[700px] text-header">
                <ul className="py-7">
                  {items.map((item, index) => {
                    const { title, img, tracks } = item;
                    return (
                      <div className="mb-12" key={index}>
                        <img className="mb-5" src={img} alt="/" />
                        <p className="font-bold mb-5 text-center">{title}</p>
                        <p className="mb-5">Tracklist:</p>
                        <ul>
                          {tracks.map((track, index) => (
                            <div
                              key={index}
                              className="flex justify-between items-center mb-5"
                            >
                              <div className="flex items-center">
                                <FaSpotify className="mr-2" />
                                <a
                                  href={track.href}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  className="cursor-pointer"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open(track.href);
                                  }}
                                >
                                  {track.songtitle}
                                </a>
                              </div>
                              <button
                                className="hover:border-b-2 hover:border-header transition duration-300 cursor-pointer"
                                onClick={() => handleTrackClick(track)}
                              >
                                Debts
                              </button>
                            </div>
                          ))}
                        </ul>
                        <Link
                          to="../tabs"
                          className="underline hover:border-b-2 hover:border-dark transition duration-300 cursor-pointer"
                        >
                          Click to view music tabs
                        </Link>
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
}

export default Discography;
