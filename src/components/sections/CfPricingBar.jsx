import Data from "@data/sections/pricing.json";
import Data2 from "@data/sections/animation.json";
import Link from "next/link";

const CFPricingBar = ( { bg, hiddenHeading } ) => {
    return (
      <>
        {/* Onovo Pricing */}
        <section className={`onovo-section onovo-section-${bg} gap-bottom-140`}>
          <div className="container">

            {hiddenHeading == undefined &&
            <>
              {/* Heading */}
              <div className="onovo-heading gap-bottom-40">
                <div className="onovo-subtitle-1">
                  <span>{Data.subtitle}</span>
                </div>
                <h2 className="onovo-title-2">
                  <span dangerouslySetInnerHTML={{__html: Data.title}} />
                </h2>
              </div>
            </>
            }




            {/* Pricing items */}
            <div className="onovo-heading gap-bottom-80 ">
                {/* <div className="onovo-subtitle-1 text-center">
                  <span className="text-center">{Data.subtitle}</span>
                </div> */}
                <h2 className="onovo-title-2">
                  <h3 className="text-center">Live Action</h3>
                </h2>
                <p className="text-center text-capitalize w-70 m-auto">Bring your vision to life with tailored live-action content packages designed for any project size.</p>
              </div>
            <div className="row gap-row">

              {Data.items.map((item, key) => (
              <div key={`pricing-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div className="onovo-pricing">
                  <div className={item.active == 1 ? "onovo-pricing-item active--default": "onovo-pricing-item"}>
                    { item.active == 1 &&
                    <div className="pricing--badge onovo-text-white">
                      <span>Recommended</span>
                    </div>
                    }
                    <div className="title">
                      <div className="name">
                        <span>{item.title}</span>
                      </div>
                      <div className="subname">
                        <span>{item.subtitle}</span>
                      </div>
                      <div className="price">
                        <span>{item.price}</span>
                      </div>
                    </div>
                    <div className="desc">
                      <div className="pricing--overlay onovo-hover-3 onovo-hover-black" />
                      <div className="image onovo-text-white">
                        <i aria-hidden="true" className={item.icon}></i>
                      </div>
                      <div className="list">
                        <div>
                          <ul>
                            {item.list.map((element, element_key) => (
                            <li key={`pricinglist${key}-item-${element_key}`} style={{"textDecoration": element.included == 0 ? "line-through" : "none"}}>
                              <i className="far fa-check-square" />{element.label}
                            </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <Link className="onovo-btn onovo-hover-btn btn--border btn--full btn--color" href={item.button.link}>
                        <span>{item.button.label}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>


            <div className="onovo-heading gap-bottom-60 gap-top-100">
                {/* <div className="onovo-subtitle-1 text-center">
                  <span className="text-center">{Data.subtitle}</span>
                </div> */}
                <h2 className="onovo-title-2">
                  <h3 className="text-center">Animation</h3>
                </h2>
                <p className="text-center text-capitalize w-70 m-auto">Transform ideas into engaging animations with custom packages for all your creative projects.</p>

              </div>



            {/*Animation pAcks*/}
            <div className="row gap-row">
            {Data2.items.map((item, key) => (
            <div key={`pricing-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div className="onovo-pricing">
                <div className={item.active == 1 ? "onovo-pricing-item active--default": "onovo-pricing-item"}>
                  { item.active == 1 &&
                  <div className="pricing--badge onovo-text-white">
                    <span>Recommended</span>
                  </div>
                  }
                  <div className="title">
                    <div className="name">
                      <span>{item.title}</span>
                    </div>
                    <div className="subname">
                      <span>{item.subtitle}</span>
                    </div>
                    <div className="price">
                      <span>{item.price}</span>
                    </div>
                  </div>
                  <div className="desc">
                    <div className="pricing--overlay onovo-hover-3 onovo-hover-black" />
                    <div className="image onovo-text-white">
                      <i aria-hidden="true" className={item.icon}></i>
                    </div>
                    <div className="list">
                      <div>
                        <ul>
                          {item.list.map((element, element_key) => (
                          <li key={`pricinglist${key}-item-${element_key}`} style={{"textDecoration": element.included == 0 ? "line-through" : "none"}}>
                            <i className="far fa-check-square" />{element.label}
                          </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Link className="onovo-btn onovo-hover-btn btn--border btn--full btn--color" href={item.button.link}>
                      <span>{item.button.label}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            ))}
            </div>
          </div>
        </section>
    </>
    );
};

export default CFPricingBar;