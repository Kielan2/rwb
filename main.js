 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Flip,ScrollTrigger,Draggable,TextPlugin,ScrollToPlugin)

  const sections = document.querySelectorAll("section");

const scrolling = {
    enabled: true,
    events: "scroll,wheel,touchmove,pointermove".split(","),
    prevent: e => e.preventDefault(),
    disable() {
      if (scrolling.enabled) {
        scrolling.enabled = false;
        window.addEventListener("scroll", gsap.ticker.tick, {passive: true});
        scrolling.events.forEach((e, i) => (i ? document : window).addEventListener(e, scrolling.prevent, {passive: false}));
      }
    },
    enable() {
      if (!scrolling.enabled) {
        scrolling.enabled = true;
        window.removeEventListener("scroll", gsap.ticker.tick);
        scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, scrolling.prevent));
      }
    }
  };


function goToSection(section, anim, i) {
  if (scrolling.enabled) { 
    scrolling.disable();
    gsap.to(window, {
      scrollTo: {y: section, autoKill: false},
      onComplete: scrolling.enable,
      duration: 1
    });

    anim && anim.restart();
  }
}

sections.forEach((section, i) => {
  const intoAnim = gsap.from(section.querySelector(".right-col"), {yPercent: 50, duration: 1, paused: true});
  
  ScrollTrigger.create({
    trigger: section,
    start: "top bottom-=1",
    end: "bottom top+=1",
    onEnter: () => goToSection(section, intoAnim),
    onEnterBack: () => goToSection(section)
  });
 
});
 
  let headerFirst = document.querySelectorAll('.hero-img .first-section img')
  let headerSecond = document.querySelector('.hero-img .second-section img')
  let headerContent = document.querySelector(".header .content")

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
	duration: 3
})

gsap.to(headerFirst, {
	x: "0%", 
	scale: 1,
	ease: "power2.out",
	duration: 3,
	stagger: 1
})

gsap.to(headerSecond, {
	y: "0%", 
	scale: 1,
	ease: "power1.out",
	duration: 2
})

let standForText = document.querySelector('.stand-for .content h2');

gsap.to(standForText, {
  scrollTrigger: {
    trigger: ".stand-for",
    start: "top 10%", 
    onEnter: () => {
      gsap.to(standForText, {
        duration: 1,
    delay: .25,
    ease: "power1.in",
        text: {
          value: 'What Does It Stand For?',
          newClass: "after-text",
          delimiter: " ",
          type: 'diff'
        },
        overwrite: true
      });
    },
    scrub: false,
  },
});

let history = document.querySelector('.history .content');

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".history",
    start: "top center", 
    scrub: false,
  }
});

tl.fromTo(history, 
  {
    x: "100%",  // Start completely off-screen to the right
    opacity: 0  // Start fully transparent
  },
  {
    x: 0,        // End at the original position
    opacity: 1,  // End fully opaque
    duration: 1.5,
    ease: "power1.out"
  }
);



let gallery = gsap.utils.toArray(".image-container");

let numbers = gsap.utils.toArray(".number-item");
let canyons = gsap.utils.toArray(".canyon-item");
let titles = gsap.utils.toArray(".title-item");
console.log(gallery)
console.log(numbers)

gsap.to(gallery, {
  xPercent: -100 * (gallery.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".images-wrapper",
    pin: true,
    scrub: 1,
    snap: 1 / (gallery.length - 1),
    end: () =>
      "+=" + (document.querySelector(".images-wrapper").offsetWidth - 5)
  }
});

gallery.forEach((e, i) => {
  ScrollTrigger.create({
    trigger: e,
    start: i * e.offsetWidth,
    end: i * e.offsetWidth + e.offsetWidth,
    onEnter: () => showItem(i),
    onEnterBack: () => {
      hideItem(i + 1);
      showItem(i);
    },
    onLeave: () => hideItem(i)
  });
});

function hideItem(index) {
  if (index > gallery.length - 1 || index < 0) return;

  // add class to new sections
  numbers[index].classList.remove("active");
  titles[index].classList.remove("active");
  canyons[index].classList.remove("active");
}

function showItem(index) {
  if (index > gallery.length - 1 || index < 0) return;

  // add class to new sections
  numbers[index].classList.add("active");
  titles[index].classList.add("active");
  canyons[index].classList.add("active");
}






// let rwbLogo = document.querySelector('.rwb-logo')
// let firstSection = document.querySelector('.first')
// let firstTrigger = document.getElementById('first-trigger')

// gsap.to(myDiv, {
// 	duration: 2,
// 	scrollTo: { y: 400, autoKill: true },
// 	ease: "power2",
//   });

  //scroll #someID into view with 50 pixels from the top (like a margin)
// gsap.to(window, { duration: 2, scrollTo: { y: firstSection} });

//   gsap.to(rwbLogo, {
// 	yPercent: 100,
// 	ease: "none",
// 	scale: .25,
// 	scrollTrigger: {
// 		duration: 2,
// 	  trigger: firstSection,
// 	  // start: "top bottom",
// 	  // end: "bottom top",
// 	  scrub: true
// 	}, 
//   });
  
//   gsap.to(firstSection, {
// 	yPercent: -100,
// 	ease: "none",
// 	scrollTrigger: {
// 	  trigger: firstTrigger,
// 	  // start: "top bottom",
// 	  // end: "bottom top",
// 	  scrub: true
// 	}, 
//   });
  

 });

