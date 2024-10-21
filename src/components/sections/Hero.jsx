import { useState, useEffect } from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import Data from "@data/sections/hero.json";

import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'
import ScrollOut from 'scroll-out'
import Modal from "./Modal";
import subLogo from '../../../public/images/logo-main2.png'


const HeroSection = () => {
	const [full, setfull] = useState(false)
	useEffect(() => {
		Splitting({ by: 'lines' });
		ScrollOut({ targets: '[data-onovo-scroll]', once: true });

		const allWrap = document.querySelectorAll(".word");
		allWrap.forEach((item) => {
			if (!item.parentNode.classList.contains('span')) {
				let wrapper = document.createElement('span');
				wrapper.classList.add('span');
				item.parentNode.insertBefore(wrapper, item);
				wrapper.appendChild(item);
			}
		});

		const allOverlays = document.querySelectorAll("[data-onovo-overlay]");
		allOverlays.forEach((item) => {
			let overlay = document.createElement("div");
			overlay.classList.add('onovo-overlay');
			item.appendChild(overlay);
		});
	}, []);

	const handleclose = () => {
		if (full) {
			setfull(false)
			const video = document.getElementById('fullvideo');
			video.id = 'heroVideo';
			video.muted = true;
			video.removeAttribute('controls')

			const full = document.getElementById('fullscreen');
			full.id = ""



			const header1 = document.getElementById('header1');
			header1.style.display = "block"

			const close = document.getElementById('exitButton');
			close.classList.add('dnone')

			document.getElementsByTagName('html')[0].style.overflow = "auto"

		}

	}

	const handleFullScreen = () => {
		if (!full) {
			setfull(true)

			const video = document.getElementById('heroVideo');
			video.id = 'fullvideo';
			video.muted = false;
			setTimeout(() => {
				video.setAttribute('controls', '');

			}, 100);



			const full = document.getElementsByClassName('fullvid')[0];
			full.id = 'fullscreen'

			const header1 = document.getElementById('header1');
			header1.style.display = "none"


			const close = document.getElementById('exitButton');
			close.classList.remove('dnone')

			close.style.position = "absolute"
			close.style.top = "20px"
			close.style.right = "20px"
			close.style.background = "none"
			close.style.border = "none"
			close.style.color = "white"
			close.style.fontSize = "32px"
			close.style.cursor = "pointer"
			close.style.zIndex = '1001'
			close.style.outline = "none"

			document.getElementsByTagName('html')[0].style.overflow = "hidden";
		}

	};

	const [mute, setMute] = useState(false);

	const clickedMuteHeroVideo = (e) => {
		e.preventDefault();
		setMute(!mute);
	};

	const [modal, setModal] = useState(false);
	const Toggle = () => setModal(!modal);

	

	return (
		<>
			{/* Onovo Hero */}
			<section className="onovo-section onovo-hero">
				<div className="autotypecf container-fluid">
					<div className="row typing-section text-left">
						<div className="col-lg-10 col-md-10 col-sm-10">
							{/* <h6 style={}>Content Foundry</h6> */}
							<img src={subLogo.src} className="sublogo" alt="" />
							<br />
							<p className="text-black Saygoodbye">
								<span className="d-flex goodbye"> Say goodbye to</span>
									<TypeWriterEffect
										startDelay={1000}
										cursorColor="black"
										multiText={[

											"Boring Videos",
											"Dull Content",
											"Bland Frames",
											"Flat Creations",
											"Clinge Clips",
											"Mediocre Shoots",
											"Half-Baked Edits",
											"Boring Videos",
											"Dull Content",
											"Bland Frames",
											"Flat Creations",
											"Clinge Clips",
											"Mediocre Shoots",
											"Half-Baked Edits",
											"Boring Videos",
											"Dull Content",
											"Bland Frames",
											"Flat Creations",
											"Clinge Clips",
											"Mediocre Shoots",
											"Half-Baked Edits",
											"Boring Videos",
											"Dull Content",
											"Bland Frames",
											"Flat Creations",
											"Clinge Clips",
											"Mediocre Shoots",
											"Half-Baked Edits",
											"Boring Videos",
											"Dull Content",
											"Bland Frames",
											"Flat Creations",
											"Clinge Clips",
											"Mediocre Shoots",
											"Half-Baked Edits",
											"Boring Videos",
											"Dull Content",
											"Bland Frames",
											"Flat Creations",
											"Clinge Clips",
											"Mediocre Shoots",
											"Half-Baked Edits",
											"Boring Videos",
											"Dull Content",
											"Bland Frames",
											"Flat Creations",
											"Clinge Clips",
											"Mediocre Shoots",
											"Half-Baked Edits",
											"Boring Videos",
											"Dull Content",
											"Bland Frames",
											"Flat Creations",
											"Clinge Clips",
											"Mediocre Shoots",
											"Half-Baked Edits",
										]}
										multiTextDelay={1000}
										typeSpeed={150}
									/>
							</p>
						</div>
						{/* <div className="col-lg-4 col-sm-6">
							<TypeWriterEffect
								startDelay={1000}
								cursorColor="black"
								multiText={[
									 
									"Boring Videos",
									"Dull Content",
									"Bland Frames",
									"Flat Creations",
									"Clinge Clips",
									"Mediocre Shoots",
									"Half-Baked Edits",
									 
									"Boring Videos",
									"Dull Content",
									"Bland Frames",
									"Flat Creations",
									"Clinge Clips",
									"Mediocre Shoots",
									"Half-Baked Edits",
									 
									"Boring Videos",
									"Dull Content",
									"Bland Frames",
									"Flat Creations",
									"Clinge Clips",
									"Mediocre Shoots",
									"Half-Baked Edits",
									 
									"Boring Videos",
									"Dull Content",
									"Bland Frames",
									"Flat Creations",
									"Clinge Clips",
									"Mediocre Shoots",
									"Half-Baked Edits",
								]}
								multiTextDelay={1000}
								typeSpeed={150}
							/>
						</div>	 */}
					</div>
				</div>
				<div className="image fullvid" onClick={window.innerWidth<= 480? null:handleFullScreen}>
					<video autoPlay muted={!mute} loop playsInline id="heroVideo" >
						<source src={Data.video} type="video/mp4" />
					</video>
					
					<button onClick={handleclose} id="exitButton" class="exit-button dnone">✖</button>
					{/* <video src="https://www.youtube.com/watch?v=-PjM1Yb7fJo" controls autoPlay></video> */}
					{/* <div className="ovrl" style={{"opacity": "0.25"}} /> */}
				</div>
				<div className="container">
					<h2 className="title onovo-text-white" style={{ zIndex: 100000 }}>

					</h2>
					<div className="text">
						<div className="subtitle onovo-text-white">
							<div data-splitting data-onovo-scroll>
								<div dangerouslySetInnerHTML={{ __html: Data.subtitle }} />
							</div>
						</div>
					</div>
					{/* <a href="#" className={mute ? "onovo-play-btn active" : "onovo-play-btn"} onClick={(e) => clickedMuteHeroVideo(e) }> */}
					{/* <a href="#" className="clickme onovo-play-btn" onClick={() => Toggle()}>
						<span className="play-circles" />
						<span className="play-lines">
							<span />
							<span />
							<span />
							<span />
						</span>
					</a> */}

					<Modal show={modal} title="My Modal" close={Toggle} >
						This is Modal content
					</Modal>

				</div>
			</section>
		</>
	);
};

export default HeroSection;