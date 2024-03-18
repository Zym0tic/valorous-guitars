import React from 'react';

const YoutubeEmbed = ({ embedId }) => (
  <section
    className="pt-[120px] pb-[70px] lg:py-16 lg:pt-[180px] bg-dark min-h-[90vh]"
    name="videos"
  >
     <div className="flex justify-center my-5 mx-5 text-header">
      <p>Dead dogs Official Video</p>
    </div>
    <div className="video-responsive mx-5 lg:mx-40">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/2t6lhboRbMQ?si=i00LxTXQS75YEzXh"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  </section>
);

export default YoutubeEmbed;
