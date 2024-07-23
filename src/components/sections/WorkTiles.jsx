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
      alt: "",
      Tooltip: "https://www.youtube.com/embed/ZB04bcqIKf8?autoplay=1&loop=1&mute=1&si=27oAX7vd74aGJJGQ",
    },
    {
      src: Corporate.src,
      alt: "",
      Tooltip: "https://www.youtube.com/embed/ZB04bcqIKf8?autoplay=1&loop=1&mute=1&si=27oAX7vd74aGJJGQ",
    },
    {
      src: Education.src,
      alt: "",
      Tooltip: "https://www.youtube.com/embed/ZB04bcqIKf8?autoplay=1&loop=1&mute=1&si=27oAX7vd74aGJJGQ",
    },
    {
      src: Frame.src,
      alt: "",
      Tooltip: "https://www.youtube.com/embed/ZB04bcqIKf8?autoplay=1&loop=1&mute=1&si=27oAX7vd74aGJJGQ",
    },
    {
      src: Carshoot.src,
      alt: "",
      Tooltip: "https://www.youtube.com/embed/ZB04bcqIKf8?autoplay=1&loop=1&mute=1&si=27oAX7vd74aGJJGQ",
    },
    {
      src: Audio.src,
      alt: "",
      Tooltip: "https://www.youtube.com/embed/ZB04bcqIKf8?autoplay=1&loop=1&mute=1&si=27oAX7vd74aGJJGQ",
    },
    {
      src: SocialMedia.src,
      alt: "",
      Tooltip: "https://www.youtube.com/embed/ZB04bcqIKf8?autoplay=1&loop=1&mute=1&si=27oAX7vd74aGJJGQ",
    },
    {
      src: Techno.src,
      alt: "",
      Tooltip: "https://www.youtube.com/embed/ZB04bcqIKf8?autoplay=1&loop=1&mute=1&si=27oAX7vd74aGJJGQ",
    },
    {
      src: Digital.src,
      alt: "",
      Tooltip: "https://www.youtube.com/embed/ZB04bcqIKf8?autoplay=1&loop=1&mute=1&si=27oAX7vd74aGJJGQ",
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
                      <div className='text-custome'>{e.Tooltip}</div>
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
