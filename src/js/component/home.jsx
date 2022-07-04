import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import CardGroup from "./cardgroup";

//create your first component
const Home = () => {

	let cards = [
		{ imgSrc: "img/1rafoto.jpg", imgAlt: "photo by Leonardo Yip", title: "Pan playing the flute", content: "Have you ever felt like earth and yourself are one? Have you ever felt the rythm of Gaia trembling through your soul?", buttonUrl: "https://unsplash.com/@yipleonardo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" },
		{ imgSrc: "img/2dafoto.jpg", imgAlt: "photo by Roman Raizen", title: "Blinded by life", content: "You know how falcons are trained? Their eyes are sewn shut. Blinded temporarily they suffer the whims of their god patiently. Until thei will is submerge and they learn to serve.", buttonUrl: "https://unsplash.com/@raizen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" },
		{ imgSrc: "img/3rafoto.jpg", imgAlt: "photo from Freestocks", title: "Worship", content: "I am God and there is no other aside from me. With every awaken, there is enlightment. My light merged with darkness; making darkness to shine in beauty and strength. This is the fire of life, and my breath gave the smoke.", buttonUrl: "https://unsplash.com/@freestocks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" },
		{ imgSrc: "img/4tafoto.jpg", imgAlt: "photo by Kevin Bosc", title: "The Cabin in the Woods", content: "Nightmares are just made of the sands of dreams. Until you find the sands shaping reality. When you face those ethereal realities you can run, but you cannot hide.", buttonUrl: "https://unsplash.com/@kevinbosc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" }
	];

	return (
		<>
			<Navbar title={"React Landing Page!"} firstitem={"Home"} seconditem={"About"} thirditem={"Services"} fourthitem={"Contact"} textcolor="white" bgcolor="black" />
			<div className="container-fluid">
				<Jumbotron title={"A Warm Welcome!"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate felis porttitor dui euismod elementum. Nullam dictum viverra sapien, sit."} buttonUrl={"https://www.google.cl/maps/place/Instituto+Psiqui%C3%A1trico+Dr.+Jos%C3%A9+Horwitz+Barak/@-33.4163922,-70.6642558,14.54z/data=!4m9!1m2!2m1!1smanicomio!3m5!1s0x9662c5c08954db31:0x576bce46669baaef!8m2!3d-33.4228217!4d-70.6508485!15sCgltYW5pY29taW9aCyIJbWFuaWNvbWlvkgEUcHN5Y2hpYXRyaWNfaG9zcGl0YWw"} buttonContent={"Not sure why you are here?"} />
				<CardGroup cards={cards} />
			</div>
		</>
	);
};

export default Home;
