import React, { useEffect } from 'react';

const WorkSlider = () => {
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
		<section className="onovo-section gap-bottom-140">
            <div class="scroller" data-direction="left" data-speed="slow">
              <a href='/ourwork'>
                  <div class="scroller__inner hover_filter2 workslider">
                      <img src="/images/work/3d.png" alt="" />
                      <img src="/images/work/audio.png" alt="" />
                      <img src="/images/work/Corporatefilms.png" alt="" />
                      <img src="/images/work/Educational.png" alt="" />
                      <img src="/images/work/Frame.png" alt="" />
                      <img src="/images/work/technologo.png" alt="" />
                      <img src="/images/work/social_media.png" alt="" />
                  </div>
                </a>
            </div>
		</section>
      </>
    );
};

export default WorkSlider;