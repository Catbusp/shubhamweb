import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import HarshitaAdlakha from '../../../public/images/team/HarshitaAdlakha.png'
import Satyendra from '../../../public/images/team/satyendramallik.png'
import Ajay from '../../../public/images/team/ajayadlakha.png'

function TeamSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='container mb-5'>
          <div className="onovo-heading align-center gap-bottom-40">
						<h2 className="onovo-title-2">
							<span> The Faces Behind The Perfection</span>
						</h2>
					</div>  
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className='team_member'>
            <div className='row'>
                <div className='col-lg-6 col-sm-5 '>
                    <h4>Harshita Adlakha</h4>
                    <p>Founder</p>
                    <p>“A video is the moving face of your brand, capturing more attention and driving top-of-mind awareness.”</p>
                    <div className='social_testimonials'>

                    </div>
                </div>
                <div className='col-lg-6 col-sm-5 back_person'>
                    <img src={HarshitaAdlakha.src} alt="" />
                </div>
            </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className='container-fluid team_member'>
          <div className='row'>
                <div className='col-lg-6 col-sm-5'>
                    <h4>Harshita Adlakha</h4>
                    <p>Founder</p>
                    <p>“A video is the moving face of your brand, capturing more attention and driving top-of-mind awareness.”</p>
                    <div className='social_testimonials'>

                    </div>
                </div>
                <div className='col-lg-6 col-sm-5 back_person'>
                    <img src={Ajay.src} alt="" />
                </div>
            </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className='team_member'>
            <div className='row'>
                <div className='col-lg-6 col-sm-5 '>
                    <h4>Satyendra Malik</h4>
                    <p>Founder</p>
                    <p>“A video is the moving face of your brand, capturing more attention and driving top-of-mind awareness.”</p>
                    <div className='social_testimonials'>

                    </div>
                </div>
                <div className='col-lg-6 col-sm-5 back_person'>
                    <img src={Satyendra.src} alt="" />
                </div>
            </div>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default TeamSlider;