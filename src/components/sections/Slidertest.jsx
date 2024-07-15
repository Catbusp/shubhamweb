import React, { useEffect } from 'react';

const Slidertest = () => {
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");
    
        // If a user hasn't opted in for reduced motion, then we add the animation
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          addAnimation();
        }
    
        function addAnimation() {
          scrollers.forEach((scroller) => {
            // add data-animated="true" to every `.scroller` on the page
            scroller.setAttribute("data-animated", true);
    
            // Make an array from the elements within `.scroller-inner`
            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);
    
            // For each item in the array, clone it
            // add aria-hidden to it
            // add it into the `.scroller-inner`
            scrollerContent.forEach((item) => {
              const duplicatedItem = item.cloneNode(true);
              duplicatedItem.setAttribute("aria-hidden", true);
              scrollerInner.appendChild(duplicatedItem);
            });
          });
        }
      }, []);

    return (
      <>
        {/* Onovo Awards */}
		<section className="onovo-section">
            <div class="scroller" data-direction="right" data-speed="slow">
                <div className="scroller__inner hover_filter top_slider">
                    <img src="/images/clients/client_logo1.png" alt="" />
                    <img src="/images/clients/client_logo2.png" alt="" />
                    <img src="/images/clients/client_logo4.png" alt="" />
                    <img src="/images/clients/client_logo6.png" alt="" />
                    <img src="/images/clients/client_logo9.png" alt="" />
                    <img src="/images/clients/client_logo11.png" alt="" />
                    <img src="/images/clients/client_logo14.png" alt="" />
                    <img src="/images/clients/client_logo19.png" alt="" />
                    <img src="/images/clients/client_logo21.png" alt="" />
                    <img src="/images/clients/client_logo22.png" alt="" />
                    <img src="/images/clients/client_logo10.png" alt="" />
                    <img src="/images/clients/client_logo28.png" alt="" />
                    <img src="/images/clients/client_logo33.png" alt="" />
                    <img src="/images/clients/client_logo35.png" alt="" />
                </div>
            </div>
		</section>
      </>
    );
};

export default Slidertest;