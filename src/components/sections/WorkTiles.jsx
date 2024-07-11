import Data2 from "@data/app.json";
import ThreeD from './svgs/3d.png'
import Corporate from './svgs/Corporatefilms.png'
import Education from './svgs/Educational.png'
import Frame from './svgs/Frame.png'
import Carshoot from './svgs/carshoot.png'
import Audio from './svgs/audio.png'
import Techno from './svgs/technologo.png'
import SocialMedia from './svgs/social_media.png'
import Digital from './svgs/digital.png'

const WorkTiles = () => {
  return (
    <>
      {/* Onovo Numbers */}
	  {/* {Data2.Company.brands.map((e,i)=>{
			<img src={e.image} alt={e.alt} className={e.classn} />
		})} */}
	  	<section className="onovo-section">
				<div className="container-fluid">
					<div className="row d-flex">
						<div className="col-xs-12 col-sm-12 col-md-9 col-lg-4 p-0">
							<img src={ThreeD.src} alt="" />
						</div>
						<div className="col-xs-12 col-sm-12 col-md-9 col-lg-4 p-0">
							<img src={Corporate.src} alt="" />
						</div>
						<div className="col-xs-12 col-sm-12 col-md-9 col-lg-4 p-0">
							<img src={Education.src} alt="" />
						</div>
						<div className="col-xs-12 col-sm-12 col-md-9 col-lg-4 p-0">
							<img src={Frame.src} alt="" />
						</div>
						<div className="col-xs-12 col-sm-12 col-md-9 col-lg-4 p-0">
							<img src={Carshoot.src} alt="" />
						</div>
						<div className="col-xs-12 col-sm-12 col-md-9 col-lg-4 p-0">
							<img src={Audio.src} alt="" />
						</div>
						<div className="col-xs-12 col-sm-12 col-md-9 col-lg-4 p-0">
							<img src={SocialMedia.src} alt="" />
						</div>
						<div className="col-xs-12 col-sm-12 col-md-9 col-lg-4 p-0">
							<img src={Techno.src} alt="" />
						</div>
						<div className="col-xs-12 col-sm-12 col-md-9 col-lg-4 p-0">
							<img src={Digital.src} alt="" />
						</div>
					</div>
				</div>
		</section>
    </>
  );
};

export default WorkTiles;