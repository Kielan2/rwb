 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Flip,ScrollTrigger,Draggable,TextPlugin)
 
  let headerFirst = document.querySelectorAll('.hero-img .first-section img')
  let headerSecond = document.querySelector('.hero-img .second-section img')
  let headerContent = document.querySelector("header .content")

gsap.set(headerFirst, {
	scale: 0,
	x: '100%'
})

gsap.set(headerSecond, {
	scale: 0,
	y: '-100%'
})

gsap.from(headerContent, {
	x: "-100%",
	y: "-100%",
	ease: "power1.out",
	duration: 5
})

gsap.to(headerFirst, {
	x: "0%", 
	scale: 1,
	ease: "power2.out",
	duration: 5,
	stagger: 1
})

gsap.to(headerSecond, {
	y: "0%", 
	scale: 1,
	ease: "power1.out",
	duration: 3
})




//   gsap.from(hero, {
// 	x: -100,
// 	ease: "none",
// 	scrollTrigger: {
// 		duration: 1,
// 	  trigger: hero,
// 	  // start: "top bottom", // the default values
// 	  // end: "bottom top",
// 	  scrub: true
// 	}, 
//   });
  
//   gsap.to(".pImage", {
// 	yPercent: 50,
// 	ease: "none",
// 	scrollTrigger: {
// 	  trigger: ".pSection",
// 	  // start: "top bottom", // the default values
// 	  // end: "bottom top",
// 	  scrub: true
// 	}, 
//   });
  

 });

