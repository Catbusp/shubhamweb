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
            <div className="scroller" data-direction="right" data-speed="slow">
                <div className="scroller__inner hover_filter top_slider">
                    <img src="/images/newclients/ace.png" alt="" />
                    <img src="/images/newclients/bbs_svg.png" alt="" />
                    <img src="/images/newclients/coa.png" alt="" />
                    <img src="/images/newclients/gjepc.png" alt="" />
                    <img src="/images/newclients/incredible.png" alt="" />
                    <img src="/images/newclients/luxebook.png" alt="" />
                    <img src="/images/newclients/ministry.png" alt="" />
                    <img src="/images/newclients/whiteSafari.png" alt="" />
                    <img src="/images/newclients/uno.png" alt="" />
                </div>
            </div>
		</section>
      </>
    );
};

export default Slidertest;