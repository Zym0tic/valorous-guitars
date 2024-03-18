import React from 'react';

const ModalContent = ({ track }) => {
  const {
    songtitle,
    writer,
    recordingEng,
    masteringEng,
    vocals,
    guitar,
    percussion,
    bass,
    keys,
    accordion,
    arrangements,
    composers,
    cello,
    whistle,
    studio,
    label,
  } = track;

  return (
    <div className="w-100">
      <div className="text-dark">
        <p className="pb-10 text-accent font-bold flex md:justify-center">{songtitle}</p>
        {writer && <p>Written by: {writer}</p>}
        {recordingEng && <p>Recording Engineer: {recordingEng}</p>}
        {masteringEng && <p>Mastering Engineer: {masteringEng}</p>}
        {vocals && <p>Vocals: {vocals}</p>}
        {guitar && <p>Guitar: {guitar}</p>}
        {bass && <p>Bass: {bass}</p>}
        {keys && <p>Keys: {keys}</p>}
        {percussion && <p>Percussion: {percussion}</p>}
        {accordion && <p>Accordion: {accordion}</p>}
        {arrangements && <p>Arrangements: {arrangements}</p>}
        {composers && <p>Composers: {composers}</p>}
        {cello && <p>Cello: {cello}</p>}
        {whistle && <p>Whistle: {whistle}</p>}
        {studio && <p>Studio: {studio}</p>}
        {label && <p>Label: {label}</p>}
      </div>
    </div>
  );
};

export default ModalContent;
