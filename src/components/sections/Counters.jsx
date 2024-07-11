import Data from "@data/sections/counters.json";
import Data2 from "@data/app.json";
import CountUp from 'react-countup';
import {ReactComponent as Zero} from '../../../public/images/stats/0.svg'
import UserSatisfaction from './svgs/engage.png'

const CountersSection = () => {
  return (
    <>
      {/* Onovo Numbers */}
		<section className="onovo-section gap-top-40 gap-bottom-40">
			<div className="container">
				{/* Numbers items */}
				<div className="row">
					{Data2.Stats.gallery.map((item, key) => (
					<div key={`counters-item-${key}`} className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-center">
						<div className="onovo-counter align-center">
							<div className="stats-img js-counter">
								<img src={item.image} alt={item.alt} className="gap-top-40 gap-bottom-40" />
							</div>
							<div className="text-uppercase">
								<h5>{item.title}</h5>
							</div>

						</div>
					</div>
					))}
					
					{/* {Data.items.map((item, key) => (
						<div key={`counters-item-${key}`} className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-center">
							<div className="onovo-counter">
								<div className="num onovo-text-white js-counter">
									<CountUp end={item.value} duration={6} enableScrollSpy={true} scrollSpyOnce={true} />
								</div>
								{item.after != '' &&
								<div className="num-after onovo-text-white">{item.after}</div>
								}
								<div className="label">{item.label}</div>
							</div>
						</div>
						))} */}
						{/* {console.log(Data2.Stats.gallery)} */}
					
				</div>
				
			</div>
		</section>
    </>
  );
};

export default CountersSection;