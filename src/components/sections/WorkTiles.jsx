import { useState } from "react";
import ThreeD from "./svgs/3d.png";
import Corporate from "./svgs/Corporatefilms.png";
import Education from "./svgs/Educational.png";
import Frame from "./svgs/Frame.png";
import Carshoot from "./svgs/carshoot.png";
import Audio from "./svgs/audio.png";
import Techno from "./svgs/technologo.png";
import SocialMedia from "./svgs/social_media.png";
import Digital from "./svgs/digital.png";
import ModalWorkTiles from "./ModalWorkTiles";

const WorkTiles = () => {
  const [modal, setModal] = useState(false);
  const [src, setSrc] = useState("");

  const Toggle = () => setModal(!modal);
  const handleClick = (data) => {
    setSrc(data);
    setModal(true);
  };

  const Card = [
    {
      src: ThreeD.src,
      alt: "Incredible India | Incredible Tigers",
      Tooltip: "https://www.youtube.com/embed/we7Wi6mAWHA?autoplay=1&loop=1&mute=1&si=B4ySm20sYaNsrXsx",
    },
    {
      src: Corporate.src,
      alt: "Gem and Jewellary Export Council (India) TVC / Docufilm",
      Tooltip: "https://www.youtube.com/embed/5OxSXKWXgUs?autoplay=1&loop=1&mute=1&si=TRUkb9OOo-fvqCBu",
    },
    
    {
      src: Education.src,
      alt: "Ring Binder",
      Tooltip: "https://www.youtube.com/embed/uqQ7uaAs_Vc?autoplay=1&loop=1&mute=1&si=ppsjFYqi38Kn7z7i",
    },
    {
      src: Frame.src,
      alt: "Techno go Spark",
      Tooltip: "https://www.youtube.com/embed/sV61LynzMWE?autoplay=1&loop=1&mute=1&si=RspBQNWKvfTSzXBj",
    },
    {
      src: Carshoot.src,
      alt: "Trip Shoot",
      Tooltip: "https://www.youtube.com/embed/CJPSyWqzt9Y?autoplay=1&loop=1&mute=1&si=3rfh9bPyuOhue76V",
    },
    {
      src: Audio.src,
      alt: "Techno Hipods H2",
      Tooltip: "https://www.youtube.com/embed/q_uLkYrwqW4?autoplay=1&loop=1&mute=1&si=-9vo630vqnh9iLbX",
    },
    {
      src: SocialMedia.src,
      alt: "Uno Minda Multi Media",
      Tooltip: "https://www.youtube.com/embed/9ejZpXeAOJ4?autoplay=1&loop=1&mute=1&si=VQo2HggDpWqppY9d",
    },
    {
      src: Techno.src,
      alt: "Techno Spark Launch",
      Tooltip: "https://www.youtube.com/embed/ZB04bcqIKf8?autoplay=1&loop=1&mute=1&si=pXbdnJK7uRYao6BA",
    },
    {
      src: Digital.src,
      alt: "AV Explainer",
      Tooltip: "https://www.youtube.com/embed/A4uxqoMIumM?autoplay=1&loop=1&mute=1&si=P2DJiIHyXcv6p5v9",
    },
  ];
  return (
    <>
     
      <section className='onovo-section'>
        <div className='container-fluid'>
          <div className='row d-flex'>
            {Card.map((e) => {
              return (
                <div className='col-xs-12 col-sm-12 col-md-9 col-lg-4 p-0 ' key={e}>
                  <div className='container-custome'>
                    <img
                      src={e.src}
                      alt=''
                      onClick={() => {
                        handleClick(e.Tooltip);
                      }}
                      className='image-custome'
                    />
                    <div
                      className='overlay'
                      onClick={() => {
                        handleClick(e.Tooltip);
                      }}
                    >
                      <div className='text-custome'>{e.alt}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <ModalWorkTiles show={modal} close={Toggle} Src={src} />
      </section>
    </>
  );
};

export default WorkTiles;
